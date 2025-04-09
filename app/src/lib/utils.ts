import type { UploadFile } from './graphql/types';

import { PUBLIC_STRAPI_URL } from '$env/static/public';

export const generateSrcSet = (formats: NonNullable<UploadFile['formats']>): string => {
	if (!formats || typeof formats !== 'object' || Object.keys(formats).length === 0) {
		console.warn('Image formats are missing. Make sure to query image formats in your GraphQL query, e.g.: image { url alternativeText formats } ');
		return '';
	}

	if (formats?.[0]?.['ext'] === '.gif') return ''; // currently, the server makes the figs loose the animation on resize
	if (formats?.[0]?.['ext'] === '.svg') return ''; // currently, the server cannot provide svg in different sizes

	return Object.keys(formats)
		.map((format) => `${formats[format].url} ${formats[format].width}w`)
		.join(', ');
};

export const prependCMS = (url: string): string => `${PUBLIC_STRAPI_URL}${url}`;