
import { ToastContainer } from 'react-toastify';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { RouterProvider } from 'react-router-dom';
import routes from './routes/routes';
import "react-datepicker/dist/react-datepicker.css";

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
