<script lang="ts">
	import type { Admin, Record } from 'pocketbase';

	export let user: Record | Admin | null;
</script>

<header class="bg-neutral-900 h-14 text-white">
	<div class="safe-area flex items-center h-full justify-between">
		<a href="/" class="font-bold hover:text-neutral-200">MovieFam</a>
		<div>
			{#if !user}
				<a href="/login" class="px-2 py-1 rounded bg-blue-500 hover:bg-blue-600">Login</a>
				<button class="px-2 py-1 rounded bg-white hover:bg-neutral-200 text-black">Register</button>
			{:else}
				<p>{user.email}</p>
			{/if}
		</div>
	</div>
</header>
