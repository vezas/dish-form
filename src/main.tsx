import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AdditionalInfo, Home, Summary, YourDish } from 'lib/pages';

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/your-dish', element: <YourDish /> },
  { path: '/additional-info', element: <AdditionalInfo /> },
  { path: '/summary', element: <Summary /> }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
