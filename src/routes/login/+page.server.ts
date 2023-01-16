import type { PageServerLoad } from './$types';

export const load = (async ({ locals, cookies }) => {
	const authMethods = await locals.pb.collection('users').listAuthMethods();
	const provider = authMethods.authProviders[0];
	cookies.set('provider', JSON.stringify(provider));
	return {
		provider
	};
}) satisfies PageServerLoad;
