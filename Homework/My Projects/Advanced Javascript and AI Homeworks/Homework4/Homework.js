function Product(name, category, hasDiscount, price) {
  this.name = name;
  this.category = category;
  this.hasDiscount = hasDiscount;
  this.price = price;
}

const products = [
  new Product("Apple", "Food", true, 10),
  new Product("Orange", "Food", false, 25),
  new Product("Eggs", "Food", true, 5),
  new Product("Umbrella", "Accessories", false, 30),
  new Product("IceCream", "Food", false, 15),
  new Product("Laptop", "Electronics", true, 800),
  new Product("TV", "Electronics", false, 400),
  new Product("Avocado", "Food", true, 3),
  new Product("Onion", "Food", false, 2),
  new Product("Earphones", "Electronics", true, 50),
  new Product("Chair", "Furniture", false, 45),
  new Product("Almonds", "Food", true, 22),
  new Product("Oven", "Electronics", false, 120),
  new Product("Table", "Furniture", true, 150),
  new Product("Ink", "Office", false, 18),
];

const priceGreaterThan20 = products.filter((product) => product.price > 20);
console.log("Products with price > 20:", priceGreaterThan20);

const discountedFoodNames = products
  .filter((product) => product.category === "Food" && product.hasDiscount)
  .map((product) => product.name);

console.log("Discounted Food products:", discountedFoodNames);

const discountedPrices = products
  .filter((product) => product.hasDiscount)
  .map((product) => product.price);

console.log("Prices of discounted products:", discountedPrices);

const vowels = ["A", "E", "I", "O", "U"];

const vowelProducts = products
  .filter(
    (product) =>
      vowels.includes(product.name[0].toUpperCase()) && !product.hasDiscount,
  )
  .map((product) => ({
    name: product.name,
    price: product.price,
  }));

console.log("Vowel products without discount:", vowelProducts);

function showResults() {
  document.getElementById("greaterThan20").innerHTML = priceGreaterThan20
    .map((p) => p.name + " - $" + p.price)
    .join("<br>");

  document.getElementById("discountedFood").innerHTML =
    discountedFoodNames.join("<br>");

  document.getElementById("discountedPrices").innerHTML =
    discountedPrices.join("<br>");

  document.getElementById("vowelProducts").innerHTML = vowelProducts
    .map((p) => p.name + " - $" + p.price)
    .join("<br>");
}
