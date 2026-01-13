// Part 1
function tellStory(arr) {
  let name = arr[0];
  let mood = arr[1];
  let activity = arr[2];

  let story =
    "This is " +
    name +
    ". " +
    name +
    " is a nice person. Today they are " +
    mood +
    ". They are " +
    activity +
    " all day. The end.";
  return story;
}

console.log(tellStory(["Lazar", "happy", "coding"]));

// Part 2
function validateNumber(num) {
  if (typeof num !== "number" || isNaN(num)) {
    return false;
  }
  return true;
}

function sumArray(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (!validateNumber(arr[i])) {
      return "Error: Invalid number in array";
    }
    sum = sum + arr[i];
  }

  return sum;
}

console.log(sumArray([1, 2, 3, 4, 5]));
console.log(sumArray([1, "a", 3, 4, 5]));

// Part 3
function combineStrings(arr) {
  let result = "";

  for (let i = 0; i < arr.length; i++) {
    result = result + arr[i];

    if (i < arr.length - 1) {
      result = result + " ";
    }
  }

  return result;
}

console.log(
  combineStrings(["Hello", "there", "students", "of", "AvengaAcademy", "!"])
);

// Part 4
let output = "";

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    output = output + i + "\n";
  } else {
    output = output + i + " ";
  }
}

console.log(output);

// Part 5
function maxMinSum(arr) {
  let max = null;
  let min = null;

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number" || isNaN(arr[i])) {
      continue;
    }

    if (max === null || arr[i] > max) {
      max = arr[i];
    }

    if (min === null || arr[i] < min) {
      min = arr[i];
    }
  }

  if (max === null || min === null) {
    return "No valid numbers in array";
  }

  return "Max: " + max + ", Min: " + min + ", Sum: " + (max + min);
}

console.log(maxMinSum([3, 5, 6, 8, 11]));
console.log(maxMinSum([3, "a", 6, null, 11]));

// Part 6
function fullNames(firstNames, lastNames) {
  let result = [];

  let length = firstNames.length;
  if (lastNames.length < length) {
    length = lastNames.length;
  }

  for (let i = 0; i < length; i++) {
    result.push(i + 1 + ". " + firstNames[i] + " " + lastNames[i]);
  }

  return result;
}

let first = ["Lazar", "Avenga"];
let last = ["Atanasov", "Academy"];

console.log(fullNames(first, last));
