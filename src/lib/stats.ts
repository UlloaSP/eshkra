import type { Product } from '../data/products';

export type Stats = { stars: number | null; monthlyDownloads: number | null };

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

async function getMonthlyDownloads(registry: Product['registry']): Promise<number | null> {
	if (!registry) return null;
	if (registry.type === 'npm') {
		const data = await getJson<{ downloads: number }>(
			`https://api.npmjs.org/downloads/point/last-month/${registry.name}`,
		);
		return data?.downloads ?? null;
	}
	const data = await getJson<{ data: { last_month: number } }>(
		`https://pypistats.org/api/packages/${registry.name}/recent`,
	);
	return data?.data.last_month ?? null;
}

export async function getStats(products: Product[]): Promise<Map<string, Stats>> {
	const entries = await Promise.all(
		products.map(async (p) => {
			const [stars, monthlyDownloads] = await Promise.all([
				getStars(p.repo),
				getMonthlyDownloads(p.registry),
			]);
			return [p.id, { stars, monthlyDownloads }] as const;
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
