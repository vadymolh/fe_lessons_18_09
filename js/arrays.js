// Масиви

let arr = [1, 2, "Name1", "Name2", true]; // оголошення
let animals = new Array("dog", "eagle", "monkey", "fish"); // оголошення

console.log(arr);
console.log(arr[3]);
//arr[1002] = "Viktoria";
console.log("Довжина масиву  - ", arr.length);

console.log(animals);

let x = 0;
console.log("x=", x);
console.log("Перевірка чи х є масивом", Array.isArray(x));

/* Метод arr1.reduce(function(acumulator, item, index, array),
initialAcc) - застосовує функцію до кожного елементу масиву та
накопичує результат в acumulator який передається 
від ітерації до ітерації. Повертає накопичене в ньому значення.
*/

let dobArray = [9, 6, 2, 1, 5];
let result = 0;

result = dobArray.reduce((acc, x) => {
  return acc * x; // 54*2
}, 1);

console.log("Добуток буде: ", result);

result = dobArray.reduce((acc, x) => {
  return acc + x;
});
console.log("Сума буде: ", result);

/* Метод arr1.map(function(item, index, array)) повертає змінену 
копію по одному елементу в новий масив, застосовуючи функцію до 
кожного елемента*/

let resultArray = animals.map((one_animal) => one_animal.length);

console.log("Довжини назв тваринок:", resultArray);

// Метод arr1.filter(function(item, index, array, thisArg)) - створює
// новий масив елементи якого після перевірки функцією повертають true

// Всі числа більше 5
console.log(dobArray.filter((x) => (x > 5 ? true : false)));

console.log(
  dobArray.filter((x) => {
    if (x > 5) {
      return true;
    } else {
      return false;
    }
  })
);

console.log(dobArray.filter((x) => x > 5));

// Маніпуляції з елементами масиву - видалення та додавання нових

//  [1,2,3,4,5,6,7,9,10]

//
let addArray = [1, 2, 3, 4, 5, 6, 7, 9, 10];
addArray.push("End item"); // Додати елемент в кінець         +++++++++++++
console.log(addArray);

addArray.unshift("Start item"); // Додати елемент на початок  -------------
console.log(addArray);

console.log(addArray.pop()); // Дістати з кінця масиву елемент  ++++++++++
console.log(addArray);

console.log(addArray.shift()); // Дістати з початку масиву елемент -------
console.log(addArray);

delete addArray[7];
console.log("Після видалення", addArray);

console.log(addArray.reverse()); // перевертає масив

let arr2 = ["a", "b"];

console.log(addArray.concat(arr2, animals)); //  concat Об'єднання масивів

let arr3 = [1, 2, 3, 4, ["a", "b", "obj1", "obj2", {}]];

console.group("flat");
console.log(arr3.length);
console.log(arr3);
console.log(arr3.flat(Infinity)); // flat позбувається вкладень на вказану глибину
console.log(arr3.flat(Infinity).length);
console.groupEnd();

console.log(JSON.stringify(arr3));

// Обробка стрічки в масив

let s = "Vinnytsa,Zutomyr,Chernigiv";
let arr4 = s.split(",");

console.log(s.split(",")); // поверне масив

// Перебір масива
for (item of arr4) {
  console.log(item);
  if (item === "Zutomyr") {
    continue;
  }
  document.write(`<h2>${item}</h2>`);
}

// Через цикл for класичний
console.log("+++++++++++++++++++++++++++++++++");
for (let i = 0; i < arr4.length; i++) {
  console.log(arr4[i]);
}
