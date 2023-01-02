import Main from '../layouts/Main';
import { createBrowserRouter } from 'react-router-dom';
import Homepage from '../components/Home/Homepage';
import ErrorPage from '../components/ErrorPage/ErrorPage';
import UserLogin from '../components/Auth/UserLogin';


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
            }
        ]
    },

])

export default routes;
