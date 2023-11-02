// let car = {
//   brand: "Opel",
//   id: 123399,
//   horsePower: "300",
// };

// console.dir(car);
// console.log(car.toString());

console.log(this);

// ---------------------  Constructor Function  ----------------------

// function Person(firstName, lastName, age = 0, birthDate = "2005-1-1") {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.age = age;
//   this.birthDate = new Date(birthDate);
//   this.getFullName = function () {
//     return `${this.firstName} ${this.lastName}`;
//   };
//   this.getYear = function () {
//     return this.birthDate.getFullYear();
//   };
// }

// const user1 = new Person("Vanya", "Oleksiyuk", 19);
// const user2 = new Person("Lara", "Oak", 22);

// console.log(user1.getFullName());
// console.log(user2.getFullName());

// console.dir(user1);
// user1.birthDate = new Date("2004-6-14");
// console.log(user1.getYear());

// ---------------------- Prototype ----------------------------------------

// function Person(firstName, lastName, age = 0, birthDate = "2005-1-1") {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.age = age;
//   this.birthDate = new Date(birthDate);
// }

// Person.prototype.getFullName = function () {
//   return `${this.firstName} ${this.lastName}`;
// };

// Object.prototype.sayHello = function () {
//   console.log("Hello!");
// };

// const user2 = new Person("Lara", "Oak", 22);
// console.dir(user2);
// user2.sayHello();

class Person {
  constructor(firstName, lastName, age = 0, birthDate = "2005-1-1") {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.birthDate = new Date(birthDate);
    this.isAsleep = true;
  }
  getYear() {
    return this.birthDate.getFullYear();
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const user1 = new Person("Vanya", "Oleksiyuk", 19);
const user2 = new Person("Lara", "Oak", 22);

console.log(user1.getFullName());
console.log(user2.getFullName());
