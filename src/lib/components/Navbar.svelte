<script lang="ts">
	import type { Admin, Record } from 'pocketbase';
	import 'iconify-icon';

	export let user: Record | Admin | null;
</script>

<header class="bg-neutral-900 h-14 text-white">
	<div class="safe-area flex items-center h-full justify-between">
		<a href="/" class="font-bold hover:text-neutral-200">MovieFam</a>
		<input
			type="text"
			class="bg-transparent border border-neutral-700 px-2 py-1 rounded outline-none lg:min-w-[400px]"
			placeholder="Search"
		/>
		<div>
			{#if !user}
				<a href="/login" class="px-2 py-1 rounded bg-blue-500 hover:bg-blue-600 inline-block"
					>Login</a
				>
				<button class="px-2 py-1 rounded bg-white hover:bg-neutral-200 text-black inline-block"
					>Register</button
				>
			{:else}
				<a
					href="/profile"
					class="px-2 py-1 rounded bg-blue-500 hover:bg-blue-600 flex items-center gap-1 h-8"
				>
					<iconify-icon icon="healthicons:ui-user-profile" />
					<span class="hidden md:block">Profile</span>
				</a>
			{/if}
		</div>
	</div>
</header>
