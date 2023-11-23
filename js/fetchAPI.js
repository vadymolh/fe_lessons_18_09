let url = "https://jsonplaceholder.typicode.com/users/1";
let todoUrl = "https://jsonplaceholder.typicode.com/todos/1";
let post = "https://jsonplaceholder.typicode.com/posts";
// fetch повертає об'єкт Promise

// GET request
fetch(url)
  .then((response) => {
    console.log(response);
    if (!response.ok) {
      console.log("Error occured! - ", response.status);
    }
    return response.json(); //перетворюємо дані відповіді в JSON обєкт
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log("Error occured! - ", err);
  });

//POST request
fetch(post, {
  method: "POST",
  body: { id: 800, userId: 1, title: "sunt aut f", body: "TExt text text" },
}).then((response) => {
  console.log("POST response ", response.text());
});

// async await синтаксис
async function getUsers() {
  // дії що довго тривають
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

console.log("ASYNC AWAIT: ", getUsers());
getUsers().then((data) => console.log("Async data - ", data));
