import SentimentDissatisfiedRoundedIcon from '@mui/icons-material/SentimentDissatisfiedRounded';
import {
  Box,
  Button,
  Container,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import AuthorizeLayout from '@/components/authorizeLayout/AuthorizeLayout';

export default function NotFoundPage() {
  return (
    <>
      <AuthorizeLayout />
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(180deg, #f8fafc 0%, #eef2ff 100%)',
          px: 2,
        }}
      >
        <Container maxWidth="sm">
          <Paper
            elevation={0}
            sx={{
              p: { xs: 4, sm: 6 },
              borderRadius: 6,
              textAlign: 'center',
              border: '1px solid',
              borderColor: 'divider',
              backdropFilter: 'blur(10px)',
              backgroundColor: 'rgba(255,255,255,0.85)',
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
                  background:
                    'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                  color: '#fff',
                  boxShadow: '0 10px 30px rgba(99, 102, 241, 0.35)',
                }}
              >
                <SentimentDissatisfiedRoundedIcon sx={{ fontSize: 42 }} />
              </Box>

              <Box>
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: 72, sm: 96 },
                    fontWeight: 800,
                    lineHeight: 1,
                    letterSpacing: '-0.04em',
                    color: 'text.primary',
                  }}
                >
                  404
                </Typography>

                <Typography
                  variant="h5"
                  sx={{
                    mt: 1,
                    fontWeight: 700,
                    color: 'text.primary',
                  }}
                >
                  Страница не найдена
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    mt: 1.5,
                    color: 'text.secondary',
                    maxWidth: 420,
                    mx: 'auto',
                  }}
                >
                  Похоже, такой страницы не существует или она была перемещена.
                  Проверь адрес или вернись на главную.
                </Typography>
              </Box>

              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={2}
                sx={{ width: { xs: '100%', sm: 'auto' }, pt: 1 }}
              >
                <Button
                  component={RouterLink}
                  to="/"
                  variant="contained"
                  size="large"
                  sx={{
                    minWidth: 180,
                    borderRadius: 3,
                    py: 1.4,
                    textTransform: 'none',
                    fontWeight: 700,
                    boxShadow: 'none',
                  }}
                >
                  На главную
                </Button>

                <Button
                  variant="outlined"
                  size="large"
                  onClick={() => window.history.back()}
                  sx={{
                    minWidth: 180,
                    borderRadius: 3,
                    py: 1.4,
                    textTransform: 'none',
                    fontWeight: 700,
                  }}
                >
                  Назад
                </Button>
              </Stack>
            </Stack>
          </Paper>
        </Container>
      </Box>
    </>
  );
}
