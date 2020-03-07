import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import TextArea from "./TextArea";

afterEach(() => {
  cleanup();
  onChange.mockClear();
  console.error.mockClear();
});

console.error = jest.fn();

const onChange = jest.fn();

describe("Invalid <TextArea /> config", () => {
  test("<TextArea /> without required props", () => {
    render(<TextArea />);
    expect(console.error).toHaveBeenCalled();
  });
});

describe("Valid <TextArea /> configs", () => {
  test("<TextArea /> standard use case", () => {
    const { getByTestId, getByLabelText } = render(
      <TextArea
        name="text"
        label="Text Area"
        value="example"
        onChange={onChange}
      />
    );
    const filter = getByTestId("text-area");
    const label = getByLabelText("Text Area");
    expect(filter).toBeTruthy();
    expect(label).toBeTruthy();
    expect(label.value).toBe("example");
    expect(label.type).toBe("textarea");
    expect(label.name).toBe("text");

    fireEvent.change(label, {
      target: { value: "another example" }
    });

    expect(onChange).toHaveBeenCalled();
  });

  test("<TextArea /> outlined variant", () => {
    const { getByLabelText } = render(
      <TextArea
        name="text"
        label="Text Area"
        variant="outlined"
        value="example"
        onChange={onChange}
      />
    );
    const label = getByLabelText("Text Area");
    expect(label.classList).toContain("MuiOutlinedInput-input");
  });

  test("<TextArea /> filled variant", () => {
    const { getByLabelText } = render(
      <TextArea
        name="text"
        label="Text Area"
        variant="filled"
        value="example"
        onChange={onChange}
      />
    );
    const label = getByLabelText("Text Area");
    expect(label.classList).toContain("MuiFilledInput-input");
  });

  test("<TextArea /> fullWidth", () => {
    const { getByLabelText, getByTestId } = render(
      <TextArea
        name="text"
        fullWidth
        label="Text Area"
        variant="filled"
        value="example"
        onChange={onChange}
      />
    );
    const filter = getByTestId("text-area");
    const label = getByLabelText("Text Area");
    expect(filter.classList).toContain("MuiFormControl-fullWidth");
    expect(label.classList).toContain("MuiFilledInput-input");
  });
});
