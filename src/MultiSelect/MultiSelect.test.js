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
  onSubmit.mockClear();
  onChange.mockClear();
});

const onSubmit = jest.fn();
const onChange = jest.fn();

test("<MultiSelect /> with required props", async () => {
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
