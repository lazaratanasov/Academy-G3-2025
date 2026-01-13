// Part 1
let animalName = prompt("Enter animal name:");
let animalKind = prompt("Enter animal kind:");
let animalMessage = prompt("What should the animal say?");

let animal = {
  name: animalName,
  kind: animalKind,
  speak: function (message) {
    console.log(this.name + " says: '" + message + "'");
  },
};

animal.speak(animalMessage);

// Part 2
let titleInput = prompt("Enter book title:");
let authorInput = prompt("Enter author:");
let statusInput = prompt("Have you read the book? (yes/no)");

let readingStatus;

if (statusInput === "yes") {
  readingStatus = true;
} else {
  readingStatus = false;
}

let book = {
  title: titleInput,
  author: authorInput,
  readingStatus: readingStatus,
  getInfo: function () {
    if (this.readingStatus === true) {
      return "Already read '" + this.title + "' by " + this.author + ".";
    } else {
      return (
        "You still need to read '" + this.title + "' by " + this.author + "."
      );
    }
  },
};

console.log(book.getInfo());
