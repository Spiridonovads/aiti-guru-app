import { lazy, Suspense } from 'react';
import { Box, CircularProgress } from '@mui/material';

const PublicPage = lazy(() => import('./PublicPage'));

export function LazyPublicPage() {
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
      <PublicPage />
    </Suspense>
  );
}
