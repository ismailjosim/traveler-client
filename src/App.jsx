
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "react-datepicker/dist/react-datepicker.css";
import { RouterProvider } from 'react-router-dom';
import routes from './routes/routes'
function App() {
  return (
    <div>
      <ToastContainer />
      <RouterProvider router={ routes }>
      </RouterProvider>
    </div>
  );
}

export default App;
