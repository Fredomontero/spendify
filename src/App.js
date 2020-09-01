import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './utils/theme';
import './App.css';

import Router from './components/router/router.component';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router/>
    </ThemeProvider>
  );
}

export default App;