import React from "react";
import { render, cleanup, waitForElement } from "@testing-library/react";
import Select from "./Select";
import UserEvent from "@testing-library/user-event";

afterEach(() => {
  cleanup();
  onChange.mockClear();
  console.error.mockClear();
});

console.error = jest.fn();

const onChange = jest.fn();

describe("Invalid <Select /> config", () => {
  test("<Select /> without required props", () => {
    render(<Select />);
    expect(console.error).toHaveBeenCalled();
  });
});

describe("Valid <Select /> configs", () => {
  test("<Select /> standard use case", async () => {
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
      getByLabelText
    } = render(
      <Select
        name="single-select"
        label="Single Select Filter"
        value={2}
        data={data}
        valueField="ndx"
        displayField="display"
        variant="outlined"
        onChange={onChange}
      />
    );

    const label = getByLabelText("Single Select Filter");
    const selectNode = getByTestId("single-select");
    const selectButton = getByRole("button");
    expect(label).toBeTruthy();
    expect(selectButton).not.toBeNull();
    expect(selectNode).not.toBeNull();
    expect(selectButton.classList).toContain("MuiSelect-outlined");

    UserEvent.click(selectButton);
    await waitForElement(() => getByText("option 1"), { container });
    const ul = getByRole("listbox");
    const itemClickable = getByText("option 1");
    UserEvent.click(itemClickable);
    expect(onChange).toHaveBeenCalled();
    expect(ul.querySelectorAll("li").length).toBe(3);
  });
});
