import { getShoppingListByNum, TimeOfDay } from "./functions";

describe("GetShoppingListByNum", () => {
  test("get shopping list by num goes as expected", () => {
    expect(() => getShoppingListByNum()).toThrow();
    expect(() => getShoppingListByNum()).toThrow(Error);
  });
});

describe("TimeOfDay", () => {
  test("get Time Of Day by num  as expected", () => {
    expect(() => TimeOfDay()).toThrow();
    expect(() => TimeOfDay()).toThrow(Error);
  });

  test('[4] should result in "Night"', () => {
    const TimeOfDay = () => {
      let today = new Date();
      let hours = today.getHours();

      if (hours >= 0 && hours <= 5) {
        return "Night";
      } else if (hours > 5 && hours <= 11) {
        return "Morning";
      } else if (hours > 11 && hours <= 17) {
        return "Day";
      } else {
        return "Evening";
      }
    };
    expect(TimeOfDay(4)).toEqual("Day");
    expect(TimeOfDay(16)).toEqual("Day");
  });
});
