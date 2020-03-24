import React from 'react';
import Button from './components/Button';
import { ThemeProvider } from './components/Theme';

function App() {
  return <ThemeProvider>
    <Button>This is sparta!</Button>
  </ThemeProvider>;
}

export default App;
