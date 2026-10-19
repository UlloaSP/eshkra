import type { ImageMetadata } from 'astro';
import mlformDark from '../assets/captures/mlform-dark.png';
import mlformLight from '../assets/captures/mlform-light.png';
import mlsuiteDark from '../assets/captures/mlsuite-dark.png';
import mlsuiteLight from '../assets/captures/mlsuite-light.png';

export type Registry = { type: 'npm' | 'pypi'; name: string };

export type Snippet = {
	/** Shiki language id. */
	lang: 'python' | 'ts' | 'bash';
	/** Title shown on the code window. */
	title: string;
	code: string;
};

/** A screenshot from the project's own landing page, in both themes. */
export type Capture = {
	/** Title shown on the window. */
	title: string;
	alt: string;
	light: ImageMetadata;
	dark: ImageMetadata;
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
	/** The project's own site, under *.eshkra.dev. */
	site: string;
	docs: string;
	/** In-browser playground, for the libraries. */
	playground?: string;
	/** Public instance, for the application. */
	app?: string;
	/** Copied from the project's README; never invent API. */
	snippet?: Snippet;
	/** Shown instead of a snippet when the project is easier to see than to read. */
	capture?: Capture;
};

// Every project link lives here only; components and SEO derive theirs from this list.
export const products: Product[] = [
	{
		id: 'mlbundle',
		name: 'MLbundle',
		kind: 'library',
		language: 'Python',
		stage: 'Package',
		short: 'Pickle-free model bundles',
		headline: 'Ship models without pickle.',
		description:
			'One verifiable .mlbundle file with the model in its native format, a manifest of the training environment and a locally inferred schema. Works with scikit-learn, XGBoost, CatBoost and ONNX.',
		repo: 'UlloaSP/mlbundle',
		registry: { type: 'pypi', name: 'mlbundle' },
		install: 'pip install "mlbundle[sklearn,schema]"',
		site: 'https://mlbundle.eshkra.dev',
		docs: 'https://docs.mlbundle.eshkra.dev',
		playground: 'https://playground.mlbundle.eshkra.dev',
		snippet: {
			lang: 'python',
			title: 'train.py',
			code: `import pandas as pd
from sklearn.tree import DecisionTreeClassifier
from mlbundle import export, load

training = pd.DataFrame({
    "temperature": [0.0, 1.0, 0.1, 0.9],
    "humidity": [1.0, 0.0, 0.9, 0.1],
    "target": ["cold", "warm", "cold", "warm"],
})
model = DecisionTreeClassifier(random_state=7).fit(
    training.drop(columns="target"), training["target"]
)
export(model, "trained.mlbundle",
       training_data=training, target_names=["target"])

bundle = load("trained.mlbundle")
result = bundle.predict_record(
    {"temperature": 0.0, "humidity": 1.0}
)[0]
print(result.predicted_label)  # cold`,
		},
	},
	{
		id: 'mlschema',
		name: 'MLschema',
		kind: 'library',
		language: 'Python',
		stage: 'Describe',
		short: 'Schemas from DataFrames',
		headline: 'Typed inputs, straight from your data.',
		description:
			'Infer validated, JSON-serialisable field schemas from pandas DataFrames, then refine only what is product-specific: labels, bounds and defaults.',
		status: 'pre-1.0',
		repo: 'UlloaSP/mlschema',
		registry: { type: 'pypi', name: 'mlschema' },
		install: 'pip install mlschema',
		site: 'https://mlschema.eshkra.dev',
		docs: 'https://docs.mlschema.eshkra.dev',
		playground: 'https://playground.mlschema.eshkra.dev',
		snippet: {
			lang: 'python',
			title: 'schema.py',
			code: `import pandas as pd
from mlschema import infer_schema

frame = pd.DataFrame({
    "age": [28, 41],
    "plan": pd.Categorical(["free", "pro"]),
    "active": [True, False],
})

fields = infer_schema(frame)
# [{"kind": "number", "label": "age", ...},
#  {"kind": "category", "label": "plan", ...},
#  {"kind": "boolean", "label": "active", ...}]`,
		},
	},
	{
		id: 'mlform',
		name: 'MLform',
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
		site: 'https://mlform.eshkra.dev',
		docs: 'https://docs.mlform.eshkra.dev',
		playground: 'https://playground.mlform.eshkra.dev',
		// UlloaSP/mlform landing/src/assets/hero-{light,dark}.png
		capture: {
			title: 'Prediction form',
			alt: 'An MLform form with validated temperature, humidity, wind speed and location fields, and forecast reports showing a 22.66 °C estimate and stable versus changing probabilities.',
			light: mlformLight,
			dark: mlformDark,
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
		site: 'https://mlsuite.eshkra.dev',
		docs: 'https://docs.mlsuite.eshkra.dev',
		app: 'https://mlsuite.irlab.org',
		// UlloaSP/mlsuite landing/src/assets/captures/predict-{light,dark}.png
		capture: {
			title: 'MLsuite · Predict',
			alt: 'The MLsuite Predict page for a penguin-survey schema: species probabilities, a body mass estimate, the unsaved run in the session panel and the workspace navigation.',
			light: mlsuiteLight,
			dark: mlsuiteDark,
		},
	},
];

export const libraries = products.filter((p) => p.kind === 'library');
export const applications = products.filter((p) => p.kind === 'app');
