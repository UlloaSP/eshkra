import { products } from './products';

export const site = {
	name: 'eshkra',
	url: 'https://eshkra.dev',
	github: 'https://github.com/UlloaSP',
	tagline: 'Open-source tooling for machine-learning models people can use',
	description:
		'eshkra builds open-source tools that take a trained machine-learning model to a form anyone can fill in: MLbundle packages models without pickle, MLschema infers field schemas from pandas DataFrames, MLform renders prediction forms, and MLsuite runs predictions and collects human feedback. All MIT licensed.',
	keywords: [
		'eshkra',
		'open source machine learning tools',
		'ML model deployment',
		'model packaging',
		'pickle-free model serialization',
		'scikit-learn',
		'XGBoost',
		'CatBoost',
		'ONNX',
		'pandas schema inference',
		'JSON schema from DataFrame',
		'prediction form',
		'web components',
		'human feedback',
		'human-in-the-loop',
		'model review',
		'mlbundle',
		'mlschema',
		'mlform',
		'mlsuite',
	],
};

/** schema.org graph for the home page: the organization, the site and its four projects. */
export function structuredData(versions: Record<string, string | null | undefined>) {
	const org = {
		'@type': 'Organization',
		'@id': `${site.url}/#org`,
		name: site.name,
		url: site.url,
	};
	return {
		'@context': 'https://schema.org',
		'@graph': [
			{
				...org,
				logo: `${site.url}/icon-512.png`,
				sameAs: [site.github],
				description: site.tagline,
			},
			{
				'@type': 'WebSite',
				'@id': `${site.url}/#website`,
				url: site.url,
				name: site.name,
				description: site.description,
				publisher: { '@id': org['@id'] },
				inLanguage: 'en',
			},
			...products.map((p) => ({
				'@type': p.kind === 'app' ? 'SoftwareApplication' : 'SoftwareSourceCode',
				'@id': `${site.url}/#${p.id}`,
				name: p.name,
				description: `${p.headline} ${p.description}`,
				url: `${site.url}/#${p.id}`,
				codeRepository: `https://github.com/${p.repo}`,
				programmingLanguage: p.language,
				license: 'https://opensource.org/licenses/MIT',
				...(versions[p.id] ? { version: versions[p.id] } : {}),
				...(p.kind === 'app'
					? {
							applicationCategory: 'DeveloperApplication',
							operatingSystem: 'Docker',
							...(p.app ? { installUrl: p.app } : {}),
						}
					: { runtimePlatform: p.language === 'Python' ? 'Python' : 'Node.js, browsers' }),
				author: { '@id': org['@id'] },
				isAccessibleForFree: true,
			})),
		],
	};
}

/** Plain-text summary for language-model agents (https://llmstxt.org). */
export function llmsTxt(versions: Record<string, string | null | undefined>) {
	const lines = [
		`# ${site.name}`,
		'',
		`> ${site.description}`,
		'',
		'The four projects form one path from a trained model to reviewed predictions: package (MLbundle), describe (MLschema), render (MLform), run and review (MLsuite). Each works on its own.',
		'',
		'## Projects',
		'',
	];
	for (const p of products) {
		const version = versions[p.id]
			? ` (latest ${versions[p.id]}${p.status ? `, ${p.status}` : ''})`
			: '';
		lines.push(
			`- [${p.name}](https://github.com/${p.repo}): ${p.headline} ${p.description}${version}`,
		);
		if (p.install) lines.push(`  - Install: \`${p.install}\``);
		if (p.docs) lines.push(`  - Docs: ${p.docs}`);
		if (p.app) lines.push(`  - Public instance: ${p.app}`);
	}
	lines.push(
		'',
		'## Optional',
		'',
		`- [GitHub organisation](${site.github}): source code for every project, all MIT licensed.`,
		`- [Home page](${site.url}/): overview with live download and star counts.`,
		'',
	);
	return lines.join('\n');
}
