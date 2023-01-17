<script lang="ts">
	import type { Admin, Record } from 'pocketbase';
	import 'iconify-icon';
	import type { Movie } from '$lib/api-types';

	let searchText = '';
	let resultMovies: Movie[] = [];

	export let user: Record | Admin | null;

	const debounce = (cb: (...args: any[]) => any, delay = 1000) => {
		let timeout: ReturnType<typeof setTimeout>;
		return (...args: any[]) => {
			clearTimeout(timeout);
			timeout = setTimeout(() => cb(...args), delay);
		};
	};
	const searchMovies = debounce(async () => {
		const response = await fetch(`/search/?query=${searchText}`);
		resultMovies = await response.json();
	});
</script>

<header class="bg-neutral-900 h-14 text-white">
	<div class="safe-area flex items-center h-full justify-between">
		<a href="/" class="font-bold hover:text-neutral-200">MovieFam</a>
		<div class="relative">
			<input
				type="text"
				class="bg-transparent border border-neutral-700 px-2 py-1 rounded outline-none lg:min-w-[400px]"
				placeholder="Search"
				on:input={searchMovies}
				bind:value={searchText}
			/>
			<ul
				class="absolute top-10 bg-neutral-900/90 border border-neutral-700 rounded w-full shadow-lg flex flex-col gap-0"
			>
				{#each resultMovies as movie (movie.id)}
					<li class="p-2 hover:bg-neutral-700">
						<a
							class="flex-1 flex justify-between"
							href={'/movie/' + movie.id}
							on:click={() => (resultMovies = [])}
						>
							<span class="font-bold">
								{movie.title}
							</span>
							<span class="text-sm text-neutral-200">{movie.release_date ? movie.release_date.substring(0, 4) : 'N/A'}</span>
						</a>
					</li>
				{/each}
			</ul>
		</div>
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
