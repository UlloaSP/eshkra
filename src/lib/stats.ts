import type { Product } from '../data/products';

export type Stats = {
	stars: number | null;
	/** All-time downloads. */
	downloads: number | null;
	version: string | null;
};

// Runs at build time only. A failed request yields null so a flaky API never breaks a deploy.
async function getJson<T>(url: string, headers: Record<string, string> = {}): Promise<T | null> {
	try {
		const res = await fetch(url, { headers: { 'User-Agent': 'eshkra.dev', ...headers } });
		if (!res.ok) {
			console.warn(`[stats] ${url} -> ${res.status}`);
			return null;
		}
		return (await res.json()) as T;
	} catch (error) {
		console.warn(`[stats] ${url} -> ${String(error)}`);
		return null;
	}
}

async function getStars(repo: string): Promise<number | null> {
	const token = process.env.GITHUB_TOKEN;
	const data = await getJson<{ stargazers_count: number }>(
		`https://api.github.com/repos/${repo}`,
		token ? { Authorization: `Bearer ${token}` } : {},
	);
	return data?.stargazers_count ?? null;
}

const DAY = 86_400_000;

// npm serves at most 18 months per range query, so sum one-year windows since the first publish.
async function getNpmDownloads(name: string): Promise<number | null> {
	const meta = await getJson<{ time: { created: string } }>(`https://registry.npmjs.org/${name}`);
	if (!meta) return null;
	const day = (t: number) => new Date(t).toISOString().slice(0, 10);
	const ranges: string[] = [];
	for (let from = Date.parse(meta.time.created); from < Date.now(); from += 365 * DAY) {
		ranges.push(`${day(from)}:${day(Math.min(from + 364 * DAY, Date.now()))}`);
	}
	const counts = await Promise.all(
		ranges.map((range) =>
			getJson<{ downloads: { downloads: number }[] }>(
				`https://api.npmjs.org/downloads/range/${range}/${name}`,
			),
		),
	);
	let total = 0;
	for (const count of counts) {
		if (!count) return null;
		total += count.downloads.reduce((acc, d) => acc + d.downloads, 0);
	}
	return total;
}

// PyPI publishes no download counts and pypistats keeps only 180 days, so totals come from pepy.tech.
async function getPypiDownloads(name: string): Promise<number | null> {
	const data = await getJson<{ total_downloads: number }>(
		`https://pepy.tech/api/v2/projects/${name}`,
	);
	return data?.total_downloads ?? null;
}

function getDownloads(registry: Product['registry']): Promise<number | null> {
	if (!registry) return Promise.resolve(null);
	return registry.type === 'npm' ? getNpmDownloads(registry.name) : getPypiDownloads(registry.name);
}

async function getVersion(registry: Product['registry']): Promise<string | null> {
	if (!registry) return null;
	if (registry.type === 'npm') {
		const data = await getJson<{ version: string }>(
			'https://registry.npmjs.org/' + registry.name + '/latest',
		);
		return data?.version ?? null;
	}
	const data = await getJson<{ info: { version: string } }>(
		'https://pypi.org/pypi/' + registry.name + '/json',
	);
	return data?.info.version ?? null;
}

export async function getStats(products: Product[]): Promise<Map<string, Stats>> {
	const entries = await Promise.all(
		products.map(async (p) => {
			const [stars, downloads, version] = await Promise.all([
				getStars(p.repo),
				getDownloads(p.registry),
				getVersion(p.registry),
			]);
			return [p.id, { stars, downloads, version }] as const;
		}),
	);
	return new Map(entries);
}

export function sum(values: (number | null)[]): number | null {
	const known = values.filter((v): v is number => v !== null);
	return known.length ? known.reduce((a, b) => a + b, 0) : null;
}

const compact = new Intl.NumberFormat('en', { notation: 'compact', maximumFractionDigits: 1 });
export const formatCount = (n: number) => compact.format(n);
