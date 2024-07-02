import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './login';
import Signup from './signup';
import { TableLogin } from "./tableLogin";
import { TableSignup } from "./tableSignup";

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

const layoutLogin = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/signup",
      element: <Signup />
    },
    {
      path: "/tableLogin",
      element: <TableLogin />
    },
    {
      path: "/tableSignup",
      element: <TableSignup />
    }
  ]
)



root.render(
  <React.StrictMode>
    < RouterProvider router={layoutLogin} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
