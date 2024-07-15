import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import Estimate from './Pages/Estimate/Estimate';

const router = createBrowserRouter([
  //Page Objects
  {
    path: '/e-commerce-website',
    element: <App />,
    errorElement: <div>404 Not Found</div>
  },
  {
    path: '/e-commerce-website/instant-estimate',
    element: <Estimate />,
    errorElement: <div>404 Not Found</div>
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router= {router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();