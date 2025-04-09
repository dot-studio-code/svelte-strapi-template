<script lang="ts">
	import type { LayoutProps } from './$types';

	let { data, children }: LayoutProps = $props();
</script>

<svelte:head>
	<title>{data.data.siteSetting?.siteTitle}</title>
	<link rel="icon" href={data.data.siteSetting?.favicon.url} />
</svelte:head>

{@render children()}
