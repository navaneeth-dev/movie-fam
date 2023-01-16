import type { MovieSaves } from '$lib/api-types';
import { serializeNonPOJOs } from '$lib/utils';
import type { PageServerLoad } from './$types';

export const load = (async ({ locals }) => {
	const movies: MovieSaves[] = serializeNonPOJOs(
		await locals.pb.collection('saves').getFullList(200, { sort: '-created' })
	);
	return { movies };
}) satisfies PageServerLoad;
