import { difference, division } from "./functions";

test("testing difference of two numbers", () => {
  expect(difference(3, 2)).toBe(1);
  expect(difference(5, 2)).not.toBe(1);
});

test("testing division of two numbers", () => {
  expect(division(2, 2)).toBe(1);
  expect(division(24, 2)).toBe(12);
  expect(division(5, 2)).not.toBe(1);
});
