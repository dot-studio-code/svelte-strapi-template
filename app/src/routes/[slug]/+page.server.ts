import {
	PageBySlugDocument,
	type PageBySlugQuery,
	type PageBySlugQueryVariables
} from '$lib/graphql/getPageContent.generated';
import { GraphQLClient } from 'graphql-request';
import { GRAPHQL_ENDPOINT } from '$env/static/private';
import type { EntryGenerator } from './$types';
import { PagesDocument, type PagesQuery } from '$lib/graphql/getPages.generated';

const client = new GraphQLClient(GRAPHQL_ENDPOINT);

export const load = async ({ params }) => {
	const { slug } = params;

	if (!slug) {
		throw new Error('Slug is required');
	}

	const data = await client.request<PageBySlugQuery, PageBySlugQueryVariables>(PageBySlugDocument, {
		slug,
	});

	return { data };
};

export const entries: EntryGenerator = async () => {
	const data = await client.request<PagesQuery>(PagesDocument);

	const validEntries = data.pages
		.map((page) => (page?.slug ? { slug: page.slug } : null))
		.filter((entry): entry is { slug: string; } => entry !== null);

	return validEntries;
};

export const prerender = true;
