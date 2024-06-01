import React from 'react'
import ReactDOM from 'react-dom/client'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { QueryClient, QueryClientProvider, } from '@tanstack/react-query'
import { Provider } from 'react-redux';





import './index.css'
import App from './App.jsx'
import AuthProvider from './Contexts/AuthProvider';
import { store } from './redux/app/store';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={ queryClient }>
      <Provider store={ store }>
        <AuthProvider>
          <App />
        </AuthProvider>
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>,
)
