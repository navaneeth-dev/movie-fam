<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h1 class="text-2xl font-bold mt-4">Popular</h1>
<div class="grid grid-cols-[repeat(auto-fit,_minmax(150px,1fr))] gap-6 mt-4">
	{#each data.movies as movie (movie.id)}
		<div class="flex flex-col items-center gap-1 text-center">
			<img
				src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
				alt={movie.title}
				class="rounded-lg w-[150px] object-cover h-[225px]"
			/>
			<a href={`/movie/${movie.id}`} class="font-semibold hover:text-blue-500">{movie.title}</a>
			<p class="text-neutral-700">{movie.release_date.substring(0, 4)}</p>
		</div>
	{/each}
</div>
