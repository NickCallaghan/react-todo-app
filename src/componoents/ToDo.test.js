import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import ToDo from "./ToDo";

afterEach(() => {
  cleanup();
});

const updateToDo = jest.fn();
const deleteToDo = jest.fn();

const todo = {
  id: "1",
  task: "Feed the cat",
  complete: false,
};

const todoComplete = {
  id: "1",
  task: "Feed the cat",
  complete: true,
};

// Renders Corretly if incomplete
test("<ToDo /> Render incomplete todo", () => {
  const { getByTestId, debug } = render(<ToDo todo={todo} />);
  expect(getByTestId("todo-label").textContent).toBe(todo.task);
  expect(getByTestId("todo-checkbox").getAttribute("checked")).toBeNull();
});

// Renders Correclty if complete
test("<ToDo /> Renders complete todo", () => {
  const { getByTestId, debug } = render(<ToDo todo={todoComplete} />);
  expect(getByTestId("todo-label").textContent).toBe(todo.task);
  expect(getByTestId("todo-checkbox").getAttribute("checked")).toBe("");
});

// Able to toggle complete
test("<ToDo /> Toggle todo complete", () => {
  const { getByTestId, debug } = render(
    <ToDo todo={todo} updateToDo={updateToDo} />
  );
  const label = getByTestId("todo-label");
  fireEvent.click(label);
  expect(updateToDo).toHaveBeenCalledWith(
    todo.id,
    expect.objectContaining({
      id: todo.id,
      task: todo.task,
      complete: todo.complete,
    })
  );
});

// Ability to delete todo
test("<ToDo /> Delete to do", () => {
  const { getByTestId, debug } = render(
    <ToDo todo={todo} deleteToDo={deleteToDo} />
  );
  const deleteButton = getByTestId("todo-remove-button");
  fireEvent.click(deleteButton);
  expect(deleteToDo).toHaveBeenCalledWith(todo.id);
});
