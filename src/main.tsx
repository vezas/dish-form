import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AdditionalInfo, Home, Layout, Summary, YourDish } from 'pages';
import { GlobalStyles, Theme } from 'lib/styles';
import { paths } from 'lib/constants';

const routes = [
  { path: '/', element: <Home /> },
  { path: paths.yourDish, element: <YourDish /> },
  { path: paths.additionalInfo, element: <AdditionalInfo /> },
  { path: paths.summary, element: <Summary /> }
];

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: routes.map(({ path, element }) => ({ path, element }))
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Theme>
    <React.StrictMode>
      <GlobalStyles />
      <RouterProvider router={router} />
    </React.StrictMode>
  </Theme>
);
