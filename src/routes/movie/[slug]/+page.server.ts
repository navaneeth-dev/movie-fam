import { THE_MOVIE_DB_API_KEY } from '$env/static/private';
import type { Movie, Trailer } from '$lib/api-types';
import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {
	const response = await fetch(
		`https://api.themoviedb.org/3/movie/${params.slug}?api_key=${THE_MOVIE_DB_API_KEY}`
	);
	const movie: Movie = await response.json();
	const trailerResponse = await fetch(
		`https://api.themoviedb.org/3/movie/${params.slug}/videos?api_key=${THE_MOVIE_DB_API_KEY}`
	);
	const trailers: Trailer = (await trailerResponse.json()).results;
	return {
		movie,
		trailers
	};
}) satisfies PageServerLoad;
