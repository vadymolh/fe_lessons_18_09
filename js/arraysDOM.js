$(document).ready(function () {
  //   $("#add-item").keyup(function (e) {
  //     let code = e.which;
  //     console.log(code);

  //     //Enter have code
  //     if (code == 13) {
  //       if (e.target.value.includes("@gmail.com")) {
  //         $("ul#lists").append("<li>" + e.target.value + "</li>");
  //         e.target.value = "";
  //       }
  //     }
  //   });

  let users = ["Katryn", "Viko", "Vuchich", "Kosyn"];

  $.each(users, function (i, val) {
    //console.log(val);
    $("#users").append("<li>" + val + "</li>");
  });

  let newArr = $("ul#lists li").toArray();
  console.log(newArr);
  $.each(newArr, function (i, value) {
    console.log(value.innerHTML);
  });
});
