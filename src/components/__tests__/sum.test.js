import { sum } from "../sum";
// Test case
test("adds 1 + 2 to equal 3", () => {
  const result = sum(1, 2);
  // Assertion
  expect(result).toBe(3);
});
