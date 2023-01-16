import { THE_MOVIE_DB_API_KEY } from '$env/static/private';
import type { Movie } from '$lib/api-types';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET = (async ({ url }) => {
	const query = url.searchParams.get('query');
	const response = await fetch(
		`https://api.themoviedb.org/3/search/movie/?api_key=${THE_MOVIE_DB_API_KEY}&query=${query}`
	);
	const movies: Movie[] = (await response.json()).results;
	return json(movies);
}) satisfies RequestHandler;
