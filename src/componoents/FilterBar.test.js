import React from "react";
import {
  render,
  cleanup,
  getByTestId,
  fireEvent,
} from "@testing-library/react";
import FilterBar from "./FilterBar";

afterEach(() => {
  cleanup();
});

const updateFilter = jest.fn();

test("<FilterBar/> renders", () => {
  const { getByTestId } = render(<FilterBar />);
  expect(getByTestId("filter-all").textContent).toBeTruthy();
  expect(getByTestId("filter-open").textContent).toBeTruthy();
  expect(getByTestId("filter-completed").textContent).toBeTruthy();
});

test("updateFilter called with correct params", () => {
  const { getByTestId } = render(<FilterBar updateFilter={updateFilter} />);

  const filterAll = getByTestId("filter-all");
  fireEvent.click(filterAll);
  expect(updateFilter).toBeCalledWith("all");

  const filterOpen = getByTestId("filter-open");
  fireEvent.click(filterOpen);
  expect(updateFilter).toBeCalledWith("open");

  const filterCompleted = getByTestId("filter-completed");
  fireEvent.click(filterCompleted);
  expect(updateFilter).toBeCalledWith("completed");
});
