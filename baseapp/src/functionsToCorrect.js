//Function 3
//Протестируйте всевозможные сценарии и исправьте функцию ( если не получится- подсказка будет в дискорде)
export function TimeOfDay() {
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
}

//Function 4
/* В этой функции есть пара ошибок. Протестируйте функцию и исправьте недочеты.
Убедитесь что вы получили именно тот список проверяя уникальный предмет из списка 
https://jestjs.io/docs/using-matchers#arrays-and-iterables */
export function getShoppingListByNum(listNum) {
  const shoppingList1 = [
    "diapers",
    "kleenex",
    "trash bags",
    "paper towels",
    "milk",
  ];

  const shoppingList2 = ["tomatoes", "bread", "carrot", "paper towels", "milk"];

  const shoppingList3 = ["porridge", "milk", "cheese", "newspaper", "potatoes"];

  switch (listNum) {
    case 0:
      console.log(shoppingList1);
      break;
    case 1:
      console.log(shoppingList2);
      break;
    case 2:
      console.log(shoppingList3);
      break;
    default:
      console.log("Hello!");
  }

  throw new Error("you are using the wrong JDK!");
}

