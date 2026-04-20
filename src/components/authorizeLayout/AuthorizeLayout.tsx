import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import { DASHBOARD_PATH, PROFILE_PATH } from './Routes';
import {
  AppBar,
  Avatar,
  Box,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export default function AuthorizeLayout() {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: '#fff',
        color: 'text.primary',
        borderBottom: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Toolbar
        sx={{
          minHeight: 72,
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Box
          component={RouterLink}
          to={DASHBOARD_PATH}
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1.5,
            textDecoration: 'none',
            color: 'inherit',
          }}
        >
          <Box
            sx={{
              width: 40,
              height: 40,
              borderRadius: 2.5,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
              color: '#fff',
              fontWeight: 800,
              fontSize: 18,
              boxShadow: '0 8px 20px rgba(99, 102, 241, 0.25)',
            }}
          >
            D
          </Box>

          <Typography
            variant="h6"
            sx={{
              fontWeight: 800,
              letterSpacing: '-0.02em',
            }}
          >
            Diana Project
          </Typography>
        </Box>

        <IconButton
          component={RouterLink}
          to={PROFILE_PATH}
          sx={{
            p: 0,
            borderRadius: 999,
          }}
        >
          <Avatar
            sx={{
              width: 40,
              height: 40,
              bgcolor: 'grey.100',
              color: 'text.primary',
            }}
          >
            <AccountCircleRoundedIcon />
          </Avatar>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
