import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles, theme } from './styles/theme';
import { router } from './routes';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<RouterProvider router={router} />
			<GlobalStyles />
		</ThemeProvider>
	);
}

export default App;
