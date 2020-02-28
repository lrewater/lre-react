import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import TextField from "./TextField";

afterEach(() => {
  cleanup();
  onChange.mockClear();
  console.error.mockClear();
});

console.error = jest.fn();

const onChange = jest.fn();

describe("Invalid <TextField /> config", () => {
  test("<TextField /> without required props", () => {
    render(<TextField />);
    expect(console.error).toHaveBeenCalled();
  });
});

describe("Valid <TextField /> configs", () => {
  test("<TextField /> standard use case", () => {
    const { getByTestId, getByLabelText } = render(
      <TextField
        name="text"
        label="Text Field"
        value="example"
        onChange={onChange}
      />
    );
    const filter = getByTestId("text-field");
    const label = getByLabelText("Text Field");
    expect(filter).toBeTruthy();
    expect(label).toBeTruthy();
    expect(label.value).toBe("example");
    expect(label.type).toBe("text");
    expect(label.name).toBe("text");

    fireEvent.change(label, {
      target: { value: "another example" }
    });

    expect(onChange).toHaveBeenCalled();
  });

  test("<TextField /> outlined variant", () => {
    const { getByLabelText } = render(
      <TextField
        name="text"
        label="Text Field"
        variant="outlined"
        value="example"
        onChange={onChange}
      />
    );
    const label = getByLabelText("Text Field");
    expect(label.classList).toContain("MuiOutlinedInput-input");
  });

  test("<TextField /> filled variant", () => {
    const { getByLabelText } = render(
      <TextField
        name="text"
        label="Text Field"
        variant="filled"
        value="example"
        onChange={onChange}
      />
    );
    const label = getByLabelText("Text Field");
    expect(label.classList).toContain("MuiFilledInput-input");
  });

  test("<TextField /> fullWidth", () => {
    const { getByLabelText, getByTestId } = render(
      <TextField
        name="text"
        fullWidth
        label="Text Field"
        variant="filled"
        value="example"
        onChange={onChange}
      />
    );
    const filter = getByTestId("text-field");
    const label = getByLabelText("Text Field");
    expect(filter.classList).toContain("MuiFormControl-fullWidth");
    expect(label.classList).toContain("MuiFilledInput-input");
  });
});
