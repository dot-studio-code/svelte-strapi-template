import type { UploadFile } from './graphql/types';

import { PUBLIC_STRAPI_URL } from '$env/static/public';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const generateSrcSet = (formats: UploadFile['formats']): string =>
	Object.keys(formats)
		.map((format) => `${formats[format].url} ${formats[format].width}w`)
		.join(', ');

export const prependCMS = (url: string): string => `${PUBLIC_STRAPI_URL}${url}`;

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));
