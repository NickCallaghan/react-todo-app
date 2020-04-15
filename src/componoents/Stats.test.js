import React from "react";
import { render, cleanup, getByTestId } from "@testing-library/react";
import Stats from "./Stats";

afterEach(() => {
  cleanup();
});

const todos = [
  {
    id: 1,
    task: "Feed the cat",
    complete: false,
  },
  {
    id: 2,
    task: "Play with the cat",
    complete: false,
  },
  {
    id: 3,
    task: "Change Kittie Litter",
    complete: false,
  },
];

test("Error when no props", () => {
  const { getByTestId } = render(<Stats />);
  expect(getByTestId("no-props")).toBeTruthy();
});

test("<Stats/> renders", () => {
  const { debug, getByTestId } = render(<Stats todos={todos} />);
  expect(getByTestId("completed-title")).toBeTruthy();
  expect(getByTestId("completed-total").textContent).toBe("0");
  expect(getByTestId("remaining-title")).toBeTruthy();
  expect(getByTestId("remaining-total").textContent).toBe("3");
});
