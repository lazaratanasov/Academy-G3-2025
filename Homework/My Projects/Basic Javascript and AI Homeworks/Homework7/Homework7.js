function createTable() {
  let rows = Number(prompt("Enter number of rows:"));
  let cols = Number(prompt("Enter number of columns:"));

  if (isNaN(rows) || isNaN(cols) || rows <= 0 || cols <= 0) {
    alert("Please enter valid numbers for rows and columns.");
    return;
  }

  let oldTable = document.querySelector("table");
  if (oldTable) oldTable.remove();

  let table = document.createElement("table");
  table.style.borderCollapse = "collapse";

  for (let i = 1; i <= rows; i++) {
    let tr = document.createElement("tr");

    for (let j = 1; j <= cols; j++) {
      let td = document.createElement("td");
      td.textContent = `Row-${i} Column-${j}`;
      td.style.border = "1px solid black";
      td.style.padding = "5px";
      tr.appendChild(td);
    }

    table.appendChild(tr);
  }

  document.body.appendChild(table);
}

createTable();
