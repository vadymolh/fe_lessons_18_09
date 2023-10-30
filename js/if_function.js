let name_ = "username";
let NAME_ = "N";

// if (name_ == NAME_) {
//   alert("Names are equal!!!");
// } else if (name_ == "") {
//   alert("Enter your name!");
// } else {
//   alert("Not equal!");
// }

// Тернарний оператор  (умова) ?  якщо true :  якщо false
//name_ == NAME_ ? alert("Names are equal!!!") : alert("Not equal!");

let userObj = {
  _name_: name_ ? name_ : "Anonimous",
  age: 20,
};

console.log(userObj._name_);

// Нул оператор ??

let a = undefined,
  b = "Viktor";

console.log(a ?? b ?? "Guest");

/*  1 Спосіб, оголошення через декларацію Declaration Function
	function identifName(arg1, arg2, arg3=0,...){
		
		return expression
	}
*/
function printTable(a, b = 0) {
  console.log(`${a}    |     ${b}`);
}

printTable(100, 154);

/* 2. Визначення Функції як вираз Function Expression

function(arg1, arg2,... ) {
	return
}
*/

const doble = function (num) {
  return num * 2;
};

/*3. Стрілкові функції (лямбда функції)
 (arg1, arg2,...)=> expression;


 (arg1, ...) => {
	return expression
 }
*/
const arrow_doble = (num) => num * 2;

const arrow_ab = (a, b) => {
  if (a > b) {
    return b ** a;
  } else {
    return a ** b;
  }
};

// Рекурсія
function getAge() {
  let age = +prompt("Enter your age:");

  if (typeof age === "number" && age > 0 && age < 125) {
    return age;
  } else {
    console.log("Bad Age value");
    return getAge();
  }
}

//console.log(getAge());

//--------------------------------------------
// Callback функція
const doubleCall = (a, b, callback) => {
  let new_a = arrow_doble(a);
  let new_b = arrow_doble(b);
  callback(new_a, new_b);
};

doubleCall(10, 4, printTable);
