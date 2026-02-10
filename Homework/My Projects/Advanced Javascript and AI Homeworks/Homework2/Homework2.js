document.getElementById("loadUserBtn").onclick = function () {
  fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((response) => response.json())
    .then((user) => {
      document.getElementById("id").innerText = user.id;
      document.getElementById("name").innerText = user.name;
      document.getElementById("username").innerText = user.username;
      document.getElementById("email").innerText = user.email;

      document.getElementById("street").innerText = user.address.street;
      document.getElementById("suite").innerText = user.address.suite;
      document.getElementById("city").innerText = user.address.city;
      document.getElementById("zipcode").innerText = user.address.zipcode;

      document.getElementById("lat").innerText = user.address.geo.lat;
      document.getElementById("lng").innerText = user.address.geo.lng;

      document.getElementById("phone").innerText = user.phone;
      document.getElementById("website").innerText = user.website;

      document.getElementById("companyName").innerText = user.company.name;
      document.getElementById("companyCatch").innerText =
        user.company.catchPhrase;
      document.getElementById("companyBs").innerText = user.company.bs;
      document.getElementById("userTable").style.display = "table";
    })
    .catch((err) => {
      alert("Error loading user: " + err);
    });
};
