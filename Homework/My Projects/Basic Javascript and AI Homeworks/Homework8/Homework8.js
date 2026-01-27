$(document).ready(function () {
  function greet() {
    let name = $("#nameInput").val().trim();

    if (name === "") {
      $("#greetResult").text("Please enter a name.");
      return;
    }

    $("#greetResult").text(`Hello there ${name}!`);
  }

  $("#greetBtn").click(greet);

  $("#nameInput").on("keypress", function (e) {
    if (e.key === "Enter") {
      greet();
    }
  });

  function generateHeader() {
    let text = $("#headerText").val().trim();
    let color = $("#headerColor").val().trim();

    if (text === "") {
      $("#msg").text("Error: Header text cannot be empty!");
      return;
    }

    let test = $("<div></div>").css("color", color);
    if (
      test.css("color") === "rgb(0, 0, 0)" &&
      color.toLowerCase() !== "black"
    ) {
      $("#msg").text("Error: Invalid color!");
      return;
    }

    $("#msg").text("");
    $("<h1></h1>").text(text).css("color", color).appendTo("#headersContainer");

    $("#headerText").val("");
    $("#headerColor").val("");
  }

  $("#genBtn").click(generateHeader);

  $("#headerText, #headerColor").on("keypress", function (e) {
    if (e.which === 13) {
      generateHeader();
    }
  });

  $("#headerText, #headerColor").on("input", function () {
    $("#msg").text("");
  });
});
