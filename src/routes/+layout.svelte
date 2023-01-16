<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';

	import type { LayoutData } from './$types';
	export let data: LayoutData;
	import dayjs from 'dayjs';
	import timezone from 'dayjs/plugin/timezone';
	dayjs.extend(timezone);
	dayjs.tz.setDefault(dayjs.tz.guess());
</script>

<div>
	<Navbar user={data.user} />
	<div class="safe-area">
		<slot />
	</div>
</div>
