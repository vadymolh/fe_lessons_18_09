// Console

console.log("Hello");
//alert("world!");

// console.group("Warning messages");
// console.warn("Warn!!!");
// console.error("This is ERROR!!!");
// console.groupEnd();

// console.info("Text");

// ____________Змінні
// let  var

let a = "a"; // оголошення
let _name = "Kolya"; // оголошення + Ініціалізація

var b = "b";

//____різниця між let та var

// function foo() {
//   if (true) {
//     var abc = "Im alive abc";
//     let a2 = "Im alive a2";
//   }
//   function inside_foo() {
//     console.log(abc);
//     console.log(a2);
//   }
//   inside_foo();
// }
//foo();

//console.log(this.a);  //не потрапляє до атрибутів документа
//console.log(this.b);  // потрапляє до атрибутів документа

//____ правила іменування змінних

//1 не називати ключовими слова
// await, break, case, catch, class, const, continue, debugger, default, delete, do, else,
// enum, export, extends, false, finally, for, function, if, import, in, instanceof, new, null,
// return, super, switch, this, throw, true, try, typeof, var, void, while, with, yield

//2 не можна починати ім'я з числа або знака ? ! + -

//3 не можна користатися пробілами у назві

// let userAgeOn = 16,
//   c1 = 1,
//   c2 = 2,
//   c3 = 3;
// userAgeOn = 10; //присвоєння

// _____ Константи

// const year = 1999;
// //year = 2000;

// const years = [1800, 1700];

// console.log(years);
// years[0] = 1990;
// console.log(years);

// _______ Типи даних
// Primitives - примітивні типи даних є незмінюваними або Imutable
/*
    String
    Number      (max 2^1024  або Infinity)
    Boolean
    Undefined
    Null
    BigInt
    Symbol
*/

// Objects
// Array - упорядкований обєкт

// let userObj = {
//   _name_: "Sergiy",
//   age: 20,
// };

//c3 = 100;
//_name = "Vira";

// Слабка типізація, динамічна типізація

// _name = 112; // був стрічкою, став числом
// console.log(_name);

// console.group("weak types");
// console.log(_name + "500");
// console.log(_name + +"500");
// console.log(_name + Number("500"));
// console.groupEnd();

// console.log(12 / "text"); // NaN

//__ String

// let s = "Oleg'O'ryan";
// s = "Oleg'O'ryan";
// s = `Oleg ${2 + 20}  ${s + 100}`;

// console.log(s);

// ____ Boolean
//    true (1)              false (0)

// BigInt - великі числа

// let bigNum = 309n;
// let bigNull = 0n;

// console.log(bigNull - bigNum); // не використовуються з іншими типами в діях

//---------------------------------------
//     Undefined
//     Null

// let nothing = null;
// let superNothing = undefined;

// console.log(superNothing);

//---------------------------------------

// Оператор typeof
// let bigNum = 309n;
// let nothing = null;

// let s = "Oleg'O'ryan";

// console.log(typeof bigNum);
// console.log(typeof nothing);

// console.log(typeof s);

// Математичні операції  (+ - * /  %  **) - бінарні
//                       (+ - ++ -- )     - унарні

// let x1 = 3;
// let y1 = 8;

// x1 * y1;

// -x1;

// console.log(y1 % x1); // остача від ділення
// console.log(y1 % 2);

// console.log("Піднесення до степеня 8^2: ", y1 ** 2);

// -------Інкремент
// x1++; // x1 = x1+1;

// console.group("Increment difference");
// let d = ++y1; //9
// console.log("Префіксний d ", d);
// console.log("Префіксний y1 ", y1);

// d = y1++;
// console.log("Постфіксний  d ", d);
// console.log("Постфіксний y1 ", y1);

// console.groupEnd();

// // -------Декремент
// x1--;
// --y1;

//---------------------------------
// Операції порівняння  ==   ===   !=   !==  > <  >=  <=
// let k = 25;
// let j = "25";

// let result = k == j; //   true   бо == це не строге порівняння
// result = k === j; //   false,     === це строге порівняння, з врахуванням типів даних

//  логічні операції
//  &&   ||      !      в JS
// and   or      not    в інших мовах

//  &&  (логічне множення)
// true && true; // true
// true && false; // false
// false && true; // false
// false && false; // false

// //  ||  (логічне додавання)
// true || true; // true
// true || false; // true
// false || true; // true
// false || false; // false

// let age = 55;

// //                true      true
// let humanLogic = a > 50 && a < 60; // true
// !humanLogic; // false

// Присвоєння

let t = 10;

t += 2; // t = t+2
t -= 2; // t = t-2

t /= 2; // t = t / 2
t *= 2; // t = t * 2

t %= 2; // t = t % 2
