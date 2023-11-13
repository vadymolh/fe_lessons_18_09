// Створення простої Kyки

// document.cookie = "name=Vadym;";
// document.cookie = "id=632;";

// let cookies = document.cookie.split(";");

// Як дістати кукі
// for (let i = 0; i < cookies.length; i++) {
//   let part = cookies[i].split("="),
//     key = part[0],
//     value = part[1];
//   document.write("Ключ Куки: ", key, "<br/>");
//   document.write("Значення Куки: ", value, "<br/><br/>");
// }

// console.dir(document);

// Час життя куки expires - задавати стрічкою у форматі Дати, max-age - в секундах

let expDate = new Date();
expDate.setHours(expDate.getHours() + 3);
console.log(expDate);

document.cookie = "username=Newbie;Expires=" + expDate.toUTCString(); // або через max-age

//------------------------- Web Storage --------------------------------------

// LocalStorage

localStorage.setItem("email", "some_src@gmail.com");

let email = localStorage.getItem("email");

console.log(email);
localStorage.clear();

// Запис обєкта в LocalStorage

let user = { name: "Stepan", age: 13, adult: false };

// Перетворення обєкта у стрічку
let userString = JSON.stringify(user);

localStorage.setItem("user", userString);
let storedData = localStorage.getItem("user");

let retrivetData = JSON.parse(storedData);
console.log("Локальне сховище: ", retrivetData);

// sessionStorage як і LocalStorage але витирається при закінченні сесії
