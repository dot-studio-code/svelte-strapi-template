import type * as Types from './types';

import type { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
export type PagesQueryVariables = Types.Exact<{ [key: string]: never }>;

export type PagesQuery = {
	__typename?: 'Query';
	pages: Array<{ __typename?: 'Page'; slug?: string | null } | null>;
};

export const PagesDocument = gql`
	query Pages {
		pages {
			slug
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
		Pages(
			variables?: PagesQueryVariables,
			requestHeaders?: GraphQLClientRequestHeaders
		): Promise<PagesQuery> {
			return withWrapper(
				(wrappedRequestHeaders) =>
					client.request<PagesQuery>(PagesDocument, variables, {
						...requestHeaders,
						...wrappedRequestHeaders,
					}),
				'Pages',
				'query',
				variables
			);
		},
	};
}
export type Sdk = ReturnType<typeof getSdk>;
