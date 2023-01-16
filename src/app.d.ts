import type PocketBase from 'pocketbase';

declare global {
	declare namespace App {
		// interface Error {}
		interface Locals {
			pb: PocketBase;
			user: PocketBase['authStore']['model'];
		}
		// interface PageData {}
		// interface Platform {}
	}
}
