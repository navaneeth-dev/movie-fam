import type { Movie } from 'src/lib/api-types';
import type { PageServerLoad } from './$types';
import { THE_MOVIE_DB_API_KEY } from '$env/static/private';

export const load: PageServerLoad = async () => {
	const response = await fetch(
		`https://api.themoviedb.org/3/trending/movie/week?api_key=${THE_MOVIE_DB_API_KEY}`
	);
	const movies: Movie[] = (await response.json()).results;
	return { movies };
};
