<script lang="ts">
	import { browser } from '$app/environment';
	import type { PageData } from './$types';

	export let data: PageData;
	function gotoAuthProvider() {
		const redirectUrl = 'http://localhost:5173/redirect';
		const url = data.provider.authUrl + redirectUrl;
		window.location.href = url;
	}
</script>

<button on:click={gotoAuthProvider}>Login with Google</button>
