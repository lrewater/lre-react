import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import DatePicker from "./DatePicker";

afterEach(() => {
  cleanup();
  onChange.mockClear();
  console.error.mockClear();
});

console.error = jest.fn();

const onChange = jest.fn();

describe("Invalid <DatePicker /> config", () => {
  test("<DatePicker /> without required props", () => {
    render(<DatePicker />);
    expect(console.error).toHaveBeenCalled();
  });
});

describe("Valid <DatePicker /> configs", () => {
  test("<DatePicker /> standard use case", () => {
    const { getByTestId, getByLabelText } = render(
      <DatePicker
        name="date"
        label="Date Filter"
        value="2020-02-24"
        onChange={onChange}
      />
    );
    const filter = getByTestId("date-filter");
    const label = getByLabelText("Date Filter");
    expect(filter).toBeTruthy();
    expect(label).toBeTruthy();
    expect(label.value).toBe("2020-02-24");
    expect(label.type).toBe("date");
    expect(label.name).toBe("date");

    fireEvent.change(label, {
      target: { value: "2020-01-01" }
    });

    expect(onChange).toHaveBeenCalled();
  });

  test("<DatePicker /> outlined variant", () => {
    const { getByLabelText } = render(
      <DatePicker
        variant="outlined"
        name="date"
        label="Date Filter"
        value="2020-02-24"
        onChange={onChange}
      />
    );
    const label = getByLabelText("Date Filter");
    expect(label.classList).toContain("MuiOutlinedInput-input");
  });

  test("<DatePicker /> filled variant", () => {
    const { getByLabelText } = render(
      <DatePicker
        variant="filled"
        name="date"
        label="Date Filter"
        value="2020-02-24"
        onChange={onChange}
      />
    );
    const label = getByLabelText("Date Filter");
    expect(label.classList).toContain("MuiFilledInput-input");
  });

  test("<DatePicker /> fullWidth", () => {
    const { getByLabelText, getByTestId } = render(
      <DatePicker
        variant="filled"
        fullWidth
        name="date"
        label="Date Filter"
        value="2020-02-24"
        onChange={onChange}
      />
    );
    const filter = getByTestId("date-filter");
    const label = getByLabelText("Date Filter");
    expect(filter.classList).toContain("MuiFormControl-fullWidth");
    expect(label.classList).toContain("MuiFilledInput-input");
  });
});
