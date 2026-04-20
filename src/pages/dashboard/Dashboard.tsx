import AuthorizeLayout from '@/components/authorizeLayout/AuthorizeLayout';

import ExploreRoundedIcon from '@mui/icons-material/ExploreRounded';
import { Box, Paper, Stack, Typography } from '@mui/material';

export default function Dashboard() {
  return (
    <>
      <AuthorizeLayout />
      <Box
        sx={{
          minHeight: 'calc(100vh - 72px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          px: 2,
          background:
            'radial-gradient(circle at top, rgba(99,102,241,0.10), transparent 30%), #f8fafc',
        }}
      >
        <Paper
          elevation={0}
          sx={{
            maxWidth: 560,
            width: '100%',
            p: { xs: 4, sm: 6 },
            borderRadius: 6,
            textAlign: 'center',
            border: '1px solid',
            borderColor: 'divider',
            backgroundColor: 'rgba(255,255,255,0.9)',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 20px 60px rgba(15, 23, 42, 0.08)',
          }}
        >
          <Stack spacing={3} alignItems="center">
            <Box
              sx={{
                width: 88,
                height: 88,
                borderRadius: '24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                color: '#fff',
                boxShadow: '0 12px 30px rgba(99, 102, 241, 0.35)',
              }}
            >
              <ExploreRoundedIcon sx={{ fontSize: 42 }} />
            </Box>

            <Stack spacing={1.5}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 800,
                  letterSpacing: '-0.03em',
                  color: 'text.primary',
                }}
              >
                Добро пожаловать
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: 'text.secondary',
                  fontSize: 18,
                  lineHeight: 1.7,
                  maxWidth: 420,
                  mx: 'auto',
                }}
              >
                Для перемещения между страницами найдите нужный раздел в шапке.
              </Typography>
            </Stack>
          </Stack>
        </Paper>
      </Box>
    </>
  );
}
