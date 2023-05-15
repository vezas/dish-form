import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { AdditionalInfo, Home, Layout, Success, Summary, YourDish } from 'pages';
import { GlobalStyles, Theme } from 'lib/styles';
import { FormContextProvider } from 'lib/store';
import { paths } from 'lib/constants';

const queryClient = new QueryClient();

const baseURL = import.meta.env.BASE_URL || '/';

const routes = [
  { path: baseURL, element: <Home /> },
  { path: paths.yourDish, element: <YourDish /> },
  { path: paths.additionalInfo, element: <AdditionalInfo /> },
  { path: paths.summary, element: <Summary /> },
  { path: paths.success, element: <Success /> }
];

const router = createBrowserRouter([
  {
    path: baseURL,
    element: <Layout />,
    children: routes.map(({ path, element }) => ({ path, element }))
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Theme>
    <React.StrictMode>
      <GlobalStyles />
      <QueryClientProvider client={queryClient}>
        <FormContextProvider>
          <RouterProvider router={router} />
        </FormContextProvider>
        <ReactQueryDevtools initialIsOpen={false} position='bottom-left' />
      </QueryClientProvider>
    </React.StrictMode>
  </Theme>
);
