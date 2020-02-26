import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import Switch from "./Switch";

afterEach(() => {
  cleanup();
  onChange.mockClear();
  console.error.mockClear();
});

console.error = jest.fn();

const onChange = jest.fn();

describe("Invalid <Switch /> config", () => {
  test("<Switch /> without required props", () => {
    render(<Switch />);
    expect(console.error).toHaveBeenCalled();
  });
});

describe("Valid <Switch /> configs", () => {
  test("<Switch /> with required props", () => {
    const checkState = true;
    const { getByLabelText, getByText } = render(
      <Switch
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
