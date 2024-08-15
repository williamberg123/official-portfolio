import {
	createBrowserRouter, createRoutesFromElements, Route,
} from 'react-router-dom';

import Home from './pages/Home';
import NotFound from './pages/NotFound';
import RootLayout from './pages/RootLayout';
import ErrorPage from './pages/ErrorPage';

export const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<RootLayout />} errorElement={<ErrorPage />}>
			<Route index element={<Home />} />
			<Route path="*" element={<NotFound />} />
		</Route>
	),
);
