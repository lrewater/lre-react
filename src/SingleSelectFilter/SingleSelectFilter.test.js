import React from "react";
import {
  render,
  cleanup,
  fireEvent,
  waitForElement
} from "@testing-library/react";
import SingleSelectFilter from "./SingleSelectFilter";
import UserEvent from "@testing-library/user-event";

afterEach(() => {
  cleanup();
  onChange.mockClear();
  console.error.mockClear();
});

console.error = jest.fn();

const onChange = jest.fn();

describe("Invalid <SingleSelectFilter /> config", () => {
  test("<SingleSelectFilter /> without required props", () => {
    render(<SingleSelectFilter />);
    expect(console.error).toHaveBeenCalled();
  });
});

describe("Valid <SingleSelectFilter /> configs", () => {
  test("<SingleSelectFilter /> standard use case", async () => {
    const data = [
      { ndx: 1, display: "option 1" },
      { ndx: 2, display: "option 2" },
      { ndx: 3, display: "option 3" }
    ];
    const {
      getByTestId,
      getByRole,
      getByText,
      container,
      getByLabelText,
      debug
    } = render(
      <SingleSelectFilter
        name="single-select"
        label="Single Select Filter"
        selected={2}
        data={data}
        valueField="ndx"
        displayField="display"
        onChange={onChange}
      />
    );

    const selectNode = getByTestId("single-select");
    const selectButton = getByRole("button");
    expect(selectButton).not.toBeNull();
    expect(selectNode).not.toBeNull();

    UserEvent.click(selectButton);
    await waitForElement(() => getByText("option 1"), { container });
    const ul = getByRole("listbox");
    const itemClickable = getByText("option 1");
    UserEvent.click(itemClickable);
    expect(onChange).toHaveBeenCalled();
    expect(ul.querySelectorAll("li").length).toBe(3);
  });
});
