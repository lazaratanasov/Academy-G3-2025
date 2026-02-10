$("#loadPokemon").click(function () {
  $("#pokemonList").empty();

  $.ajax({
    url: "https://pokeapi.co/api/v2/pokemon",
    method: "GET",

    success: function (data) {
      for (let i = 0; i < 10; i++) {
        $("#pokemonList").append("<li>" + data.results[i].name + "</li>");
      }
    },
  });
});
