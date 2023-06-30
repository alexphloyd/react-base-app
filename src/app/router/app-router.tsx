import { BaseLayout } from '@app/layouts/base-layout';
import { createBrowserRouter } from 'react-router-dom';

import { ProtectedPages } from './guard-config';
import AccessDenied from '@pages/access-denied';

export const appRouter = () =>
  createBrowserRouter([
    {
      element: BaseLayout,
      children: [
        {
          path: '/',
          element: <ProtectedPages.Home />,
        },
        {
          path: '/settings',
          element: <ProtectedPages.Settings />,
        },
        {
          path: '/access-denied',
          element: <AccessDenied />,
        },
      ],
    },
  ]);
