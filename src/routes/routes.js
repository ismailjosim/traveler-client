import Main from '../layouts/Main';
import { createBrowserRouter } from 'react-router-dom';
import Homepage from '../components/Home/Homepage';
import ErrorPage from '../components/ErrorPage/ErrorPage';
import UserLogin from '../components/Auth/UserLogin';
import UserRegister from '../components/Auth/UserRegister';
import About from '../components/About/About';
import Destinations from '../components/Destinations/Destinations';


const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Homepage />
            },
            {
                path: '/login',
                element: <UserLogin />
            },
            {
                path: '/register',
                element: <UserRegister />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/destination',
                element: <Destinations />
            }
        ]
    },

])

export default routes;
