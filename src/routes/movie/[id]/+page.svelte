<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<div class="mt-4 flex flex-col md:flex-row gap-2">
	<div>
		<img
			src={`https://image.tmdb.org/t/p/original${data.movie.poster_path}`}
			alt={data.movie.title}
			class="rounded-lg aspect-[2/3] max-h-[700px] object-cover"
		/>
	</div>
	<div class="flex-1">
		<h2 class="text-2xl font-bold mt-4">{data.movie.title}</h2>
		<p class="text-neutral-700 text-sm mt-2">{data.movie.release_date}</p>
		<p class="leading-4 mt-4">{data.movie.overview}</p>
	</div>
</div>
