// ... spread оператор
// Означає розпаковку
let c1 = ["Berlin", "Dnipro", "Warsaw"];
let c2 = ["Chernigiv", "Odessa", "Lviv"];

// розпаковуємо два масива в один масив
let c3 = [...c1, "Abu dabi", ...c2];
console.log(c3);

// розпаковуємо масив у змінні
let [city1, city2, city3, ...cityArr] = c3;
console.log(city1);
console.log(city2);
console.log(city3);
console.log(cityArr);

// Задання значення по дефолту
let [cit1, cit2, cit3, cit4 = "Kyiv", ...citArr] = c3;
console.log(cit4);
//console.log(citArr);

// -------------------- ...spread з Обєктами

let person = {
  pname: "Vitalyi",
  age: 19,
};

let worker = {
  salary: 12000,
  position: "Manager",
  age: 27,
  linked: [{ name: "Wanda" }, { name: "bob" }],
};

// обєднання обєктів
let employee = { ...person, ...worker };
console.log(employee);

// присвоєння змінних з обєкта

let { salary: s, position: p, age: age } = employee;
console.group("Розбір обєкта на змінні");
console.log(employee);
console.log("Salary: ", s);
console.log("Position: ", p);
console.log("Age :", age);
console.groupEnd();

// Використання у функціях spread
function calc(x, y, w) {
  return x * y * w;
}

let arr = [1, 3, 5];
console.group("Функції зі спред оператором");
console.log(calc(...arr));

// ... rest оператор
// Використання у функціях

function iLove(city, ...cities) {
  console.log("I love ", city, "!");
  if (cities) {
    for (c of cities) {
      console.log("I love ", c, "!");
    }
  }
}

iLove("Kyiv", "Odesa", "Kharkiv", "Mykolayv");
