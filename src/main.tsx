import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';

/*fonts*/
import '@fontsource/cairo/400.css';
import '@fontsource/cairo/500.css';
import '@fontsource/open-sans/400.css';
import '@fontsource/roboto-mono/400.css';

/*app*/
import App from './app/App';
import '@styles/index.css';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element not found');
}

createRoot(rootElement).render(
  <StrictMode>
    <CssBaseline />
    <App />
  </StrictMode>,
);
