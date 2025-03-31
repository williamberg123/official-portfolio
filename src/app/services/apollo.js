// eslint-disable-next-line
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

export const client = new ApolloClient({
	// uri: import.meta.env.VITE_GRAPHCMS_PROJECT_URL,
	uri: 'https://sa-east-1.cdn.hygraph.com/content/cl7ysrb353xg901ujcq0fa0yx/master',
	cache: new InMemoryCache(),
});
