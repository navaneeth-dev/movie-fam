import type { MovieSaves } from '$lib/api-types';
import { serializeNonPOJOs } from '$lib/utils';
import type { PageServerLoad } from './$types';

export const load = (async ({ locals }) => {
	const movies: MovieSaves[] = serializeNonPOJOs(await locals.pb.collection('saves').getFullList());
	return { movies };
}) satisfies PageServerLoad;
