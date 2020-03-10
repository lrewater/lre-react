import React from "react";
import {
  render,
  cleanup,
  fireEvent,
  waitForElement
} from "@testing-library/react";
import UserEvent from "@testing-library/user-event";
import MultiSelect from "./MultiSelect";

afterEach(() => {
  cleanup();
  console.error.mockClear();
  onSubmit.mockClear();
  onChange.mockClear();
});

console.error = jest.fn();
const onSubmit = jest.fn();
const onChange = jest.fn();

describe("Invalid <MultiSelect /> config", () => {
  test("<MultiSelect /> without required props", () => {
    render(<MultiSelect />);
    expect(console.error).toHaveBeenCalled();
  });
});

describe("Valid <MultiSelect /> config", () => {
  test("<MultiSelect /> standard use case", async () => {
    const data = [
      { value: 1, display: "option 1" },
      { value: 2, display: "option 2" },
      { value: 3, display: "option 3" }
    ];
    const selected = [];

    const { getByTestId, getByText, getByRole, container } = render(
      <MultiSelect
        name="test"
        label="Multi Select Test"
        valueField="value"
        displayField="display"
        data={data}
        value={selected}
        onChange={onChange}
      />
    );

    const selectNode = getByTestId("multi-select");
    const selectButton = getByRole("button");
    expect(selectButton).not.toBeNull();
    expect(selectNode).not.toBeNull();

    UserEvent.click(selectButton);
    await waitForElement(() => getByText("option 1"), { container });
    const ul = getByRole("listbox");
    const itemClickable = getByText("option 1");
    UserEvent.click(itemClickable);
    expect(onChange).toHaveBeenCalled();
    expect(ul.querySelectorAll("li").length).toBe(4);
  });

  test("<MultiSelect /> outlined variant", async () => {
    const data = [
      { value: 1, display: "option 1" },
      { value: 2, display: "option 2" },
      { value: 3, display: "option 3" }
    ];
    const selected = [];

    const { getByTestId, getByText, getByRole, container } = render(
      <MultiSelect
        name="test"
        label="Multi Select Test"
        variant="outlined"
        valueField="value"
        displayField="display"
        data={data}
        value={selected}
        onChange={onChange}
      />
    );

    const selectNode = getByTestId("multi-select");
    const selectButton = getByRole("button");
    expect(selectButton).not.toBeNull();
    expect(selectNode).not.toBeNull();
    expect(selectButton.classList).toContain("MuiSelect-outlined");

    UserEvent.click(selectButton);
    await waitForElement(() => getByText("option 1"), { container });
    const ul = getByRole("listbox");
    const itemClickable = getByText("option 1");
    UserEvent.click(itemClickable);
    expect(onChange).toHaveBeenCalled();
    expect(ul.querySelectorAll("li").length).toBe(4);
  });

  test("<MultiSelect /> filled variant", async () => {
    const data = [
      { value: 1, display: "option 1" },
      { value: 2, display: "option 2" },
      { value: 3, display: "option 3" }
    ];
    const selected = [];

    const { getByTestId, getByText, getByRole, container } = render(
      <MultiSelect
        name="test"
        label="Multi Select Test"
        variant="filled"
        valueField="value"
        displayField="display"
        data={data}
        value={selected}
        onChange={onChange}
      />
    );

    const selectNode = getByTestId("multi-select");
    const selectButton = getByRole("button");
    expect(selectButton).not.toBeNull();
    expect(selectNode).not.toBeNull();
    expect(selectButton.classList).toContain("MuiSelect-filled");

    UserEvent.click(selectButton);
    await waitForElement(() => getByText("option 1"), { container });
    const ul = getByRole("listbox");
    const itemClickable = getByText("option 1");
    UserEvent.click(itemClickable);
    expect(onChange).toHaveBeenCalled();
    expect(ul.querySelectorAll("li").length).toBe(4);
  });

  test("<MultiSelect /> select all functionality", async () => {
    const data = [
      { value: 1, display: "option 1" },
      { value: 2, display: "option 2" },
      { value: 3, display: "option 3" }
    ];

    let selected = [];

    const handleChange = jest.fn(val => {
      selected = val;
    });

    const { getByTestId, getByText, getByRole, container } = render(
      <MultiSelect
        name="test"
        label="Multi Select Test"
        valueField="value"
        displayField="display"
        data={data}
        value={selected}
        onChange={handleChange}
      />
    );

    const selectNode = getByTestId("multi-select");
    const selectButton = getByRole("button");
    expect(selectButton).not.toBeNull();
    expect(selectNode).not.toBeNull();

    UserEvent.click(selectButton);
    await waitForElement(() => getByText("Select All"), { container });
    const ul = getByRole("listbox");

    const itemClickable = getByText("Select All");
    UserEvent.click(itemClickable);
    expect(ul.querySelectorAll("li").length).toBe(4);

    expect(handleChange).toHaveBeenCalled();
    expect(selected.target.value).toEqual(expect.arrayContaining([1, 2, 3]));
  });

  test("<MultiSelect /> select none functionality", async () => {
    const data = [
      { value: 1, display: "option 1" },
      { value: 2, display: "option 2" },
      { value: 3, display: "option 3" }
    ];

    let selected = [];

    const handleChange = jest.fn(val => {
      selected = val;
    });

    const { getByTestId, getByText, getByRole, container } = render(
      <MultiSelect
        name="test"
        label="Multi Select Test"
        valueField="value"
        displayField="display"
        data={data}
        value={selected}
        onChange={handleChange}
      />
    );

    const selectNode = getByTestId("multi-select");
    const selectButton = getByRole("button");
    expect(selectButton).not.toBeNull();
    expect(selectNode).not.toBeNull();

    UserEvent.click(selectButton);
    await waitForElement(() => getByText("Select All"), { container });
    const ul = getByRole("listbox");

    const itemClickable = getByText("Select None");
    UserEvent.click(itemClickable);
    expect(ul.querySelectorAll("li").length).toBe(4);

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(selected.target.value).toEqual(expect.arrayContaining([]));
  });
});
