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
		// Search engine verification files must stay byte-for-byte as issued.
		ignorePatterns: [
			'dist',
			'.astro',
			'.impeccable',
			'node_modules',
			'pnpm-lock.yaml',
			'public/google*.html',
		],
	},
	lint: {
		ignorePatterns: ['dist', '.astro', 'node_modules'],
		jsPlugins: [{ name: 'vite-plus', specifier: 'vite-plus/oxlint-plugin' }],
		rules: { 'vite-plus/prefer-vite-plus-imports': 'error' },
		options: { typeAware: true, typeCheck: true },
	},
});
