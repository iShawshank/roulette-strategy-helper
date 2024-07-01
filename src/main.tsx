import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

import {
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import Home from './routes/Home.tsx';
import Donate from './routes/Donate.tsx';

const router = createBrowserRouter([
  {
    path: '/roulette-strategy-helper/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      {
        path: '/roulette-strategy-helper/donate',
        element: <Donate />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
