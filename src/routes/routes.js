import { createBrowserRouter } from 'react-router-dom'
import About from '../components/About/About'
import UserLogin from '../components/Auth/UserLogin'
import UserRegister from '../components/Auth/UserRegister'
import Blogs from '../components/Blogs/Blogs'
import Contact from '../components/Contact Us/Contact'
import Destinations from '../components/Destinations/Destinations'
import SingleDestination from '../components/Destinations/Sections/SingleDestination'
import ErrorPage from '../components/ErrorPage/ErrorPage'
import FAQs from '../components/FAQs/FAQs'
import Homepage from '../components/Home/Homepage'
import Main from '../layouts/Main'

const routes = createBrowserRouter([
	{
		path: '/',
		element: <Main />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: '/',
				element: <Homepage />,
			},
			{
				path: '/login',
				element: <UserLogin />,
			},
			{
				path: '/register',
				element: <UserRegister />,
			},
			{
				path: '/about',
				element: <About />,
			},
			{
				path: '/destination',
				element: <Destinations />,
			},
			{
				path: '/blog',
				element: <Blogs />,
			},
			{
				path: '/contact',
				element: <Contact />,
			},
			{
				path: '/faq',
				element: <FAQs />,
			},
			{
				path: `/destination/:id`,
				loader: ({ params }) => fetch(`http://localhost:5000/destination/${ params.id }`),
				element: <SingleDestination />
			},
		],
	},
])

export default routes
