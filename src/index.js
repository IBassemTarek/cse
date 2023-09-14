import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/login_screen';
import AddNewScreen from './screens/AddNewScreen';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Profile } from './screens/Profile/profile';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeScreen />,
  },
  {
    path: 'login',
    element: <LoginScreen />,
  },
  {
    path: 'new',
    element: <AddNewScreen />,
  },

  {
    path: 'profile',
    element: <Profile />,
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
