$(document).ready(function () {
  $("#btn-f-out").click(function () {
    $(".box").fadeOut(1000, "swing", function () {
      $("#btn-f-out").text("animeDone");
    });
  });

  $("#btn-f-in").click(function (e) {
    e.preventDefault();
    $(".box").fadeIn(1000, function () {
      $("#btn-f-out").text("Fade Out");
    });
  });

  $("#btn-f-toggle").click(function (e) {
    $(".box").fadeToggle(500, "linear");
  });

  $("#btn-s-up").click(function (e) {
    $(".box").slideUp(300, "linear");
  });

  $("#btn-s-down").click(function (e) {
    $(".box").slideDown(300, "linear");
  });

  $("#btn-s-toggle").click(function (e) {
    $(".box").slideToggle(400, "linear");
  });

  $("#btn-stop").click(function (e) {
    $(".box").stop();
  });

  // positition and size Animation
  $("#btn-move-left").click(function (e) {
    $(".animated").animate({
      left: 500,
      height: "200px",
      width: "200px",
      opacity: 0.4,
    });
  });

  $("#btn-move-right").click(function (e) {
    $(".animated").animate({
      left: 0,
      height: "100px",
      width: "100px",
      opacity: 1,
    });
  });

  $("#btn-move-around").click(function () {
    let box2 = $(".animated");

    box2.fadeOut().fadeIn().delay(1000);
    box2.animate({
      left: 200,
    });
    box2.animate({
      top: "100px",
    });
    box2.animate({ left: 0 }).animate({ top: 0 });
  });
});
