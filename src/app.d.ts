import type PocketBase, { Record, Admin } from 'pocketbase';

declare namespace App {
	// interface Error {}
	// interface Locals {}
	// interface PageData {}
	// interface Platform {}
}

declare global {
	declare namespace App {
		interface Locals {
			pb: PocketBase;
			user: Record | Admin | null;
		}
	}
}
