//let today = Date.now();
let today = new Date();

// Методи дістати дату
console.log(today.getUTCHours());
console.log(today.getUTCMinutes());

// Методи встановити дату
console.group("set date");
today.setUTCHours(3);
today.setUTCMinutes(56);

// Додати кілька годин до існуючого часу
today.setUTCHours(today.getUTCHours() + 7);

console.log(today.getUTCDay());
console.log(today.getUTCHours());
console.log(today.getUTCMinutes());
console.groupEnd("set date");

let date2 = new Date(2000, 12, 31);
console.log(date2);

//  Формат рядка повинен бути: YYYY-MM-DDTHH:mm:ss.sssZ, де:
// let date2 = new Date("2000-12-31");

//  Метод parse
let s = "2012-01-26T13:51:50.417";

let dateFromString = Date.parse(s);
console.log(dateFromString);
