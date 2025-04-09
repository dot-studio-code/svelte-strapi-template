import type * as Types from './types';

import type { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
export type PageBySlugQueryVariables = Types.Exact<{
	slug: Types.Scalars['String']['input'];
}>;

export type PageBySlugQuery = {
	__typename?: 'Query';
	pages: Array<{
		__typename?: 'Page';
		contentBlocks?: Array<
			| {
					__typename: 'ComponentContentBlocksHero';
					id: string;
					title?: string | null;
					image: {
						__typename?: 'UploadFile';
						documentId: string;
						name: string;
						alternativeText?: string | null;
						caption?: string | null;
						width?: number | null;
						height?: number | null;
						formats?: any | null;
						hash: string;
						ext?: string | null;
						mime: string;
						size: number;
						url: string;
						previewUrl?: string | null;
						provider: string;
						provider_metadata?: any | null;
					};
			  }
			| {
					__typename: 'ComponentContentBlocksRiver';
					id: string;
					imageLeft: boolean;
					riverText: string;
					riverImage: {
						__typename?: 'UploadFile';
						documentId: string;
						name: string;
						alternativeText?: string | null;
						caption?: string | null;
						width?: number | null;
						height?: number | null;
						formats?: any | null;
						hash: string;
						ext?: string | null;
						mime: string;
						size: number;
						url: string;
						previewUrl?: string | null;
						provider: string;
						provider_metadata?: any | null;
					};
			  }
			| { __typename: 'ComponentContentBlocksText'; id: string; textText?: string | null }
			| { __typename: 'Error'; code: string; message?: string | null }
			| null
		> | null;
	} | null>;
};

export const PageBySlugDocument = gql`
	query PageBySlug($slug: String!) {
		pages(filters: { slug: { eq: $slug } }, pagination: { limit: 1 }) {
			contentBlocks {
				... on ComponentContentBlocksHero {
					__typename
					id
					title
					image {
						documentId
						name
						alternativeText
						caption
						width
						height
						formats
						hash
						ext
						mime
						size
						url
						previewUrl
						provider
						provider_metadata
					}
				}
				... on ComponentContentBlocksText {
					__typename
					textText: text
					id
				}
				... on ComponentContentBlocksRiver {
					__typename
					id
					imageLeft
					riverText: text
					riverImage: image {
						documentId
						name
						alternativeText
						caption
						width
						height
						formats
						hash
						ext
						mime
						size
						url
						previewUrl
						provider
						provider_metadata
					}
				}
				... on Error {
					__typename
					code
					message
				}
			}
		}
	}
`;

export type SdkFunctionWrapper = <T>(
	action: (requestHeaders?: Record<string, string>) => Promise<T>,
	operationName: string,
	operationType?: string,
	variables?: any
) => Promise<T>;

const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) =>
	action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
	return {
		PageBySlug(
			variables: PageBySlugQueryVariables,
			requestHeaders?: GraphQLClientRequestHeaders
		): Promise<PageBySlugQuery> {
			return withWrapper(
				(wrappedRequestHeaders) =>
					client.request<PageBySlugQuery>(PageBySlugDocument, variables, {
						...requestHeaders,
						...wrappedRequestHeaders
					}),
				'PageBySlug',
				'query',
				variables
			);
		}
	};
}
export type Sdk = ReturnType<typeof getSdk>;
