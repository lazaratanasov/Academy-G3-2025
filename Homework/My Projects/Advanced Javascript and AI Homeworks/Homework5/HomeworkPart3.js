const button = document.getElementById("loadDogsBtn");
const container = document.getElementById("dogContainer");

button.addEventListener("click", loadDogs);

async function loadDogs() {
  container.innerHTML = "";

  try {
    const response = await fetch("https://dog.ceo/api/breed/hound/images");

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();

    data.message.forEach((imageUrl) => {
      const img = document.createElement("img");
      img.src = imageUrl;
      img.alt = "Hound dog";
      container.appendChild(img);
    });
  } catch (error) {
    console.error("Error:", error);
  }
}
