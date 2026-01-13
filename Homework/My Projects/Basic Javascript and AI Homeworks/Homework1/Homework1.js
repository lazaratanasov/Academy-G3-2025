let pricePerPhone = 119.95;
let numberOfPhones = 30;
let taxRate = 0.05;

if (pricePerPhone < 0) {
  console.log("Error: price cannot be negative.");
} else if (numberOfPhones < 0) {
  console.log("Error: number of phones cannot be negative.");
} else if (taxRate < 0) {
  console.log("Error: tax rate cannot be negative.");
} else if (numberOfPhones === 0) {
  console.log("Total price: $0.00");
} else {
  let totalPrice = pricePerPhone * numberOfPhones;
  let taxAmount = totalPrice * taxRate;
  let finalPrice = totalPrice + taxAmount;

  console.log("Total without tax: $" + totalPrice.toFixed(2));
  console.log("Tax (5%): $" + taxAmount.toFixed(2));
  console.log("Final price: $" + finalPrice.toFixed(2));
}
