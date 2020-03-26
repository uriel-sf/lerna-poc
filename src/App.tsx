import React from "react";
import { Button } from "my-awesome-lib-button";
import { TextButton } from "my-awesome-lib-text-button";
import { ThemeProvider } from "styled-components";

const theme = {
  main: "blue"
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Button>Test</Button>
      <TextButton />
    </ThemeProvider>
  );
}

export default App;
