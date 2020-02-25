import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import SwitchFilter from "./SwitchFilter";

afterEach(() => {
  cleanup();
  onChange.mockClear();
  console.error.mockClear();
});

console.error = jest.fn();

const onChange = jest.fn();

describe("Invalid <SwitchFilter /> config", () => {
  test("<SwitchFilter /> without required props", () => {
    render(<SwitchFilter />);
    expect(console.error).toHaveBeenCalled();
  });
});

describe("Valid <SwitchFilter /> configs", () => {
  test("<SwitchFilter /> with required props", () => {
    const checkState = true;
    const { getByLabelText, getByText } = render(
      <SwitchFilter
        name="switch-filter"
        label={checkState ? "Active" : "Inactive"}
        checked={checkState}
        value="Test"
        onChange={onChange}
      />
    );

    const label = getByLabelText("Active");
    fireEvent.click(label, {
      target: { checked: false }
    });

    expect(getByText("Active")).toBeTruthy();
    expect(onChange).toHaveBeenCalled();
  });
});
