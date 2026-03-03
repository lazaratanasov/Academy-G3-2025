//Task 1
const button = document.getElementById("loadBtn");
const list = document.getElementById("pokemonList");
const statusText = document.getElementById("status");

button.addEventListener("click", getPokemon);

async function getPokemon() {
  list.innerHTML = "";
  statusText.textContent = "Loading...";

  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10");

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();

    data.results.forEach((pokemon, index) => {
      const li = document.createElement("li");
      li.textContent = `${index + 1}. ${pokemon.name}`;
      list.appendChild(li);
    });

    statusText.textContent = "Done!";
  } catch (error) {
    statusText.textContent = "Error loading data.";
    console.error("Error:", error);
  }
}
