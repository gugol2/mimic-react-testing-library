import React from "react";

export const Counter = () => {
  const [counter, setCounter] = React.useState(0);

  const increment = () => {
    setCounter((c) => c + 1);
  };

  return <button onClick={increment}>{counter}</button>;
};
