// Part 1
let headers = document.querySelectorAll("h1, h2, h3, h4, h5, h6");

let paragraphs = document.querySelectorAll("p");

headers.forEach((header) => {
  header.textContent = "This header was changed with JavaScript!";
});

paragraphs.forEach((paragraph) => {
  paragraph.textContent = "This paragraph was changed using JavaScript!";
});

// Part 2
let numbers = [2, 4, 5];

let numbersUl = document.createElement("ul");
document.body.appendChild(numbersUl);

let sum = 0;
let equation = "";

for (let i = 0; i < numbers.length; i++) {
  let li = document.createElement("li");
  li.textContent = numbers[i];
  numbersUl.appendChild(li);

  sum += numbers[i];
  equation += numbers[i];

  if (i < numbers.length - 1) {
    equation += " + ";
  }
}

let result = document.createElement("p");
result.textContent = `${equation} = ${sum}`;
document.body.appendChild(result);

// Part 3
let recipeName = prompt("Enter recipe name:");
let ingredientCount = Number(prompt("How many ingredients?"));

let title = document.createElement("h1");
title.textContent = recipeName || "My Recipe";
document.body.appendChild(title);

let ingredientsUl = document.createElement("ul");

if (isNaN(ingredientCount) || ingredientCount <= 0) {
  alert("Please enter a valid number of ingredients.");
} else {
  for (let i = 0; i < ingredientCount; i++) {
    let ingredient = prompt(`Enter ingredient ${i + 1}:`);
    let li = document.createElement("li");
    li.textContent = ingredient;
    ingredientsUl.appendChild(li);
  }

  document.body.appendChild(ingredientsUl);
}
