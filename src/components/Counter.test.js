import React from "react";
import ReactDOM from "react-dom";
import { Counter } from "./Counter";

describe("Counter component", () => {
  test("should initially render the Counter component", () => {
    const container = document.createElement("div");
    document.body.appendChild(container);

    ReactDOM.render(<Counter />, container);

    const button = document.body.querySelector("button");

    expect(button.textContent).toBe("0");
  });
});
