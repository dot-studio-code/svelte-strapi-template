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
	const { slug, lang } = params;

	if (!slug) {
		throw new Error('Slug is required');
	}

	if (!lang) {
		throw new Error('Locale is required');
	}

	const data = await client.request<PageBySlugQuery, PageBySlugQueryVariables>(PageBySlugDocument, {
		slug,
		locale: lang
	});

	return { data };
};

export const entries: EntryGenerator = async () => {
	const data = await client.request<PagesQuery>(PagesDocument);

	const validEntries = data.pages
		.map((page) => (page?.slug && page?.locale ? { slug: page.slug, lang: page.locale } : null))
		.filter((entry): entry is { slug: string; lang: string } => entry !== null);

	return validEntries;
};

export const prerender = true;
