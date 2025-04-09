<script lang="ts">
	import BlockSwitch from '$lib/ui/BlockSwitch.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<BlockSwitch page={data.data.pages[0]} />
