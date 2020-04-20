import React from "react";
import { render, cleanup } from "@testing-library/react";
import App from "./App";

afterEach(() => {
  cleanup();
});

test("<App/> renders", () => {
  const { getByTestId } = render(<App />);
  expect(getByTestId("App")).toBeTruthy();
  expect(getByTestId("App-heading")).toBeTruthy();
  expect(getByTestId("App-subheading")).toBeTruthy();
  expect(getByTestId("App-main")).toBeTruthy();
});
