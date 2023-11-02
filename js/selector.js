// ----------------- Element selectors ---------------------------

let form_ = document.querySelector("#my-form");
document.getElementById("my-form");

console.group("nodeList");
console.log(document.querySelectorAll("label"));
// Loop forEach in NodeList
document.querySelectorAll("label").forEach((item) => console.log(item));
console.groupEnd();

console.group("HTMLCollection");
let items_1 = document.getElementsByClassName("item");
console.dir(items_1);

// Перетворюємо колекцію в масив
let arrOfItems = Array.from(items_1);
console.dir(arrOfItems);
console.groupEnd();

console.log(form_);
console.dir(form_);

// ----------------------------- relative Navigation --------------------------
let ul_items = document.querySelector(".items");
// console.dir(ul_items);

// // Зміна html всього тегу
// //ul_items.outerHTML = "<p>Virus ATTACK!</p>";

// // Зміна html всередині тегу (обєкту)
// //ul_items.innerHTML = "<li>Virus ATTACK!</li>";

// ul_items.children[1].textContent = "Це другий елемент";
// ul_items.children[1].style.background = "#ff4433";

// ul_items.lastElementChild.remove();
// ul_items.firstElementChild.remove();

let btn = document.querySelector(".btn");
let nameInput = document.querySelector("#name");
let emailInput = document.querySelector("#email");
let msg = document.querySelector(".msg");

btn.addEventListener("click", (event) => {
  event.preventDefault();
  console.log(event.target.className);
  let emailInput = document.querySelector("#email");
  console.log(typeof nameInput.value);
  if (nameInput.value === "" || emailInput.value === "") {
    msg.classList.add("error");
    msg.innerHTML = "There are empty fields! Please fill each one";
    return;
  }

  // Створення елементів
  let li_ = document.createElement("li");
  li_.className = "item";
  li_.textContent = `${nameInput.value}  email: ${emailInput.value}`;
  ul_items.appendChild(li_);
});

// 1 === "1"   false   - строге
// 1 == "1"    true    - гнучке
