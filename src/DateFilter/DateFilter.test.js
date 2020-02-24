import React from "react";
import {
  render,
  cleanup,
  fireEvent,
  waitForElement
} from "@testing-library/react";
import DateFilter from "./DateFilter";
import UserEvent from "@testing-library/user-event";

afterEach(() => {
  cleanup();
  onChange.mockClear();
  console.error.mockClear();
});

console.error = jest.fn();

const onChange = jest.fn();

describe("Invalid <DateFilter /> Configs", () => {
  test("<DateFilter /> without required props", () => {
    render(<DateFilter />);
    expect(console.error).toHaveBeenCalled();
  });
});

describe("Valid <DateFilter /> configs", () => {
  test("<DateFilter /> standard use case", () => {
    const { getByTestId, getByLabelText } = render(
      <DateFilter
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

  test("<DateFilter /> outlined variant", () => {
    const { getByLabelText } = render(
      <DateFilter
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

  test("<DateFilter /> filled variant", () => {
    const { getByLabelText } = render(
      <DateFilter
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
});
