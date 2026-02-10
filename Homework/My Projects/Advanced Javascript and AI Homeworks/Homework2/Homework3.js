document.getElementById("loadDogsBtn").onclick = function () {
  fetch("https://dog.ceo/api/breed/hound/images")
    .then(function (response) {
      return response.json();
    })

    .then(function (data) {
      let container = document.getElementById("dogContainer");

      container.innerHTML = "";

      data.message.forEach(function (imageUrl) {
        let img = document.createElement("img");

        img.src = imageUrl;
        img.width = 200;

        container.appendChild(img);
      });
    })

    .catch(function (error) {
      alert("Error loading images");
      console.log(error);
    });
};
