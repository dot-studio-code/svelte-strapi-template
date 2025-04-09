import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
	schema: 'http://localhost:1337/graphql',
	documents: 'src/**/*.gql',
	generates: {
		'src/lib/graphql/types.ts': {
			plugins: ['typescript'],
			config: {
				useTypeImports: true
			}
		},
		'src/lib/graphql/': {
			preset: 'near-operation-file',
			presetConfig: {
				baseTypesPath: 'types.ts'
			},
			plugins: ['typescript-operations', 'typescript-graphql-request'],
			config: {
				useTypeImports: true
			}
		}
	},
	hooks: {
		afterAllFileWrite: ['prettier --write']
	}
};

export default config;
