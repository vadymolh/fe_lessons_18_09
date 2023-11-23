const getUsers = (url) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4 && request.status === 200) {
        //console.log(request);
        let data = JSON.parse(request.responseText);
        resolve(data);
      } else if (request.readyState === 4) {
        reject(`Some Error, status code is: ${request.status}`);
      }
      console.log(request.readyState);
    });

    request.open("GET", url);
    request.send();
  });
};

let url = "https://jsonplaceholder.typicode.com/users/1";
let todoUrl = "https://jsonplaceholder.typicode.com/todos/1";
//------------------------- .then функціонал, вирішення промісу

//   В .then обробляєм успішне виконання і помилку одночасно, використовуючи дві ф-ї

// getUsers(url).then(
//   (data) => {
//     console.log("Success! Promise resolved");
//     console.log(data);
//   },
//   (error) => {
//     console.log(error);
//   }
// );

// Функція обробки помилок catch
// getUsers(url)
//   .then((data) => {
//     console.log("Success! Promise resolved");
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Chaining вирішення промісів ланцюжком
getUsers(url)
  .then((data) => {
    console.log("Success! Promise resolved");
    console.log(data);
    return getUsers(todoUrl);
  })
  .then((task) => {
    console.log(task);
    return JSON.stringify(task);
  })
  .then((str) => {
    console.log("My todo List:", str);
  })
  .catch((err) => {
    console.log(err);
  });
