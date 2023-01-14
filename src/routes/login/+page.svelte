<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	function gotoAuthProvider() {
		const redirectUrl = `${window.origin}/redirect`;
		const url = data.provider.authUrl + redirectUrl;
		window.location.href = url;
	}
</script>

<button on:click={gotoAuthProvider}>Login with Google</button>
