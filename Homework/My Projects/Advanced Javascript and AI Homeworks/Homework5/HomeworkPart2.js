const button = document.getElementById("loadUserBtn");
const tableBody = document.querySelector("#userTable tbody");

button.addEventListener("click", getUser);

async function getUser() {
  tableBody.innerHTML = "";

  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1",
    );

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const user = await response.json();

    addRow("Id", user.id);
    addRow("Name", user.name);
    addRow("Username", user.username);
    addRow("Email", user.email);

    addRow("Street", user.address.street);
    addRow("Suite", user.address.suite);
    addRow("City", user.address.city);
    addRow("Zipcode", user.address.zipcode);
    addRow("Latitude", user.address.geo.lat);
    addRow("Longitude", user.address.geo.lng);

    addRow("Phone", user.phone);
    addRow("Website", user.website);

    addRow("Company Name", user.company.name);
    addRow("Company Catch Phrase", user.company.catchPhrase);
    addRow("Company BS", user.company.bs);
  } catch (error) {
    console.error("Error:", error);
    addRow("Error", error.message);
  }
}

function addRow(property, value) {
  const tr = document.createElement("tr");

  const td1 = document.createElement("td");
  td1.textContent = property;

  const td2 = document.createElement("td");
  td2.textContent = value;

  tr.appendChild(td1);
  tr.appendChild(td2);

  tableBody.appendChild(tr);
}
