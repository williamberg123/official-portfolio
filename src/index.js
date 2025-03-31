import React from 'react';
import ReactDOM from 'react-dom/client';
// eslint-disable-next-line
import { ApolloProvider } from '@apollo/client';

import App from './app';
import { client } from './app/services/apollo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<ApolloProvider client={client}>
			<App />
		</ApolloProvider>
	</React.StrictMode>,
);
