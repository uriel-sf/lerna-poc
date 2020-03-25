import React from "react";
import { Button } from "my-awesome-lib-button";
import { Text } from "my-awesome-lib-text";

export const TextButton = () => {
  return (
    <div>
      <h2>I'm composed of two components!</h2>
      <Text>It's text</Text>
      <Button>It's button</Button>
    </div>
  );
};
