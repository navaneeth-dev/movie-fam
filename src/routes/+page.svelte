<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h1>Hi</h1>
<div>
	{#each data.movies as movie (movie.id)}
		<p>{movie.id}</p>
	{/each}
</div>
