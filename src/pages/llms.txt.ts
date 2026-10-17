import type { APIRoute } from 'astro';
import { products } from '../data/products';
import { llmsTxt } from '../data/site';
import { getStats } from '../lib/stats';

export const GET: APIRoute = async () => {
	const stats = await getStats(products);
	const versions = Object.fromEntries([...stats].map(([id, s]) => [id, s.version]));
	return new Response(llmsTxt(versions), {
		headers: { 'Content-Type': 'text/plain; charset=utf-8' },
	});
};
