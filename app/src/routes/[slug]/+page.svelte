<script lang="ts">
	import { page } from '$app/state';
	import PageBlockSwitch from '$lib/ui/PageBlockSwitch.svelte';
	import type { PageData } from './$types';
	import { PUBLIC_BASE_URL } from '$env/static/public';

	let { data }: { data: PageData } = $props();

	const pageData = $derived(data.pages[0]);
</script>

<svelte:head>
	<title>{data.data.siteSetting?.siteTitle} – {pageData?.SEO.pageTitle}</title>
	<meta name="description" content={pageData?.SEO.pageDescription} />
	<meta name="author" content={data.data.siteSetting?.author} />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta name="keywords" content={data.data.siteSetting?.keywords} />
	<meta property="og:title" content={pageData?.SEO.pageTitle} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={`${PUBLIC_BASE_URL}${page.url}`} />
	<meta property="og:image" content={pageData?.SEO.ogImage.url} />
</svelte:head>

<PageBlockSwitch page={pageData} />
