import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = ({ locals }) => {
	return {
		user: locals.pb.authStore.isValid ? locals.user : null
	};
};
