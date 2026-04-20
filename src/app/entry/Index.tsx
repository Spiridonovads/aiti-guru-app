import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from 'react-router-dom';
import { LazyDashboard } from '@/pages/dashboard/LazyDashboard';
import { LazyNotFoundPage } from '@/pages/pageNotFound/LazyNotFoundPage';
import { LazyPublicPage } from '@/pages/publicPage/LazyPublicPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/dashboard" replace />,
  },
  { path: '/dashboard', element: <LazyDashboard /> },
  { path: '*', element: <LazyNotFoundPage /> },
  { path: '/public', element: <LazyPublicPage /> },
]);

export function Index() {
  return <RouterProvider router={router} />;
}
