import { createBrowserRouter } from 'react-router-dom'
import RootLayout from '../layouts/RootLayout'
import ErrorPage from '../pages/ErrorPage'
import Homepage from '../pages/Homepage'
import UserLogin from '../pages/UserLogin'
import UserRegister from '../pages/UserRegister'
import About from '../pages/About'
import Destinations from '../pages/Destinations'
import Blogs from '../pages/Blogs'
import Contact from '../pages/Contact'
import FAQs from '../pages/FAQs'
import TourPackages from '../pages/TourPackages'
import PackageDetails from '../pages/PackageDetails'
import Cart from '../pages/Cart'
import SingleDestination from '../pages/SingleDestination'
import Booking from '../pages/Booking'


const routes = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
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
				path: '/destinations',
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
				path: '/packages',
				element: <TourPackages />,
			},
			{
				path: '/package/:id',
				loader: ({ params }) => fetch(`${ import.meta.env.VITE_SERVER_API_LINK }/package/${ params.id }`),
				element: <PackageDetails />,
			},
			{
				path: '/cart',
				element: <Cart />,
			},
			{
				path: `/destination/:id`,
				element: <SingleDestination />
			},
			{
				path: '/booking',
				element: <Booking />
			}
		],
	},
])

export default routes
