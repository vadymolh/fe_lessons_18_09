//$("h1").hide();

//$("h2#caption1").hide();

console.log(document.querySelector(".caption2"));
console.log($("h2.caption2"));

//$(selector).css(propertyName, value);
$("p span").css("color", "#fff");

$("span").css({
  color: "red",
  background: "orange",
});

$("ul#list li:first").css("color", "#4d4");
$("ul#list li:last").css("color", "#3d3");
$("ul#list li:even").css("background", "yellow");
$("ul#list li:odd").css("background", "orange");

$("ul#list li:nth-child(3)").css("background", "white");

//$(":button").hide();
//$(":submit").hide();

$('a[href="http://google.com"]').css("color", "green");

//   Маніпуляції з DOM
let par2 = $("#par2");
$("#par2").addClass("par2-newcolor");
$("#par2").removeClass("par2-newcolor");

$(":submit").click(function (e) {
  e.preventDefault();
  par2.toggleClass("par2-newcolor");
});

$(".newtext").html("<h2>NEW Article here</h2>");
$(".newtext h2").text("Text!!!!!!!!!!!!!!");

$("ul").append("<li>Generated new 1</li>");
$("ul").prepend("<li>Generated new 2</li>");

$("ul").before("<h2>Generated Title </h2>");
$("ul").after("<h2>Generated Title </h2>");

$("a").attr("target", "_blank");

//$("ul").empty();
//$("ul").detach(); // видалити елемент

///////////////////////------------ Events in jQuery

$(document).ready(function () {
  console.log("Document ready");
  let btn = $("#coords");
  console.log(btn);
  btn.on("mousemove", function (e) {
    console.log(e);
    $(".coords").html("Координати Х:" + e.clientX + "  Y:" + e.clientY);
  });

  // dynamic events
  // $(staticAncestors).on(eventName, dynamicChild, function() {});

  $("ul").on("click", "li", function (e) {
    console.log(e.target);
  });

  $("ul").append("<li>Generated new 1</li>");
  $("ul").prepend("<li>Generated new 2</li>");
});
