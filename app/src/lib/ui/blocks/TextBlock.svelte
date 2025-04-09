<script lang="ts">
	import type { PageBySlugQuery } from '$lib/graphql/getPageContent.generated';
	import Section from '../Section.svelte';
	import { marked } from 'marked';

	type PageType = NonNullable<PageBySlugQuery['pages'][number]>;

	type ComponentContentBlocksText = Extract<
		NonNullable<PageType['contentBlocks']>[number],
		{ __typename: 'ComponentContentBlocksText' }
	>;

	let {
		block
	}: {
		block: ComponentContentBlocksText;
	} = $props();
</script>

<Section class="bg-amber-200 p-4">
	{#if block.textText}
		{@html marked(block.textText)}
	{/if}
</Section>
