import {
	SiteSettingsDocument,
	type SiteSettingsQuery
} from '$lib/graphql/getSiteSettings.generated';
import { GraphQLClient } from 'graphql-request';
import { GRAPHQL_ENDPOINT } from '$env/static/private';

const client = new GraphQLClient(GRAPHQL_ENDPOINT);

export async function load() {
	const data = await client.request<SiteSettingsQuery>(SiteSettingsDocument);

	return { data };
}

export const prerender = true;
