import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AuthProvider from './Contexts/AuthProvider';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { QueryClient, QueryClientProvider, } from '@tanstack/react-query'
import { Provider } from 'react-redux';
import { store } from './redux/app/store';


const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  // <React.StrictMode>
  <QueryClientProvider client={ queryClient }>
    <Provider store={ store }>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Provider>
  </QueryClientProvider>
  // </React.StrictMode>
);
