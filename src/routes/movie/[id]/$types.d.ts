import type * as Kit from '@sveltejs/kit';

type RouteParams = {
	id: string;
};

export type PageServerLoad = Kit.ServerLoad<RouteParams>;
