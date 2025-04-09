<script lang="ts">
	import type { PageBySlugQuery } from '$lib/graphql/getPageContent.generated';
	import { generateSrcSet } from '$lib/utils';
	import Section from '../Section.svelte';

	type PageType = NonNullable<PageBySlugQuery['pages'][number]>;

	type ComponentContentBlocksText = Extract<
		NonNullable<PageType['contentBlocks']>[number],
		{ __typename: 'ComponentContentBlocksHero' }
	>;

	let {
		block
	}: {
		block: ComponentContentBlocksText;
	} = $props();
</script>

<Section class="bg-blue-400">
	<div class="relative h-40 max-h-screen overflow-hidden">
		<h1 class="absolute z-10 text-4xl font-bold">{block.title}</h1>
		<img
			srcset={generateSrcSet(block.image.formats)}
			alt={block.image.alternativeText}
			class="h-full w-full object-cover"
		/>
	</div>
</Section>
