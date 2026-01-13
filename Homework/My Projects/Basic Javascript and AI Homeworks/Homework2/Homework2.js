let yearInput = prompt("Enter a year:");
let year = Number(yearInput);

if (!year) {
  console.log("Year must be a number.");
} else if (year < 0) {
  console.log("Year cannot be negative.");
} else if (year % 1 !== 0) {
  console.log("Year must be a whole number.");
} else {
  let zodiac = (year - 4) % 12;

  if (zodiac < 0) {
    zodiac = zodiac + 12;
  }

  switch (zodiac) {
    case 0:
      console.log("Rat");
      break;
    case 1:
      console.log("Ox");
      break;
    case 2:
      console.log("Tiger");
      break;
    case 3:
      console.log("Rabbit");
      break;
    case 4:
      console.log("Dragon");
      break;
    case 5:
      console.log("Snake");
      break;
    case 6:
      console.log("Horse");
      break;
    case 7:
      console.log("Goat");
      break;
    case 8:
      console.log("Monkey");
      break;
    case 9:
      console.log("Rooster");
      break;
    case 10:
      console.log("Dog");
      break;
    case 11:
      console.log("Pig");
      break;
    default:
      console.log("Error.");
  }
}
