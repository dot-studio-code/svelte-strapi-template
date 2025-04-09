<script lang="ts">
	import type { PageBySlugQuery } from '$lib/graphql/getPageContent.generated';
	import { cn, generateSrcSet } from '$lib/utils';
	import { marked } from 'marked';
	import Section from '../Section.svelte';

	type PageType = NonNullable<PageBySlugQuery['pages'][number]>;

	type ComponentContentBlocksText = Extract<
		NonNullable<PageType['contentBlocks']>[number],
		{ __typename: 'ComponentContentBlocksRiver' }
	>;

	let {
		block
	}: {
		block: ComponentContentBlocksText;
	} = $props();
</script>

<Section>
	<div class={cn('grid grid-cols-6 gap-2 bg-yellow-500 p-5')}>
		<img
			srcset={generateSrcSet(block.riverImage.formats)}
			alt={block.riverImage.alternativeText}
			class={cn('col-span-3', !block.imageLeft && 'order-2')}
		/>
		<div class={cn('col-span-3', !block.imageLeft && 'order-1')}>
			{#if block.riverText}
				{@html marked(block.riverText)}
			{/if}
		</div>
	</div>
</Section>
