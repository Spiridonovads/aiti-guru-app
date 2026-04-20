import { lazy, Suspense } from 'react';
import { Box, CircularProgress } from '@mui/material';

const Dashboard = lazy(() => import('./Dashboard'));

export function LazyDashboard() {
  return (
    <Suspense
      fallback={
        <Box
          sx={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <CircularProgress />
        </Box>
      }
    >
      <Dashboard />
    </Suspense>
  );
}
