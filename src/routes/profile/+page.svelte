<script lang="ts">
	import { fly } from 'svelte/transition';
	import type { PageData } from './$types';
	export let data: PageData;
	import dayjs from 'dayjs';
</script>

<div class="mt-4">
	<h2 class="text-xl font-bold">Profile:</h2>
	<p>{data.user?.email}</p>
	<p>Joint: {dayjs(data.user?.created).format('DD MMM YYYY')}</p>

	<hr class="mt-2" />

	<h2 class="mt-4 text-xl font-bold">Saves:</h2>
	<div
		class="grid grid-cols-[repeat(auto-fit,_minmax(150px,1fr))] gap-6 mt-4"
		in:fly={{ y: 50, duration: 500 }}
	>
		{#each data.movies as movie (movie.id)}
			<div class="flex flex-col items-center gap-1 text-center">
				<img
					src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
					alt={movie.movie_title}
					class="rounded-lg w-[150px] object-cover h-[225px]"
				/>
				<a href={`/movie/${movie.movie_id}`} class="font-semibold hover:text-blue-500"
					>{movie.movie_title}</a
				>
				<time datetime={movie.created} class="text-sm"
					>Saved At: {dayjs(movie.created).format('DD MMM YYYY hh:mm:ss')}</time
				>
			</div>
		{/each}
	</div>
</div>
