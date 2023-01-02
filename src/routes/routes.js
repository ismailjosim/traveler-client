import Main from '../layouts/Main';
import { createBrowserRouter } from 'react-router-dom';
import Homepage from '../components/Home/Homepage';
import ErrorPage from '../components/ErrorPage/ErrorPage';
import UserLogin from '../components/Auth/UserLogin';
import UserRegister from '../components/Auth/UserRegister';


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
            }
        ]
    },

])

export default routes;
