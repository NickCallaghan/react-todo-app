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
    complete: true,
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

test("<ToDoList /> renders only complete=false", () => {
  const { debug, queryAllByTestId } = render(
    <ToDoList todos={todos} filter="open" />
  );
  expect(queryAllByTestId("todo-item").length).toBe(2);
});

test("<ToDoList /> renders only complete=true", () => {
  const { debug, queryAllByTestId } = render(
    <ToDoList todos={todos} filter="completed" />
  );
  expect(queryAllByTestId("todo-item").length).toBe(1);
});

test("<ToDoList /> renders all todos", () => {
  const { debug, queryAllByTestId } = render(
    <ToDoList todos={todos} filter="all" />
  );
  expect(queryAllByTestId("todo-item").length).toBe(3);
});

test("<ToDoList /> Renders no todos when empty []", () => {
  const { debug, getByTestId } = render(<ToDoList todos={[]} />);
  expect(getByTestId("no-todos")).toBeTruthy();
});
