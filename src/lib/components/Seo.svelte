<script lang="ts">
	export let title: string;
	export let description: string;
	export let image: string;
</script>

<svelte:head>
	<meta property="og:title" content={title} />
	<meta property="og:type" content="website" />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={image} />
</svelte:head>
