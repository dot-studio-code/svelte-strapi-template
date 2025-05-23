export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = {
	[_ in K]?: never;
};
export type Incremental<T> =
	| T
	| { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: { input: string; output: string };
	String: { input: string; output: string };
	Boolean: { input: boolean; output: boolean };
	Int: { input: number; output: number };
	Float: { input: number; output: number };
	DateTime: { input: any; output: any };
	I18NLocaleCode: { input: any; output: any };
	JSON: { input: any; output: any };
	PageContentBlocksDynamicZoneInput: { input: any; output: any };
};

export type BooleanFilterInput = {
	and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
	between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
	contains?: InputMaybe<Scalars['Boolean']['input']>;
	containsi?: InputMaybe<Scalars['Boolean']['input']>;
	endsWith?: InputMaybe<Scalars['Boolean']['input']>;
	eq?: InputMaybe<Scalars['Boolean']['input']>;
	eqi?: InputMaybe<Scalars['Boolean']['input']>;
	gt?: InputMaybe<Scalars['Boolean']['input']>;
	gte?: InputMaybe<Scalars['Boolean']['input']>;
	in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
	lt?: InputMaybe<Scalars['Boolean']['input']>;
	lte?: InputMaybe<Scalars['Boolean']['input']>;
	ne?: InputMaybe<Scalars['Boolean']['input']>;
	nei?: InputMaybe<Scalars['Boolean']['input']>;
	not?: InputMaybe<BooleanFilterInput>;
	notContains?: InputMaybe<Scalars['Boolean']['input']>;
	notContainsi?: InputMaybe<Scalars['Boolean']['input']>;
	notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
	notNull?: InputMaybe<Scalars['Boolean']['input']>;
	null?: InputMaybe<Scalars['Boolean']['input']>;
	or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
	startsWith?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ComponentContentBlocksHero = {
	__typename?: 'ComponentContentBlocksHero';
	id: Scalars['ID']['output'];
	image: UploadFile;
	title?: Maybe<Scalars['String']['output']>;
};

export type ComponentContentBlocksRiver = {
	__typename?: 'ComponentContentBlocksRiver';
	id: Scalars['ID']['output'];
	image: UploadFile;
	imageLeft: Scalars['Boolean']['output'];
	text: Scalars['String']['output'];
};

export type ComponentContentBlocksText = {
	__typename?: 'ComponentContentBlocksText';
	id: Scalars['ID']['output'];
	text?: Maybe<Scalars['String']['output']>;
};

export type ComponentMenusMenu = {
	__typename?: 'ComponentMenusMenu';
	icon?: Maybe<UploadFile>;
	id: Scalars['ID']['output'];
	label?: Maybe<Scalars['String']['output']>;
	url?: Maybe<Scalars['String']['output']>;
};

export type ComponentMenusMenuFiltersInput = {
	and?: InputMaybe<Array<InputMaybe<ComponentMenusMenuFiltersInput>>>;
	label?: InputMaybe<StringFilterInput>;
	not?: InputMaybe<ComponentMenusMenuFiltersInput>;
	or?: InputMaybe<Array<InputMaybe<ComponentMenusMenuFiltersInput>>>;
	url?: InputMaybe<StringFilterInput>;
};

export type ComponentMenusMenuInput = {
	icon?: InputMaybe<Scalars['ID']['input']>;
	id?: InputMaybe<Scalars['ID']['input']>;
	label?: InputMaybe<Scalars['String']['input']>;
	url?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentSeoOpenGraph = {
	__typename?: 'ComponentSeoOpenGraph';
	id: Scalars['ID']['output'];
	ogDescription?: Maybe<Scalars['String']['output']>;
	ogImage?: Maybe<UploadFile>;
	ogTitle?: Maybe<Scalars['String']['output']>;
};

export type ComponentSeoOpenGraphInput = {
	id?: InputMaybe<Scalars['ID']['input']>;
	ogDescription?: InputMaybe<Scalars['String']['input']>;
	ogImage?: InputMaybe<Scalars['ID']['input']>;
	ogTitle?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentSeoSeo = {
	__typename?: 'ComponentSeoSeo';
	id: Scalars['ID']['output'];
	ogImage?: Maybe<UploadFile>;
	pageDescription?: Maybe<Scalars['String']['output']>;
	pageTitle: Scalars['String']['output'];
};

export type ComponentSeoSeoFiltersInput = {
	and?: InputMaybe<Array<InputMaybe<ComponentSeoSeoFiltersInput>>>;
	not?: InputMaybe<ComponentSeoSeoFiltersInput>;
	or?: InputMaybe<Array<InputMaybe<ComponentSeoSeoFiltersInput>>>;
	pageDescription?: InputMaybe<StringFilterInput>;
	pageTitle?: InputMaybe<StringFilterInput>;
};

export type ComponentSeoSeoInput = {
	id?: InputMaybe<Scalars['ID']['input']>;
	ogImage?: InputMaybe<Scalars['ID']['input']>;
	pageDescription?: InputMaybe<Scalars['String']['input']>;
	pageTitle?: InputMaybe<Scalars['String']['input']>;
};

export type DateTimeFilterInput = {
	and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	contains?: InputMaybe<Scalars['DateTime']['input']>;
	containsi?: InputMaybe<Scalars['DateTime']['input']>;
	endsWith?: InputMaybe<Scalars['DateTime']['input']>;
	eq?: InputMaybe<Scalars['DateTime']['input']>;
	eqi?: InputMaybe<Scalars['DateTime']['input']>;
	gt?: InputMaybe<Scalars['DateTime']['input']>;
	gte?: InputMaybe<Scalars['DateTime']['input']>;
	in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	lt?: InputMaybe<Scalars['DateTime']['input']>;
	lte?: InputMaybe<Scalars['DateTime']['input']>;
	ne?: InputMaybe<Scalars['DateTime']['input']>;
	nei?: InputMaybe<Scalars['DateTime']['input']>;
	not?: InputMaybe<DateTimeFilterInput>;
	notContains?: InputMaybe<Scalars['DateTime']['input']>;
	notContainsi?: InputMaybe<Scalars['DateTime']['input']>;
	notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	notNull?: InputMaybe<Scalars['Boolean']['input']>;
	null?: InputMaybe<Scalars['Boolean']['input']>;
	or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	startsWith?: InputMaybe<Scalars['DateTime']['input']>;
};

export type DeleteMutationResponse = {
	__typename?: 'DeleteMutationResponse';
	documentId: Scalars['ID']['output'];
};

export type Error = {
	__typename?: 'Error';
	code: Scalars['String']['output'];
	message?: Maybe<Scalars['String']['output']>;
};

export type FileInfoInput = {
	alternativeText?: InputMaybe<Scalars['String']['input']>;
	caption?: InputMaybe<Scalars['String']['input']>;
	name?: InputMaybe<Scalars['String']['input']>;
};

export type FloatFilterInput = {
	and?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
	between?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
	contains?: InputMaybe<Scalars['Float']['input']>;
	containsi?: InputMaybe<Scalars['Float']['input']>;
	endsWith?: InputMaybe<Scalars['Float']['input']>;
	eq?: InputMaybe<Scalars['Float']['input']>;
	eqi?: InputMaybe<Scalars['Float']['input']>;
	gt?: InputMaybe<Scalars['Float']['input']>;
	gte?: InputMaybe<Scalars['Float']['input']>;
	in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
	lt?: InputMaybe<Scalars['Float']['input']>;
	lte?: InputMaybe<Scalars['Float']['input']>;
	ne?: InputMaybe<Scalars['Float']['input']>;
	nei?: InputMaybe<Scalars['Float']['input']>;
	not?: InputMaybe<FloatFilterInput>;
	notContains?: InputMaybe<Scalars['Float']['input']>;
	notContainsi?: InputMaybe<Scalars['Float']['input']>;
	notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
	notNull?: InputMaybe<Scalars['Boolean']['input']>;
	null?: InputMaybe<Scalars['Boolean']['input']>;
	or?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
	startsWith?: InputMaybe<Scalars['Float']['input']>;
};

export type FooterMenu = {
	__typename?: 'FooterMenu';
	createdAt?: Maybe<Scalars['DateTime']['output']>;
	documentId: Scalars['ID']['output'];
	locale?: Maybe<Scalars['String']['output']>;
	localizations: Array<Maybe<FooterMenu>>;
	localizations_connection?: Maybe<FooterMenuRelationResponseCollection>;
	menu?: Maybe<Array<Maybe<ComponentMenusMenu>>>;
	publishedAt?: Maybe<Scalars['DateTime']['output']>;
	updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type FooterMenuMenuArgs = {
	filters?: InputMaybe<ComponentMenusMenuFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type FooterMenuInput = {
	menu?: InputMaybe<Array<InputMaybe<ComponentMenusMenuInput>>>;
	publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type FooterMenuRelationResponseCollection = {
	__typename?: 'FooterMenuRelationResponseCollection';
	nodes: Array<FooterMenu>;
};

export type GenericMorph =
	| ComponentContentBlocksHero
	| ComponentContentBlocksRiver
	| ComponentContentBlocksText
	| ComponentMenusMenu
	| ComponentSeoOpenGraph
	| ComponentSeoSeo
	| FooterMenu
	| I18NLocale
	| Page
	| ReviewWorkflowsWorkflow
	| ReviewWorkflowsWorkflowStage
	| SiteSetting
	| TopMenu
	| UploadFile
	| UsersPermissionsPermission
	| UsersPermissionsRole
	| UsersPermissionsUser;

export type I18NLocale = {
	__typename?: 'I18NLocale';
	code?: Maybe<Scalars['String']['output']>;
	createdAt?: Maybe<Scalars['DateTime']['output']>;
	documentId: Scalars['ID']['output'];
	name?: Maybe<Scalars['String']['output']>;
	publishedAt?: Maybe<Scalars['DateTime']['output']>;
	updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type I18NLocaleEntityResponseCollection = {
	__typename?: 'I18NLocaleEntityResponseCollection';
	nodes: Array<I18NLocale>;
	pageInfo: Pagination;
};

export type I18NLocaleFiltersInput = {
	and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
	code?: InputMaybe<StringFilterInput>;
	createdAt?: InputMaybe<DateTimeFilterInput>;
	documentId?: InputMaybe<IdFilterInput>;
	name?: InputMaybe<StringFilterInput>;
	not?: InputMaybe<I18NLocaleFiltersInput>;
	or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
	publishedAt?: InputMaybe<DateTimeFilterInput>;
	updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
	and?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	between?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	contains?: InputMaybe<Scalars['ID']['input']>;
	containsi?: InputMaybe<Scalars['ID']['input']>;
	endsWith?: InputMaybe<Scalars['ID']['input']>;
	eq?: InputMaybe<Scalars['ID']['input']>;
	eqi?: InputMaybe<Scalars['ID']['input']>;
	gt?: InputMaybe<Scalars['ID']['input']>;
	gte?: InputMaybe<Scalars['ID']['input']>;
	in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	lt?: InputMaybe<Scalars['ID']['input']>;
	lte?: InputMaybe<Scalars['ID']['input']>;
	ne?: InputMaybe<Scalars['ID']['input']>;
	nei?: InputMaybe<Scalars['ID']['input']>;
	not?: InputMaybe<IdFilterInput>;
	notContains?: InputMaybe<Scalars['ID']['input']>;
	notContainsi?: InputMaybe<Scalars['ID']['input']>;
	notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	notNull?: InputMaybe<Scalars['Boolean']['input']>;
	null?: InputMaybe<Scalars['Boolean']['input']>;
	or?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	startsWith?: InputMaybe<Scalars['ID']['input']>;
};

export type IntFilterInput = {
	and?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
	between?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
	contains?: InputMaybe<Scalars['Int']['input']>;
	containsi?: InputMaybe<Scalars['Int']['input']>;
	endsWith?: InputMaybe<Scalars['Int']['input']>;
	eq?: InputMaybe<Scalars['Int']['input']>;
	eqi?: InputMaybe<Scalars['Int']['input']>;
	gt?: InputMaybe<Scalars['Int']['input']>;
	gte?: InputMaybe<Scalars['Int']['input']>;
	in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
	lt?: InputMaybe<Scalars['Int']['input']>;
	lte?: InputMaybe<Scalars['Int']['input']>;
	ne?: InputMaybe<Scalars['Int']['input']>;
	nei?: InputMaybe<Scalars['Int']['input']>;
	not?: InputMaybe<IntFilterInput>;
	notContains?: InputMaybe<Scalars['Int']['input']>;
	notContainsi?: InputMaybe<Scalars['Int']['input']>;
	notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
	notNull?: InputMaybe<Scalars['Boolean']['input']>;
	null?: InputMaybe<Scalars['Boolean']['input']>;
	or?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
	startsWith?: InputMaybe<Scalars['Int']['input']>;
};

export type JsonFilterInput = {
	and?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
	between?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
	contains?: InputMaybe<Scalars['JSON']['input']>;
	containsi?: InputMaybe<Scalars['JSON']['input']>;
	endsWith?: InputMaybe<Scalars['JSON']['input']>;
	eq?: InputMaybe<Scalars['JSON']['input']>;
	eqi?: InputMaybe<Scalars['JSON']['input']>;
	gt?: InputMaybe<Scalars['JSON']['input']>;
	gte?: InputMaybe<Scalars['JSON']['input']>;
	in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
	lt?: InputMaybe<Scalars['JSON']['input']>;
	lte?: InputMaybe<Scalars['JSON']['input']>;
	ne?: InputMaybe<Scalars['JSON']['input']>;
	nei?: InputMaybe<Scalars['JSON']['input']>;
	not?: InputMaybe<JsonFilterInput>;
	notContains?: InputMaybe<Scalars['JSON']['input']>;
	notContainsi?: InputMaybe<Scalars['JSON']['input']>;
	notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
	notNull?: InputMaybe<Scalars['Boolean']['input']>;
	null?: InputMaybe<Scalars['Boolean']['input']>;
	or?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
	startsWith?: InputMaybe<Scalars['JSON']['input']>;
};

export type Mutation = {
	__typename?: 'Mutation';
	/** Change user password. Confirm with the current password. */
	changePassword?: Maybe<UsersPermissionsLoginPayload>;
	createPage?: Maybe<Page>;
	createReviewWorkflowsWorkflow?: Maybe<ReviewWorkflowsWorkflow>;
	createReviewWorkflowsWorkflowStage?: Maybe<ReviewWorkflowsWorkflowStage>;
	/** Create a new role */
	createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
	/** Create a new user */
	createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
	deleteFooterMenu?: Maybe<DeleteMutationResponse>;
	deletePage?: Maybe<DeleteMutationResponse>;
	deleteReviewWorkflowsWorkflow?: Maybe<DeleteMutationResponse>;
	deleteReviewWorkflowsWorkflowStage?: Maybe<DeleteMutationResponse>;
	deleteSiteSetting?: Maybe<DeleteMutationResponse>;
	deleteTopMenu?: Maybe<DeleteMutationResponse>;
	deleteUploadFile?: Maybe<UploadFile>;
	/** Delete an existing role */
	deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
	/** Delete an existing user */
	deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
	/** Confirm an email users email address */
	emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
	/** Request a reset password token */
	forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
	login: UsersPermissionsLoginPayload;
	/** Register a user */
	register: UsersPermissionsLoginPayload;
	/** Reset user password. Confirm with a code (resetToken from forgotPassword) */
	resetPassword?: Maybe<UsersPermissionsLoginPayload>;
	updateFooterMenu?: Maybe<FooterMenu>;
	updatePage?: Maybe<Page>;
	updateReviewWorkflowsWorkflow?: Maybe<ReviewWorkflowsWorkflow>;
	updateReviewWorkflowsWorkflowStage?: Maybe<ReviewWorkflowsWorkflowStage>;
	updateSiteSetting?: Maybe<SiteSetting>;
	updateTopMenu?: Maybe<TopMenu>;
	updateUploadFile: UploadFile;
	/** Update an existing role */
	updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
	/** Update an existing user */
	updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
};

export type MutationChangePasswordArgs = {
	currentPassword: Scalars['String']['input'];
	password: Scalars['String']['input'];
	passwordConfirmation: Scalars['String']['input'];
};

export type MutationCreatePageArgs = {
	data: PageInput;
	status?: InputMaybe<PublicationStatus>;
};

export type MutationCreateReviewWorkflowsWorkflowArgs = {
	data: ReviewWorkflowsWorkflowInput;
	status?: InputMaybe<PublicationStatus>;
};

export type MutationCreateReviewWorkflowsWorkflowStageArgs = {
	data: ReviewWorkflowsWorkflowStageInput;
	status?: InputMaybe<PublicationStatus>;
};

export type MutationCreateUsersPermissionsRoleArgs = {
	data: UsersPermissionsRoleInput;
};

export type MutationCreateUsersPermissionsUserArgs = {
	data: UsersPermissionsUserInput;
};

export type MutationDeleteFooterMenuArgs = {
	locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationDeletePageArgs = {
	documentId: Scalars['ID']['input'];
};

export type MutationDeleteReviewWorkflowsWorkflowArgs = {
	documentId: Scalars['ID']['input'];
};

export type MutationDeleteReviewWorkflowsWorkflowStageArgs = {
	documentId: Scalars['ID']['input'];
};

export type MutationDeleteSiteSettingArgs = {
	locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationDeleteTopMenuArgs = {
	locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationDeleteUploadFileArgs = {
	id: Scalars['ID']['input'];
};

export type MutationDeleteUsersPermissionsRoleArgs = {
	id: Scalars['ID']['input'];
};

export type MutationDeleteUsersPermissionsUserArgs = {
	id: Scalars['ID']['input'];
};

export type MutationEmailConfirmationArgs = {
	confirmation: Scalars['String']['input'];
};

export type MutationForgotPasswordArgs = {
	email: Scalars['String']['input'];
};

export type MutationLoginArgs = {
	input: UsersPermissionsLoginInput;
};

export type MutationRegisterArgs = {
	input: UsersPermissionsRegisterInput;
};

export type MutationResetPasswordArgs = {
	code: Scalars['String']['input'];
	password: Scalars['String']['input'];
	passwordConfirmation: Scalars['String']['input'];
};

export type MutationUpdateFooterMenuArgs = {
	data: FooterMenuInput;
	locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
	status?: InputMaybe<PublicationStatus>;
};

export type MutationUpdatePageArgs = {
	data: PageInput;
	documentId: Scalars['ID']['input'];
	status?: InputMaybe<PublicationStatus>;
};

export type MutationUpdateReviewWorkflowsWorkflowArgs = {
	data: ReviewWorkflowsWorkflowInput;
	documentId: Scalars['ID']['input'];
	status?: InputMaybe<PublicationStatus>;
};

export type MutationUpdateReviewWorkflowsWorkflowStageArgs = {
	data: ReviewWorkflowsWorkflowStageInput;
	documentId: Scalars['ID']['input'];
	status?: InputMaybe<PublicationStatus>;
};

export type MutationUpdateSiteSettingArgs = {
	data: SiteSettingInput;
	locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
	status?: InputMaybe<PublicationStatus>;
};

export type MutationUpdateTopMenuArgs = {
	data: TopMenuInput;
	locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
	status?: InputMaybe<PublicationStatus>;
};

export type MutationUpdateUploadFileArgs = {
	id: Scalars['ID']['input'];
	info?: InputMaybe<FileInfoInput>;
};

export type MutationUpdateUsersPermissionsRoleArgs = {
	data: UsersPermissionsRoleInput;
	id: Scalars['ID']['input'];
};

export type MutationUpdateUsersPermissionsUserArgs = {
	data: UsersPermissionsUserInput;
	id: Scalars['ID']['input'];
};

export type Page = {
	__typename?: 'Page';
	SEO?: Maybe<ComponentSeoSeo>;
	contentBlocks?: Maybe<Array<Maybe<PageContentBlocksDynamicZone>>>;
	createdAt?: Maybe<Scalars['DateTime']['output']>;
	documentId: Scalars['ID']['output'];
	publishedAt?: Maybe<Scalars['DateTime']['output']>;
	slug?: Maybe<Scalars['String']['output']>;
	updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type PageContentBlocksDynamicZone =
	| ComponentContentBlocksHero
	| ComponentContentBlocksRiver
	| ComponentContentBlocksText
	| Error;

export type PageEntityResponseCollection = {
	__typename?: 'PageEntityResponseCollection';
	nodes: Array<Page>;
	pageInfo: Pagination;
};

export type PageFiltersInput = {
	SEO?: InputMaybe<ComponentSeoSeoFiltersInput>;
	and?: InputMaybe<Array<InputMaybe<PageFiltersInput>>>;
	createdAt?: InputMaybe<DateTimeFilterInput>;
	documentId?: InputMaybe<IdFilterInput>;
	not?: InputMaybe<PageFiltersInput>;
	or?: InputMaybe<Array<InputMaybe<PageFiltersInput>>>;
	publishedAt?: InputMaybe<DateTimeFilterInput>;
	slug?: InputMaybe<StringFilterInput>;
	updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type PageInput = {
	SEO?: InputMaybe<ComponentSeoSeoInput>;
	contentBlocks?: InputMaybe<Array<Scalars['PageContentBlocksDynamicZoneInput']['input']>>;
	publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
	slug?: InputMaybe<Scalars['String']['input']>;
};

export type Pagination = {
	__typename?: 'Pagination';
	page: Scalars['Int']['output'];
	pageCount: Scalars['Int']['output'];
	pageSize: Scalars['Int']['output'];
	total: Scalars['Int']['output'];
};

export type PaginationArg = {
	limit?: InputMaybe<Scalars['Int']['input']>;
	page?: InputMaybe<Scalars['Int']['input']>;
	pageSize?: InputMaybe<Scalars['Int']['input']>;
	start?: InputMaybe<Scalars['Int']['input']>;
};

export enum PublicationStatus {
	Draft = 'DRAFT',
	Published = 'PUBLISHED',
}

export type Query = {
	__typename?: 'Query';
	footerMenu?: Maybe<FooterMenu>;
	i18NLocale?: Maybe<I18NLocale>;
	i18NLocales: Array<Maybe<I18NLocale>>;
	i18NLocales_connection?: Maybe<I18NLocaleEntityResponseCollection>;
	me?: Maybe<UsersPermissionsMe>;
	page?: Maybe<Page>;
	pages: Array<Maybe<Page>>;
	pages_connection?: Maybe<PageEntityResponseCollection>;
	reviewWorkflowsWorkflow?: Maybe<ReviewWorkflowsWorkflow>;
	reviewWorkflowsWorkflowStage?: Maybe<ReviewWorkflowsWorkflowStage>;
	reviewWorkflowsWorkflowStages: Array<Maybe<ReviewWorkflowsWorkflowStage>>;
	reviewWorkflowsWorkflowStages_connection?: Maybe<ReviewWorkflowsWorkflowStageEntityResponseCollection>;
	reviewWorkflowsWorkflows: Array<Maybe<ReviewWorkflowsWorkflow>>;
	reviewWorkflowsWorkflows_connection?: Maybe<ReviewWorkflowsWorkflowEntityResponseCollection>;
	siteSetting?: Maybe<SiteSetting>;
	topMenu?: Maybe<TopMenu>;
	uploadFile?: Maybe<UploadFile>;
	uploadFiles: Array<Maybe<UploadFile>>;
	uploadFiles_connection?: Maybe<UploadFileEntityResponseCollection>;
	usersPermissionsRole?: Maybe<UsersPermissionsRole>;
	usersPermissionsRoles: Array<Maybe<UsersPermissionsRole>>;
	usersPermissionsRoles_connection?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
	usersPermissionsUser?: Maybe<UsersPermissionsUser>;
	usersPermissionsUsers: Array<Maybe<UsersPermissionsUser>>;
	usersPermissionsUsers_connection?: Maybe<UsersPermissionsUserEntityResponseCollection>;
};

export type QueryFooterMenuArgs = {
	locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
	status?: InputMaybe<PublicationStatus>;
};

export type QueryI18NLocaleArgs = {
	documentId: Scalars['ID']['input'];
	status?: InputMaybe<PublicationStatus>;
};

export type QueryI18NLocalesArgs = {
	filters?: InputMaybe<I18NLocaleFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	status?: InputMaybe<PublicationStatus>;
};

export type QueryI18NLocales_ConnectionArgs = {
	filters?: InputMaybe<I18NLocaleFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	status?: InputMaybe<PublicationStatus>;
};

export type QueryPageArgs = {
	documentId: Scalars['ID']['input'];
	status?: InputMaybe<PublicationStatus>;
};

export type QueryPagesArgs = {
	filters?: InputMaybe<PageFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	status?: InputMaybe<PublicationStatus>;
};

export type QueryPages_ConnectionArgs = {
	filters?: InputMaybe<PageFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	status?: InputMaybe<PublicationStatus>;
};

export type QueryReviewWorkflowsWorkflowArgs = {
	documentId: Scalars['ID']['input'];
	status?: InputMaybe<PublicationStatus>;
};

export type QueryReviewWorkflowsWorkflowStageArgs = {
	documentId: Scalars['ID']['input'];
	status?: InputMaybe<PublicationStatus>;
};

export type QueryReviewWorkflowsWorkflowStagesArgs = {
	filters?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	status?: InputMaybe<PublicationStatus>;
};

export type QueryReviewWorkflowsWorkflowStages_ConnectionArgs = {
	filters?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	status?: InputMaybe<PublicationStatus>;
};

export type QueryReviewWorkflowsWorkflowsArgs = {
	filters?: InputMaybe<ReviewWorkflowsWorkflowFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	status?: InputMaybe<PublicationStatus>;
};

export type QueryReviewWorkflowsWorkflows_ConnectionArgs = {
	filters?: InputMaybe<ReviewWorkflowsWorkflowFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	status?: InputMaybe<PublicationStatus>;
};

export type QuerySiteSettingArgs = {
	locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
	status?: InputMaybe<PublicationStatus>;
};

export type QueryTopMenuArgs = {
	locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
	status?: InputMaybe<PublicationStatus>;
};

export type QueryUploadFileArgs = {
	documentId: Scalars['ID']['input'];
	status?: InputMaybe<PublicationStatus>;
};

export type QueryUploadFilesArgs = {
	filters?: InputMaybe<UploadFileFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	status?: InputMaybe<PublicationStatus>;
};

export type QueryUploadFiles_ConnectionArgs = {
	filters?: InputMaybe<UploadFileFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	status?: InputMaybe<PublicationStatus>;
};

export type QueryUsersPermissionsRoleArgs = {
	documentId: Scalars['ID']['input'];
	status?: InputMaybe<PublicationStatus>;
};

export type QueryUsersPermissionsRolesArgs = {
	filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	status?: InputMaybe<PublicationStatus>;
};

export type QueryUsersPermissionsRoles_ConnectionArgs = {
	filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	status?: InputMaybe<PublicationStatus>;
};

export type QueryUsersPermissionsUserArgs = {
	documentId: Scalars['ID']['input'];
	status?: InputMaybe<PublicationStatus>;
};

export type QueryUsersPermissionsUsersArgs = {
	filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	status?: InputMaybe<PublicationStatus>;
};

export type QueryUsersPermissionsUsers_ConnectionArgs = {
	filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	status?: InputMaybe<PublicationStatus>;
};

export type ReviewWorkflowsWorkflow = {
	__typename?: 'ReviewWorkflowsWorkflow';
	contentTypes: Scalars['JSON']['output'];
	createdAt?: Maybe<Scalars['DateTime']['output']>;
	documentId: Scalars['ID']['output'];
	name: Scalars['String']['output'];
	publishedAt?: Maybe<Scalars['DateTime']['output']>;
	stageRequiredToPublish?: Maybe<ReviewWorkflowsWorkflowStage>;
	stages: Array<Maybe<ReviewWorkflowsWorkflowStage>>;
	stages_connection?: Maybe<ReviewWorkflowsWorkflowStageRelationResponseCollection>;
	updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ReviewWorkflowsWorkflowStagesArgs = {
	filters?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ReviewWorkflowsWorkflowStages_ConnectionArgs = {
	filters?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ReviewWorkflowsWorkflowEntityResponseCollection = {
	__typename?: 'ReviewWorkflowsWorkflowEntityResponseCollection';
	nodes: Array<ReviewWorkflowsWorkflow>;
	pageInfo: Pagination;
};

export type ReviewWorkflowsWorkflowFiltersInput = {
	and?: InputMaybe<Array<InputMaybe<ReviewWorkflowsWorkflowFiltersInput>>>;
	contentTypes?: InputMaybe<JsonFilterInput>;
	createdAt?: InputMaybe<DateTimeFilterInput>;
	documentId?: InputMaybe<IdFilterInput>;
	name?: InputMaybe<StringFilterInput>;
	not?: InputMaybe<ReviewWorkflowsWorkflowFiltersInput>;
	or?: InputMaybe<Array<InputMaybe<ReviewWorkflowsWorkflowFiltersInput>>>;
	publishedAt?: InputMaybe<DateTimeFilterInput>;
	stageRequiredToPublish?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
	stages?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
	updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ReviewWorkflowsWorkflowInput = {
	contentTypes?: InputMaybe<Scalars['JSON']['input']>;
	name?: InputMaybe<Scalars['String']['input']>;
	publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
	stageRequiredToPublish?: InputMaybe<Scalars['ID']['input']>;
	stages?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type ReviewWorkflowsWorkflowStage = {
	__typename?: 'ReviewWorkflowsWorkflowStage';
	color?: Maybe<Scalars['String']['output']>;
	createdAt?: Maybe<Scalars['DateTime']['output']>;
	documentId: Scalars['ID']['output'];
	name?: Maybe<Scalars['String']['output']>;
	publishedAt?: Maybe<Scalars['DateTime']['output']>;
	updatedAt?: Maybe<Scalars['DateTime']['output']>;
	workflow?: Maybe<ReviewWorkflowsWorkflow>;
};

export type ReviewWorkflowsWorkflowStageEntityResponseCollection = {
	__typename?: 'ReviewWorkflowsWorkflowStageEntityResponseCollection';
	nodes: Array<ReviewWorkflowsWorkflowStage>;
	pageInfo: Pagination;
};

export type ReviewWorkflowsWorkflowStageFiltersInput = {
	and?: InputMaybe<Array<InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>>>;
	color?: InputMaybe<StringFilterInput>;
	createdAt?: InputMaybe<DateTimeFilterInput>;
	documentId?: InputMaybe<IdFilterInput>;
	name?: InputMaybe<StringFilterInput>;
	not?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
	or?: InputMaybe<Array<InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>>>;
	publishedAt?: InputMaybe<DateTimeFilterInput>;
	updatedAt?: InputMaybe<DateTimeFilterInput>;
	workflow?: InputMaybe<ReviewWorkflowsWorkflowFiltersInput>;
};

export type ReviewWorkflowsWorkflowStageInput = {
	color?: InputMaybe<Scalars['String']['input']>;
	name?: InputMaybe<Scalars['String']['input']>;
	publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
	workflow?: InputMaybe<Scalars['ID']['input']>;
};

export type ReviewWorkflowsWorkflowStageRelationResponseCollection = {
	__typename?: 'ReviewWorkflowsWorkflowStageRelationResponseCollection';
	nodes: Array<ReviewWorkflowsWorkflowStage>;
};

export type SiteSetting = {
	__typename?: 'SiteSetting';
	author?: Maybe<Scalars['String']['output']>;
	createdAt?: Maybe<Scalars['DateTime']['output']>;
	description?: Maybe<Scalars['String']['output']>;
	documentId: Scalars['ID']['output'];
	fallbackOpenGraph?: Maybe<ComponentSeoOpenGraph>;
	favicon: UploadFile;
	keywords?: Maybe<Scalars['String']['output']>;
	locale?: Maybe<Scalars['String']['output']>;
	localizations: Array<Maybe<SiteSetting>>;
	localizations_connection?: Maybe<SiteSettingRelationResponseCollection>;
	logo?: Maybe<UploadFile>;
	logoDarkMode?: Maybe<UploadFile>;
	maintenanceMode?: Maybe<Scalars['Boolean']['output']>;
	publishedAt?: Maybe<Scalars['DateTime']['output']>;
	robotsMeta?: Maybe<Scalars['String']['output']>;
	siteTagline?: Maybe<Scalars['String']['output']>;
	siteTitle: Scalars['String']['output'];
	siteVersion?: Maybe<Scalars['String']['output']>;
	themeColor?: Maybe<Scalars['String']['output']>;
	updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type SiteSettingInput = {
	author?: InputMaybe<Scalars['String']['input']>;
	description?: InputMaybe<Scalars['String']['input']>;
	fallbackOpenGraph?: InputMaybe<ComponentSeoOpenGraphInput>;
	favicon?: InputMaybe<Scalars['ID']['input']>;
	keywords?: InputMaybe<Scalars['String']['input']>;
	logo?: InputMaybe<Scalars['ID']['input']>;
	logoDarkMode?: InputMaybe<Scalars['ID']['input']>;
	maintenanceMode?: InputMaybe<Scalars['Boolean']['input']>;
	publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
	robotsMeta?: InputMaybe<Scalars['String']['input']>;
	siteTagline?: InputMaybe<Scalars['String']['input']>;
	siteTitle?: InputMaybe<Scalars['String']['input']>;
	siteVersion?: InputMaybe<Scalars['String']['input']>;
	themeColor?: InputMaybe<Scalars['String']['input']>;
};

export type SiteSettingRelationResponseCollection = {
	__typename?: 'SiteSettingRelationResponseCollection';
	nodes: Array<SiteSetting>;
};

export type StringFilterInput = {
	and?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	between?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	contains?: InputMaybe<Scalars['String']['input']>;
	containsi?: InputMaybe<Scalars['String']['input']>;
	endsWith?: InputMaybe<Scalars['String']['input']>;
	eq?: InputMaybe<Scalars['String']['input']>;
	eqi?: InputMaybe<Scalars['String']['input']>;
	gt?: InputMaybe<Scalars['String']['input']>;
	gte?: InputMaybe<Scalars['String']['input']>;
	in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	lt?: InputMaybe<Scalars['String']['input']>;
	lte?: InputMaybe<Scalars['String']['input']>;
	ne?: InputMaybe<Scalars['String']['input']>;
	nei?: InputMaybe<Scalars['String']['input']>;
	not?: InputMaybe<StringFilterInput>;
	notContains?: InputMaybe<Scalars['String']['input']>;
	notContainsi?: InputMaybe<Scalars['String']['input']>;
	notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	notNull?: InputMaybe<Scalars['Boolean']['input']>;
	null?: InputMaybe<Scalars['Boolean']['input']>;
	or?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type TopMenu = {
	__typename?: 'TopMenu';
	createdAt?: Maybe<Scalars['DateTime']['output']>;
	documentId: Scalars['ID']['output'];
	locale?: Maybe<Scalars['String']['output']>;
	localizations: Array<Maybe<TopMenu>>;
	localizations_connection?: Maybe<TopMenuRelationResponseCollection>;
	menu?: Maybe<Array<Maybe<ComponentMenusMenu>>>;
	publishedAt?: Maybe<Scalars['DateTime']['output']>;
	updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type TopMenuMenuArgs = {
	filters?: InputMaybe<ComponentMenusMenuFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type TopMenuInput = {
	menu?: InputMaybe<Array<InputMaybe<ComponentMenusMenuInput>>>;
	publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type TopMenuRelationResponseCollection = {
	__typename?: 'TopMenuRelationResponseCollection';
	nodes: Array<TopMenu>;
};

export type UploadFile = {
	__typename?: 'UploadFile';
	alternativeText?: Maybe<Scalars['String']['output']>;
	caption?: Maybe<Scalars['String']['output']>;
	createdAt?: Maybe<Scalars['DateTime']['output']>;
	documentId: Scalars['ID']['output'];
	ext?: Maybe<Scalars['String']['output']>;
	formats?: Maybe<Scalars['JSON']['output']>;
	hash: Scalars['String']['output'];
	height?: Maybe<Scalars['Int']['output']>;
	mime: Scalars['String']['output'];
	name: Scalars['String']['output'];
	previewUrl?: Maybe<Scalars['String']['output']>;
	provider: Scalars['String']['output'];
	provider_metadata?: Maybe<Scalars['JSON']['output']>;
	publishedAt?: Maybe<Scalars['DateTime']['output']>;
	related?: Maybe<Array<Maybe<GenericMorph>>>;
	size: Scalars['Float']['output'];
	updatedAt?: Maybe<Scalars['DateTime']['output']>;
	url: Scalars['String']['output'];
	width?: Maybe<Scalars['Int']['output']>;
};

export type UploadFileEntityResponseCollection = {
	__typename?: 'UploadFileEntityResponseCollection';
	nodes: Array<UploadFile>;
	pageInfo: Pagination;
};

export type UploadFileFiltersInput = {
	alternativeText?: InputMaybe<StringFilterInput>;
	and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
	caption?: InputMaybe<StringFilterInput>;
	createdAt?: InputMaybe<DateTimeFilterInput>;
	documentId?: InputMaybe<IdFilterInput>;
	ext?: InputMaybe<StringFilterInput>;
	formats?: InputMaybe<JsonFilterInput>;
	hash?: InputMaybe<StringFilterInput>;
	height?: InputMaybe<IntFilterInput>;
	mime?: InputMaybe<StringFilterInput>;
	name?: InputMaybe<StringFilterInput>;
	not?: InputMaybe<UploadFileFiltersInput>;
	or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
	previewUrl?: InputMaybe<StringFilterInput>;
	provider?: InputMaybe<StringFilterInput>;
	provider_metadata?: InputMaybe<JsonFilterInput>;
	publishedAt?: InputMaybe<DateTimeFilterInput>;
	size?: InputMaybe<FloatFilterInput>;
	updatedAt?: InputMaybe<DateTimeFilterInput>;
	url?: InputMaybe<StringFilterInput>;
	width?: InputMaybe<IntFilterInput>;
};

export type UsersPermissionsCreateRolePayload = {
	__typename?: 'UsersPermissionsCreateRolePayload';
	ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsDeleteRolePayload = {
	__typename?: 'UsersPermissionsDeleteRolePayload';
	ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsLoginInput = {
	identifier: Scalars['String']['input'];
	password: Scalars['String']['input'];
	provider?: Scalars['String']['input'];
};

export type UsersPermissionsLoginPayload = {
	__typename?: 'UsersPermissionsLoginPayload';
	jwt?: Maybe<Scalars['String']['output']>;
	user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
	__typename?: 'UsersPermissionsMe';
	blocked?: Maybe<Scalars['Boolean']['output']>;
	confirmed?: Maybe<Scalars['Boolean']['output']>;
	documentId: Scalars['ID']['output'];
	email?: Maybe<Scalars['String']['output']>;
	id: Scalars['ID']['output'];
	role?: Maybe<UsersPermissionsMeRole>;
	username: Scalars['String']['output'];
};

export type UsersPermissionsMeRole = {
	__typename?: 'UsersPermissionsMeRole';
	description?: Maybe<Scalars['String']['output']>;
	id: Scalars['ID']['output'];
	name: Scalars['String']['output'];
	type?: Maybe<Scalars['String']['output']>;
};

export type UsersPermissionsPasswordPayload = {
	__typename?: 'UsersPermissionsPasswordPayload';
	ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsPermission = {
	__typename?: 'UsersPermissionsPermission';
	action: Scalars['String']['output'];
	createdAt?: Maybe<Scalars['DateTime']['output']>;
	documentId: Scalars['ID']['output'];
	publishedAt?: Maybe<Scalars['DateTime']['output']>;
	role?: Maybe<UsersPermissionsRole>;
	updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type UsersPermissionsPermissionFiltersInput = {
	action?: InputMaybe<StringFilterInput>;
	and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
	createdAt?: InputMaybe<DateTimeFilterInput>;
	documentId?: InputMaybe<IdFilterInput>;
	not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
	or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
	publishedAt?: InputMaybe<DateTimeFilterInput>;
	role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
	updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
	__typename?: 'UsersPermissionsPermissionRelationResponseCollection';
	nodes: Array<UsersPermissionsPermission>;
};

export type UsersPermissionsRegisterInput = {
	email: Scalars['String']['input'];
	password: Scalars['String']['input'];
	username: Scalars['String']['input'];
};

export type UsersPermissionsRole = {
	__typename?: 'UsersPermissionsRole';
	createdAt?: Maybe<Scalars['DateTime']['output']>;
	description?: Maybe<Scalars['String']['output']>;
	documentId: Scalars['ID']['output'];
	name: Scalars['String']['output'];
	permissions: Array<Maybe<UsersPermissionsPermission>>;
	permissions_connection?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
	publishedAt?: Maybe<Scalars['DateTime']['output']>;
	type?: Maybe<Scalars['String']['output']>;
	updatedAt?: Maybe<Scalars['DateTime']['output']>;
	users: Array<Maybe<UsersPermissionsUser>>;
	users_connection?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};

export type UsersPermissionsRolePermissionsArgs = {
	filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UsersPermissionsRolePermissions_ConnectionArgs = {
	filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UsersPermissionsRoleUsersArgs = {
	filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UsersPermissionsRoleUsers_ConnectionArgs = {
	filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
	__typename?: 'UsersPermissionsRoleEntityResponseCollection';
	nodes: Array<UsersPermissionsRole>;
	pageInfo: Pagination;
};

export type UsersPermissionsRoleFiltersInput = {
	and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
	createdAt?: InputMaybe<DateTimeFilterInput>;
	description?: InputMaybe<StringFilterInput>;
	documentId?: InputMaybe<IdFilterInput>;
	name?: InputMaybe<StringFilterInput>;
	not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
	or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
	permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
	publishedAt?: InputMaybe<DateTimeFilterInput>;
	type?: InputMaybe<StringFilterInput>;
	updatedAt?: InputMaybe<DateTimeFilterInput>;
	users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
	description?: InputMaybe<Scalars['String']['input']>;
	name?: InputMaybe<Scalars['String']['input']>;
	permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
	type?: InputMaybe<Scalars['String']['input']>;
	users?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
	__typename?: 'UsersPermissionsUpdateRolePayload';
	ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsUser = {
	__typename?: 'UsersPermissionsUser';
	blocked?: Maybe<Scalars['Boolean']['output']>;
	confirmed?: Maybe<Scalars['Boolean']['output']>;
	createdAt?: Maybe<Scalars['DateTime']['output']>;
	documentId: Scalars['ID']['output'];
	email: Scalars['String']['output'];
	provider?: Maybe<Scalars['String']['output']>;
	publishedAt?: Maybe<Scalars['DateTime']['output']>;
	role?: Maybe<UsersPermissionsRole>;
	updatedAt?: Maybe<Scalars['DateTime']['output']>;
	username: Scalars['String']['output'];
};

export type UsersPermissionsUserEntityResponse = {
	__typename?: 'UsersPermissionsUserEntityResponse';
	data?: Maybe<UsersPermissionsUser>;
};

export type UsersPermissionsUserEntityResponseCollection = {
	__typename?: 'UsersPermissionsUserEntityResponseCollection';
	nodes: Array<UsersPermissionsUser>;
	pageInfo: Pagination;
};

export type UsersPermissionsUserFiltersInput = {
	and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
	blocked?: InputMaybe<BooleanFilterInput>;
	confirmed?: InputMaybe<BooleanFilterInput>;
	createdAt?: InputMaybe<DateTimeFilterInput>;
	documentId?: InputMaybe<IdFilterInput>;
	email?: InputMaybe<StringFilterInput>;
	not?: InputMaybe<UsersPermissionsUserFiltersInput>;
	or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
	provider?: InputMaybe<StringFilterInput>;
	publishedAt?: InputMaybe<DateTimeFilterInput>;
	role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
	updatedAt?: InputMaybe<DateTimeFilterInput>;
	username?: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
	blocked?: InputMaybe<Scalars['Boolean']['input']>;
	confirmed?: InputMaybe<Scalars['Boolean']['input']>;
	email?: InputMaybe<Scalars['String']['input']>;
	password?: InputMaybe<Scalars['String']['input']>;
	provider?: InputMaybe<Scalars['String']['input']>;
	publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
	role?: InputMaybe<Scalars['ID']['input']>;
	username?: InputMaybe<Scalars['String']['input']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
	__typename?: 'UsersPermissionsUserRelationResponseCollection';
	nodes: Array<UsersPermissionsUser>;
};
