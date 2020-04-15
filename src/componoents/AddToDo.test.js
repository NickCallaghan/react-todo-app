import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import AddToDo from "./AddToDo";
import { uuid } from "uuid/v4";

afterEach(() => {
  cleanup();
});

const addToDo = jest.fn();

// Form renders
test("<AddTodo/> renders", () => {
  const { getByTestId } = render(<AddToDo />);
  expect(getByTestId("addtodo-input").tagName).toBe("INPUT");
  expect(getByTestId("addtodo-submit").tagName).toBe("BUTTON");
});

// To Do Submitted with input value
test("Submit called with correct values", () => {
  const { getByTestId } = render(<AddToDo addToDo={addToDo} />);
  const addTodoForm = getByTestId("addtodo-form");
  const input = getByTestId("addtodo-input");
  input.value = "Hello";
  fireEvent.change(input);
  fireEvent.submit(addTodoForm);
  expect(addToDo).toBeCalledWith(
    expect.objectContaining({
      task: "Hello",
      complete: false,
      id: expect.any(String),
    })
  );
});
