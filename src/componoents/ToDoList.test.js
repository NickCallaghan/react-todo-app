import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import ToDoList from "./ToDoList";

afterEach(() => {
  cleanup();
});

const todos = [
  {
    id: "1",
    task: "Feed the cat",
    complete: false,
  },
  {
    id: "2",
    task: "Play with the cat",
    complete: false,
  },
  {
    id: "3",
    task: "Change Kittie Litter",
    complete: false,
  },
];

test("<ToDoList /> Renders", () => {
  const { debug, getByTestId } = render(<ToDoList todos={todos} />);
  expect(getByTestId("todo-list")).toBeTruthy();
});

test("<ToDoList /> has the correct items", () => {
  const { debug, queryAllByTestId } = render(<ToDoList todos={todos} />);
  expect(queryAllByTestId("todo-item").length).toBe(3);
});
