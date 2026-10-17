import { defineConfig } from 'vite-plus';

export default defineConfig({
	staged: {
		'*': 'vp check --fix',
	},
	// Matches the Astro defaults, since oxfmt does not format .astro files.
	fmt: {
		useTabs: true,
		singleQuote: true,
		printWidth: 100,
		ignorePatterns: ['dist', '.astro', 'node_modules', 'pnpm-lock.yaml'],
	},
	lint: {
		ignorePatterns: ['dist', '.astro', 'node_modules'],
		jsPlugins: [{ name: 'vite-plus', specifier: 'vite-plus/oxlint-plugin' }],
		rules: { 'vite-plus/prefer-vite-plus-imports': 'error' },
		options: { typeAware: true, typeCheck: true },
	},
});
