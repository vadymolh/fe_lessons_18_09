// AJAX - async JS and XML (JSON)

// $("#result").load("js/text.html", function () {});

// $("#result").load(
//   "arrays.html .container",
//   function (response, status, request) {
//     if (status == "success") {
//       alert("OK response " + request.statusText);
//     } else if (status == "error") {
//       $("#result").html("<h2>Something goes wrong...</h2>");
//     }
//   }
// );

// $.get("js/text.html", function (data) {
//   $("#result").html(data);
// });

$.ajax({
  type: "GET",
  url: "https://jsonplaceholder.typicode.com/posts",
  datatype: "json",
}).done(function (data) {
  let userData = data.filter((x) => x.userId == 5);

  console.log(userData);
  $.map(userData, function (post, i) {
    $("#result").append(
      "<h3>" + post.title + "</h3>" + "<p>" + post.body + "</p>"
    );
  });
});

////----------------------POST request----------------------------
$("#postForm").submit(function (e) {
  e.preventDefault();
  let title = $("#title").val(),
    body = $("#body").val();
  url = $(this).attr("action");

  $.post(url, { title: title, body: body }).done(function (data) {
    console.log("POST ");
    console.log(data);
  });
});

console.log("Ajax script");

// JSON format
let user1 = {
  user: "Nick",
  age: 22,
  isSmart: true,
  pets: ["Cat", "Dog"],
};

let payload = JSON.stringify(user1);
console.log(payload);
