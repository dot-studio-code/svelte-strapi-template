<script lang="ts">
	import type { PageBySlugQuery } from '../graphql/getPageContent.generated';
	import HeroBlock from './blocks/HeroBlock.svelte';
	import RiverBlock from './blocks/RiverBlock.svelte';
	import TextBlock from './blocks/TextBlock.svelte';

	let { page }: { page: PageBySlugQuery['pages'][0] } = $props();
</script>

{#if page?.contentBlocks}
	{#each page.contentBlocks as block}
		{#if block?.__typename === 'ComponentContentBlocksHero'}
			<HeroBlock {block} />
		{:else if block?.__typename === 'ComponentContentBlocksText'}
			<TextBlock {block} />
		{:else if block?.__typename === 'ComponentContentBlocksRiver'}
			<RiverBlock {block} />
		{:else}
			<p>Unknown block type: {block?.__typename}</p>
		{/if}
	{/each}
{/if}
