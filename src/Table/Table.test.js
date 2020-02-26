import React from "react";
import {
  render,
  cleanup,
  fireEvent,
  waitForElement
} from "@testing-library/react";
import UserEvent from "@testing-library/user-event";

afterEach(() => {
  cleanup();
  onSubmit.mockClear();
  onChange.mockClear();
});

const onSubmit = jest.fn();
const onChange = jest.fn();

test("<MultiSelect /> with required props", async () => {});
