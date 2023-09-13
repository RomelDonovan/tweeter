$(document).ready(function() {
  $("#tweet-text").on("input", function() {

    const value = $(this).val();
    const remaining = 140 - value.length;
    const counter = $(this).parent().find(".counter");

    if (remaining < 0) {
      counter.text(remaining).css("color", "red");
    } else {
      counter.text(remaining).css("color", "gray");
    }
  });
});