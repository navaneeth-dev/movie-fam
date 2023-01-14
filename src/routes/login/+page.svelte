<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	function gotoAuthProvider() {
		const redirectUrl = `${window.origin}/redirect`;
		const url = data.provider.authUrl + redirectUrl;
		window.location.href = url;
	}
</script>

<div class="h-[calc(100vh_-_3.5rem)] flex justify-center items-center flex-col">
	<h2 class="text-2xl font-bold">Login/Register</h2>
	<button
		on:click={gotoAuthProvider}
		class="mt-4 px-2 py-1 rounded bg-blue-500 hover:bg-blue-600 text-white"
		>Login with Google</button
	>
</div>
