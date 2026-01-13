// Part 1
function printType(value) {
  let type = typeof value;

  if (type === "object" && value === null) {
    type = "null";
  }

  console.log(type);
  return type;
}

printType({ name: "Lazar" });
printType(true);
printType(42);
printType("hello");
printType(undefined);

// Part 2
function dogAge(humanYears) {
  return humanYears * 7;
}

function humanAge(dogYears) {
  return dogYears / 7;
}

console.log("Dog age:", dogAge(5));
console.log("Human age:", humanAge(28));

// Part 3
let accountBalance = 1500;

function atmWithdraw(amount) {
  if (isNaN(amount) || amount <= 0) {
    return "Invalid amount";
  }

  if (amount > accountBalance) {
    return "Not enough money";
  }

  accountBalance = accountBalance - amount;
  return "Withdrawn: $" + amount + ", Money left: $" + accountBalance;
}

let userInput = prompt("Enter amount to withdraw:");
let requestedAmount = Number(userInput);

console.log(atmWithdraw(requestedAmount));
