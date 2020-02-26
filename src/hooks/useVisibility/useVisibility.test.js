import { renderHook, act } from "@testing-library/react-hooks";
import useVisibility from "./useVisibility";

test("useVisibility() returns expected results", () => {
  const result = renderHook(() => useVisibility(true)).result;

  const [visibility, handleVisibility] = result.current;

  expect(visibility).toBe(true);

  act(() => {
    handleVisibility();
  });

  expect(result.current[0]).toBe(false);

  act(() => {
    handleVisibility(false);
  });

  expect(result.current[0]).toBe(false);
});
