export type Registry = { type: 'npm' | 'pypi'; name: string };

export type Product = {
	id: string;
	name: string;
	kind: 'app' | 'library';
	language: 'TypeScript' | 'Python';
	/** Position in the model-to-feedback pipeline. */
	stage: string;
	tagline: string;
	description: string;
	repo: string;
	registry?: Registry;
	install?: string;
	links: { label: string; href: string }[];
};

// Docs links live here only, so moving them to *.eshkra.dev is a one-line change.
export const products: Product[] = [
	{
		id: 'mlbundle',
		name: 'mlbundle',
		kind: 'library',
		language: 'Python',
		stage: 'Package',
		tagline: 'Pickle-free, verifiable model bundles.',
		description:
			'One file with the model in its native format, a manifest, its schema and its structure. Works with scikit-learn, XGBoost, CatBoost and ONNX.',
		repo: 'UlloaSP/mlbundle',
		registry: { type: 'pypi', name: 'mlbundle' },
		install: 'pip install mlbundle',
		links: [{ label: 'Docs', href: 'https://github.com/UlloaSP/mlbundle#readme' }],
	},
	{
		id: 'mlschema',
		name: 'mlschema',
		kind: 'library',
		language: 'Python',
		stage: 'Describe',
		tagline: 'Field schemas inferred from your data.',
		description:
			'Infers validated, frontend-ready field schemas from pandas DataFrames, so a model’s inputs are typed before anyone fills them in.',
		repo: 'UlloaSP/mlschema',
		registry: { type: 'pypi', name: 'mlschema' },
		install: 'pip install mlschema',
		links: [{ label: 'Docs', href: 'https://ulloasp.github.io/mlschema/' }],
	},
	{
		id: 'mlform',
		name: 'mlform',
		kind: 'library',
		language: 'TypeScript',
		stage: 'Render',
		tagline: 'Forms from schemas, as Web Components.',
		description:
			'A schema-driven form runtime and Web Component kit for machine-learning interfaces. Drop it into any framework, or none.',
		repo: 'UlloaSP/mlform',
		registry: { type: 'npm', name: 'mlform' },
		install: 'npm i mlform',
		links: [{ label: 'Docs', href: 'https://ulloasp.github.io/mlform/' }],
	},
	{
		id: 'mlsuite',
		name: 'MLSuite',
		kind: 'app',
		language: 'TypeScript',
		stage: 'Run & review',
		tagline: 'Trained models, turned into reviewable apps.',
		description:
			'Upload a bundle, run predictions through a generated form, collect human feedback and export it for evaluation or retraining. Self-host it with Docker Compose.',
		repo: 'UlloaSP/mlsuite',
		links: [{ label: 'Open the app', href: 'https://mlsuite.irlab.org' }],
	},
];
