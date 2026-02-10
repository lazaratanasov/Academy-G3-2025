const reminders = [];
let nextId = 1;

const titleInput = document.getElementById("titleInput");
const descriptionInput = document.getElementById("descriptionInput");
const addBtn = document.getElementById("addBtn");
const showBtn = document.getElementById("showBtn");
const statusEl = document.getElementById("status");
const tbody = document.getElementById("remindersTbody");
const priorityInput = document.getElementById("priorityInput");
const colorInput = document.getElementById("colorInput");
let userPickedColor = false;
colorInput.addEventListener("input", () => {
  userPickedColor = true;
});
const DEFAULT_COLORS = {
  Low: "#22c55e",
  Medium: "#1e90ff",
  High: "#ef4444",
};

function setStatus(msg, isError = false) {
  statusEl.textContent = msg;
  statusEl.style.color = isError ? "#b91c1c" : "#334155";
}

function validateInputs() {
  const title = titleInput.value.trim();
  if (!title) {
    setStatus("Title is required.", true);
    return false;
  }
  return true;
}

function buildReminder() {
  const priority = priorityInput.value;

  const color = userPickedColor ? colorInput.value : DEFAULT_COLORS[priority];

  return {
    id: nextId++,
    title: titleInput.value.trim(),
    priority,
    color,
    description: descriptionInput.value.trim(),
    createdAt: new Date().toISOString(),
  };
}

function renderTable() {
  tbody.innerHTML = "";

  reminders.forEach((r, index) => {
    const tr = document.createElement("tr");

    const tdIndex = document.createElement("td");
    tdIndex.textContent = String(index + 1);
    tr.appendChild(tdIndex);

    const tdTitle = document.createElement("td");
    tdTitle.textContent = r.title;
    tdTitle.style.color = r.color;
    tdTitle.style.fontWeight = "700";
    tr.appendChild(tdTitle);

    const tdPriority = document.createElement("td");
    tdPriority.textContent = r.priority;
    tr.appendChild(tdPriority);

    const tdDesc = document.createElement("td");
    tdDesc.textContent = r.description;
    tr.appendChild(tdDesc);

    const tdColor = document.createElement("td");
    const swatch = document.createElement("span");
    swatch.style.display = "inline-block";
    swatch.style.width = "14px";
    swatch.style.height = "14px";
    swatch.style.borderRadius = "4px";
    swatch.style.background = r.color;
    swatch.style.marginRight = "8px";
    swatch.style.border = "1px solid #cbd5e1";
    tdColor.appendChild(swatch);
    tdColor.appendChild(document.createTextNode(r.color));
    tr.appendChild(tdColor);

    const tdCreated = document.createElement("td");
    tdCreated.textContent = new Date(r.createdAt).toLocaleString();
    tr.appendChild(tdCreated);

    tbody.appendChild(tr);
  });

  setStatus(`Rendered ${reminders.length} reminder(s).`);
}

addBtn.addEventListener("click", () => {
  if (!validateInputs()) return;

  const reminder = buildReminder();
  reminders.push(reminder);

  setStatus(`Added: "${reminder.title}" (Priority: ${reminder.priority})`);

  if (isShowing) renderTable();

  titleInput.value = "";
  descriptionInput.value = "";
  priorityInput.value = "Medium";
  userPickedColor = false;
  colorInput.value = DEFAULT_COLORS[priorityInput.value];
});

addBtn.addEventListener("mouseenter", () => {
  setStatus("Click to add a new reminder!");
});

addBtn.addEventListener("mouseleave", () => {
  setStatus("");
});

showBtn.addEventListener("mouseenter", () => {
  setStatus("Click to show reminders!");
});

showBtn.addEventListener("mouseleave", () => {
  setStatus("");
});

priorityInput.addEventListener("mouseenter", () => {
  setStatus("Select the priority level for your reminder.");
});

priorityInput.addEventListener("mouseleave", () => {
  setStatus("");
});

colorInput.addEventListener("mouseenter", () => {
  setStatus("Choose a color to categorize your reminder.");
});

colorInput.addEventListener("mouseleave", () => {
  setStatus("");
});

priorityInput.addEventListener("change", () => {
  if (!userPickedColor) {
    const selectedPriority = priorityInput.value;
    colorInput.value = DEFAULT_COLORS[selectedPriority];
  }
});

let isShowing = false;

showBtn.addEventListener("click", () => {
  isShowing = true;
  renderTable();
});

priorityInput.value = "Medium";
colorInput.value = DEFAULT_COLORS[priorityInput.value];

window.reminders = reminders;
