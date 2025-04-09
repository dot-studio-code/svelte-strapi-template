import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) =>
	resolve(event, {
		transformPageChunk: ({ html }) => html.replace('%lang%', 'de') // TODO: inject correct lang code from i18n
	});
