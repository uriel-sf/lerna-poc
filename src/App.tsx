import React from 'react';
import Button from './components/Button';
import { ThemeProvider } from './components/Theme';
import Text from './components/Text';

function App() {
  return (
    <ThemeProvider>
      <Text>This is text component</Text>
      <Button>This is button component</Button>
    </ThemeProvider>
  );
}

export default App;
