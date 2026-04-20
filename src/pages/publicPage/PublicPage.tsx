import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import PersonAddAltRoundedIcon from '@mui/icons-material/PersonAddAltRounded';
import {
  Box,
  Button,
  Container,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export default function PublicPage() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background:
          'radial-gradient(circle at top, rgba(99,102,241,0.18), transparent 35%), linear-gradient(180deg, #f8fafc 0%, #eef2ff 100%)',
        px: 2,
      }}
    >
      <Container maxWidth="md">
        <Paper
          elevation={0}
          sx={{
            borderRadius: 6,
            overflow: 'hidden',
            border: '1px solid',
            borderColor: 'divider',
            backgroundColor: 'rgba(255,255,255,0.88)',
            backdropFilter: 'blur(12px)',
            boxShadow: '0 24px 80px rgba(15, 23, 42, 0.10)',
          }}
        >
          <Box
            sx={{
              px: { xs: 3, sm: 6 },
              py: { xs: 5, sm: 7 },
              textAlign: 'center',
            }}
          >
            <Stack spacing={3} alignItems="center">
              <Box
                sx={{
                  width: 84,
                  height: 84,
                  borderRadius: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  background:
                    'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                  boxShadow: '0 14px 30px rgba(99, 102, 241, 0.35)',
                }}
              >
                <AutoAwesomeRoundedIcon sx={{ fontSize: 40 }} />
              </Box>

              <Stack spacing={1.5}>
                <Typography
                  variant="overline"
                  sx={{
                    color: 'primary.main',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                  }}
                >
                  PUBLIC PAGE
                </Typography>

                <Typography
                  variant="h2"
                  sx={{
                    fontSize: { xs: 32, sm: 48 },
                    fontWeight: 800,
                    lineHeight: 1.1,
                    letterSpacing: '-0.03em',
                    color: 'text.primary',
                  }}
                >
                  Пет-проект Дианы Спиридоновой
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    width: '100%',
                    margin: '0 auto',
                    color: 'text.secondary',
                    fontSize: { xs: 16, sm: 18 },
                    lineHeight: 1.7,
                  }}
                >
                  Авторизуйтесь или зарегистрируйтесь, чтобы войти.
                </Typography>
              </Stack>

              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={2}
                sx={{ pt: 1 }}
              >
                <Button
                  component={RouterLink}
                  to="/login"
                  variant="contained"
                  size="large"
                  startIcon={<LoginRoundedIcon />}
                  sx={{
                    minWidth: 220,
                    borderRadius: 3,
                    py: 1.4,
                    textTransform: 'none',
                    fontWeight: 700,
                    boxShadow: 'none',
                  }}
                >
                  Авторизоваться
                </Button>

                <Button
                  component={RouterLink}
                  to="/register"
                  variant="outlined"
                  size="large"
                  startIcon={<PersonAddAltRoundedIcon />}
                  sx={{
                    minWidth: 220,
                    borderRadius: 3,
                    py: 1.4,
                    textTransform: 'none',
                    fontWeight: 700,
                  }}
                >
                  Зарегистрироваться
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
