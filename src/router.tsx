import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Error from './pages/Error/Error';
import Projects from './pages/Projects/Projects';
import MainLayout from './layouts/MainLayout/MainLayout';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import Blog from './pages/Blog/Blog';
import Project from './pages/Project/Project';
import Reviews from './pages/Reviews/Reviews';

const router = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout />,
		children: [
			{
				path: '/',
				element: <App />,
				index: true,
			},
			{
				path: '/portfolio',
				element: <App />,
			},
			{
				path: '/projects/',
				element: <Projects />,
			},
			{
				path: '/project/:slug',
				element: <Project />,
			},
			{
				path: '/contact',
				element: <Contact />,
			},
			{
				path: '/about',
				element: <About />,
			},
			{
				path: '/blog',
				element: <Blog />,
			},
			{
				path: '/reviews',
				element: <Reviews />,
			},
		],
		errorElement: <Error />,
	},
]);

export default router;
