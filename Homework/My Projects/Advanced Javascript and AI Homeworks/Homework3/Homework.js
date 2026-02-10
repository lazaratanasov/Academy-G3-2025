const PAGE_1_URL = "https://swapi.py4e.com/api/planets/?page=1";
const PAGE_2_URL = "https://swapi.py4e.com/api/planets/?page=2";

const btnLoad = document.getElementById("btnLoad");
const btnNext = document.getElementById("btnNext");
const btnPrev = document.getElementById("btnPrev");
const tbody = document.getElementById("planetsTbody");
const statusEl = document.getElementById("status");

function fetchFromApi(url) {
  return fetch(url).then((res) => {
    if (!res.ok) throw new Error("Request failed with status " + res.status);
    return res.json();
  });
}

function safeValue(value) {
  if (
    value === null ||
    value === undefined ||
    value === "" ||
    value === "unknown"
  ) {
    return "N/A";
  }
  return value;
}

function printPlanetsToTable(planetsArray) {
  tbody.innerHTML = "";

  planetsArray.slice(0, 10).forEach((planet) => {
    const tr = document.createElement("tr");

    const tdName = document.createElement("td");
    tdName.textContent = safeValue(planet.name);

    const tdPop = document.createElement("td");
    tdPop.textContent = safeValue(planet.population);

    const tdClimate = document.createElement("td");
    tdClimate.textContent = safeValue(planet.climate);

    const tdGravity = document.createElement("td");
    tdGravity.textContent = safeValue(planet.gravity);

    tr.appendChild(tdName);
    tr.appendChild(tdPop);
    tr.appendChild(tdClimate);
    tr.appendChild(tdGravity);

    tbody.appendChild(tr);
  });
}

function showNextHidePrev() {
  btnNext.classList.remove("hidden");
  btnPrev.classList.add("hidden");
}

function showPrevHideNext() {
  btnPrev.classList.remove("hidden");
  btnNext.classList.add("hidden");
}

function loadPlanetsPage(url, pageLabel) {
  statusEl.textContent = "Loading " + pageLabel + "...";

  fetchFromApi(url)
    .then((data) => {
      printPlanetsToTable(data.results);
      statusEl.textContent = "Showing " + pageLabel;
    })
    .catch((err) => {
      statusEl.textContent = "Error: " + err.message;
    });
}

btnLoad.addEventListener("click", function () {
  loadPlanetsPage(PAGE_1_URL, "first 10 planets (page 1)");
  showNextHidePrev();
});

btnNext.addEventListener("click", function () {
  loadPlanetsPage(PAGE_2_URL, "next 10 planets (page 2)");
  showPrevHideNext();
});

btnPrev.addEventListener("click", function () {
  loadPlanetsPage(PAGE_1_URL, "first 10 planets (page 1)");
  showNextHidePrev();
});
