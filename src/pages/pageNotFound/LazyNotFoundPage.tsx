import { lazy, Suspense } from 'react';
import { Box, CircularProgress } from '@mui/material';

const NotFoundPage = lazy(() => import('./NotFoundPage'));

export function LazyNotFoundPage() {
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
      <NotFoundPage />
    </Suspense>
  );
}
