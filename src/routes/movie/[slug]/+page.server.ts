import { THE_MOVIE_DB_API_KEY } from '$env/static/private';
import type { Movie, Trailer } from '$lib/api-types';
import { error } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { ClientResponseError } from 'pocketbase';

export const load = (async ({ params, locals }) => {
	const response = await fetch(
		`https://api.themoviedb.org/3/movie/${params.slug}?api_key=${THE_MOVIE_DB_API_KEY}`
	);
	const movie: Movie = await response.json();
	const trailerResponse = await fetch(
		`https://api.themoviedb.org/3/movie/${params.slug}/videos?api_key=${THE_MOVIE_DB_API_KEY}`
	);
	const trailers: Trailer = (await trailerResponse.json()).results;
	try {
		await locals.pb.collection('saves').getFirstListItem(`movie_id="${movie.id}"`);
		return {
			movie,
			trailers,
			saved: true
		};
	} catch (err) {
		if (err instanceof ClientResponseError) {
			console.log(err.message);
		} else {
			console.log('Unknown error', err);
		}
	}

	return {
		movie,
		trailers,
		saved: false
	};
}) satisfies PageServerLoad;

export const actions: Actions = {
	default: async ({ request, locals }) => {
		const formData = await request.formData();
		try {
			await locals.pb.collection('saves').create(formData);
		} catch (err) {
			console.log(err);
			throw error(500, 'Something went wrong');
		}
	}
};
