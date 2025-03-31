// eslint-disable-next-line
import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
	uri: process.env.REACT_APP_GRAPHCMS_PROJECT_URL,
	cache: new InMemoryCache(),
});
