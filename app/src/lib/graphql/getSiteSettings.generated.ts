import type * as Types from './types';

import type { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
export type SiteSettingsQueryVariables = Types.Exact<{ [key: string]: never }>;

export type SiteSettingsQuery = {
	__typename?: 'Query';
	siteSetting?: {
		__typename?: 'SiteSetting';
		siteTitle: string;
		description?: string | null;
		keywords?: string | null;
		robotsMeta?: string | null;
		author?: string | null;
		maintenanceMode?: boolean | null;
		siteVersion?: string | null;
		themeColor?: string | null;
		siteTagline?: string | null;
		logo?: { __typename?: 'UploadFile'; alternativeText?: string | null; url: string } | null;
		favicon: {
			__typename?: 'UploadFile';
			alternativeText?: string | null;
			url: string;
			width?: number | null;
			height?: number | null;
		};
	} | null;
	topMenu?: {
		__typename?: 'TopMenu';
		menu?: Array<{
			__typename?: 'ComponentMenusMenu';
			label?: string | null;
			url?: string | null;
			icon?: { __typename?: 'UploadFile'; alternativeText?: string | null; url: string } | null;
		} | null> | null;
	} | null;
	footerMenu?: {
		__typename?: 'FooterMenu';
		menu?: Array<{
			__typename?: 'ComponentMenusMenu';
			id: string;
			label?: string | null;
			url?: string | null;
			icon?: { __typename?: 'UploadFile'; alternativeText?: string | null; url: string } | null;
		} | null> | null;
	} | null;
};

export const SiteSettingsDocument = gql`
	query SiteSettings {
		siteSetting {
			siteTitle
			description
			keywords
			logo {
				alternativeText
				url
			}
			robotsMeta
			author
			favicon {
				alternativeText
				url
				width
				height
			}
			maintenanceMode
			siteVersion
			themeColor
			siteTagline
		}
		topMenu {
			menu {
				icon {
					alternativeText
					url
				}
				label
				url
			}
		}
		footerMenu {
			menu {
				id
				icon {
					alternativeText
					url
				}
				label
				url
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
		SiteSettings(
			variables?: SiteSettingsQueryVariables,
			requestHeaders?: GraphQLClientRequestHeaders
		): Promise<SiteSettingsQuery> {
			return withWrapper(
				(wrappedRequestHeaders) =>
					client.request<SiteSettingsQuery>(SiteSettingsDocument, variables, {
						...requestHeaders,
						...wrappedRequestHeaders
					}),
				'SiteSettings',
				'query',
				variables
			);
		}
	};
}
export type Sdk = ReturnType<typeof getSdk>;
