const button = document.getElementById("loadPlanetsBtn");
const tableBody = document.getElementById("planetsTableBody");

button.addEventListener("click", getPlanets);

async function getPlanets() {
  tableBody.innerHTML = "";

  try {
    const response = await fetch("https://swapi.py4e.com/api/planets/?page=1");

    if (!response.ok) {
      throw new Error("Failed to fetch planets");
    }

    const data = await response.json();

    const planets = data.results.slice(0, 10);

    planets.forEach((planet) => {
      const row = document.createElement("tr");

      const nameCell = document.createElement("td");
      nameCell.textContent = planet.name;

      const populationCell = document.createElement("td");
      populationCell.textContent = planet.population;

      const climateCell = document.createElement("td");
      climateCell.textContent = planet.climate;

      const gravityCell = document.createElement("td");
      gravityCell.textContent = planet.gravity;

      row.appendChild(nameCell);
      row.appendChild(populationCell);
      row.appendChild(climateCell);
      row.appendChild(gravityCell);

      tableBody.appendChild(row);
    });
  } catch (error) {
    console.error("Error:", error);
  }
}
