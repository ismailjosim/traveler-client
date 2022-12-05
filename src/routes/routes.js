import Main from '../layouts/Main';
import { createBrowserRouter } from 'react-router-dom';
import Homepage from '../components/Home/Homepage';


const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <h3>Page Not Found</h3>,
        children: [
            {
                path: '/',
                element: <Homepage />
            },
        ]
    },

])

export default routes;
