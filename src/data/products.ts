export type Registry = { type: 'npm' | 'pypi'; name: string };

export type Snippet = {
	/** Shiki language id. */
	lang: 'python' | 'ts' | 'bash';
	/** Title shown on the code window. */
	title: string;
	code: string;
};

export type Product = {
	id: 'mlbundle' | 'mlschema' | 'mlform' | 'mlsuite';
	name: string;
	kind: 'app' | 'library';
	language: 'TypeScript' | 'Python';
	/** Step on the path from trained model to reviewed prediction. */
	stage: string;
	/** A few words for the family index. */
	short: string;
	/** The panel headline: what the visitor gets. */
	headline: string;
	description: string;
	/** Maturity note shown beside the version, when the project states one. */
	status?: string;
	repo: string;
	registry?: Registry;
	install?: string;
	docs?: string;
	app?: string;
	/** Copied from the project's README; never invent API. */
	snippet: Snippet;
};

// Docs links live here only, so moving them to *.eshkra.dev is a one-line change.
export const products: Product[] = [
	{
		id: 'mlbundle',
		name: 'mlbundle',
		kind: 'library',
		language: 'Python',
		stage: 'Package',
		short: 'Pickle-free model bundles',
		headline: 'Ship models without pickle.',
		description:
			'One verifiable .mlbundle file with the model in its native format, a manifest of the training environment and a locally inferred schema. Works with scikit-learn, XGBoost, CatBoost and ONNX.',
		status: 'pre-alpha',
		repo: 'UlloaSP/mlbundle',
		registry: { type: 'pypi', name: 'mlbundle' },
		install: 'pip install mlbundle',
		docs: 'https://github.com/UlloaSP/mlbundle#readme',
		snippet: {
			lang: 'python',
			title: 'train.py',
			code: `from sklearn.tree import DecisionTreeClassifier
from mlbundle import export, load

rows = [[0.0, 1.0], [1.0, 0.0], [0.1, 0.9], [0.9, 0.1]]
model = DecisionTreeClassifier(random_state=7).fit(
    rows, ["cold", "warm"] * 2
)
export(
    model, "trained.mlbundle",
    feature_names=["temperature", "humidity"],
)

bundle = load("trained.mlbundle")
print(bundle.predict_proba([[0.0, 1.0]]))  # [[1.0, 0.0]]`,
		},
	},
	{
		id: 'mlschema',
		name: 'mlschema',
		kind: 'library',
		language: 'Python',
		stage: 'Describe',
		short: 'Schemas from DataFrames',
		headline: 'Typed inputs, straight from your data.',
		description:
			'Infer validated, JSON-serialisable field schemas from pandas DataFrames, then refine only what is product-specific: labels, bounds, defaults and units.',
		repo: 'UlloaSP/mlschema',
		registry: { type: 'pypi', name: 'mlschema' },
		install: 'pip install mlschema',
		docs: 'https://ulloasp.github.io/mlschema/',
		snippet: {
			lang: 'python',
			title: 'schema.py',
			code: `import pandas as pd
from mlschema import infer_schema

df = pd.DataFrame({
    "score": [98.5, 86.0, 91.0],
    "role": pd.Categorical(
        ["engineer", "engineer", "scientist"]
    ),
    "active": [True, False, True],
})

schema = infer_schema(df)
# [{"kind": "number", "label": "score", ...},
#  {"kind": "category", "label": "role", ...},
#  {"kind": "boolean", "label": "active", ...}]`,
		},
	},
	{
		id: 'mlform',
		name: 'mlform',
		kind: 'library',
		language: 'TypeScript',
		stage: 'Render',
		short: 'Schema-driven forms',
		headline: 'Prediction forms from a schema.',
		description:
			'A schema-driven form runtime and Web Component kit. Validation, submission state and result rendering included; use the full UI or build your own on the headless runtime.',
		status: 'pre-1.0',
		repo: 'UlloaSP/mlform',
		registry: { type: 'npm', name: 'mlform' },
		install: 'npm i mlform',
		docs: 'https://ulloasp.github.io/mlform/',
		snippet: {
			lang: 'ts',
			title: 'form.ts',
			code: `import { mountForm } from "mlform";

mountForm(container, {
  transport,
  schema: {
    fields: [
      {
        id: "threshold",
        kind: "number",
        label: "Confidence threshold",
        min: 0,
        max: 1,
        defaultValue: 0.75,
        mappedTo: "threshold",
      },
    ],
    reports: [
      {
        id: "prediction",
        kind: "classifier",
        label: "Prediction",
        mappedTo: "prediction",
      },
    ],
  },
});`,
		},
	},
	{
		id: 'mlsuite',
		name: 'MLsuite',
		kind: 'app',
		language: 'TypeScript',
		stage: 'Run & review',
		short: 'Model review platform',
		headline: 'From trained model to reviewed prediction.',
		description:
			'Upload a bundle, run single or bulk predictions through a generated form, collect reviews and corrections, and export everything for evaluation or retraining. Self-host it with Docker Compose.',
		status: 'early',
		repo: 'UlloaSP/mlsuite',
		app: 'https://mlsuite.irlab.org',
		snippet: {
			lang: 'bash',
			title: 'Terminal',
			code: `git clone https://github.com/UlloaSP/mlsuite.git
cd mlsuite && cp .env.example .env
docker compose -f docker-compose.yml \\
  -f docker-compose.dev.yml up --build -d
# then open http://localhost:5173`,
		},
	},
];

export const libraries = products.filter((p) => p.kind === 'library');
export const applications = products.filter((p) => p.kind === 'app');
