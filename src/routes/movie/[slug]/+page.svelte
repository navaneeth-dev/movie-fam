<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
	import 'iconify-icon';
	import { enhance } from '$app/forms';
	import { fly } from 'svelte/transition';
	import Seo from '$lib/components/Seo.svelte';
</script>

<div class="mt-4 flex flex-col md:flex-row gap-2" in:fly={{ y: 50, duration: 500 }}>
	<div>
		<img
			src={`https://image.tmdb.org/t/p/original${data.movie.poster_path}`}
			alt={data.movie.title}
			class="rounded-lg aspect-[2/3] max-h-[700px] object-cover"
		/>
	</div>
	<form class="flex-1" method="post" use:enhance>
		<input type="hidden" name="movie_id" value={data.movie.id} />
		<input type="hidden" name="movie_title" value={data.movie.title} />
		<input type="hidden" name="movie_overview" value={data.movie.overview} />
		<input type="hidden" name="poster_path" value={data.movie.poster_path} />
		<input type="hidden" name="user_id" value={data.user?.id} />
		<h2 class="text-2xl font-bold">{data.movie.title}</h2>
		<p class="text-neutral-700 text-sm mt-2">{data.movie.release_date}</p>
		<p class="leading-6 mt-4">{data.movie.overview}</p>
		{#if data.user}
			<button
				class="px-2 py-1 rounded bg-blue-500 hover:bg-blue-600 text-white mt-4 flex items-center gap-1 disabled:bg-blue-200 disabled:cursor-not-allowed"
				disabled={data.saved}
			>
				<span>Save</span>
				<iconify-icon icon="material-symbols:bookmark" />
			</button>
		{:else}
			<a
				href="/login"
				class="inline-block select-none px-2 py-1 rounded bg-blue-500 hover:bg-blue-600 text-white mt-4 disabled:bg-blue-200 disabled:cursor-not-allowed"
				>Login to save</a
			>
		{/if}
	</form>
</div>

<Seo
	title={data.movie.title}
	description={data.movie.overview}
	image={`https://image.tmdb.org/t/p/original${data.movie.poster_path}`}
/>
