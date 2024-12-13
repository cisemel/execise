const pokemonList = [
    { 
        id: 1, 
        name: "Bulbasaur", 
        type: "Normal", 
        image: "img/bulbasaur.png",
        height: 0.7, 
        weight: 6.9 
    },
    { 
        id: 4, 
        name: "Charmander", 
        type: "Fire", 
        image: "img/charmander.png",
        height: 0.6, 
        weight: 8.5 
    },
    { 
        id: 7, 
        name: "Squirtle", 
        type: "Water", 
        image: "img/squirtle.png",
        height: 0.5, 
        weight: 9.0 
    },
];

function displayPokemon(filteredList) {
    const pokedex = document.getElementById("pokedex");
    pokedex.innerHTML = "";
    filteredList.forEach((pokemon) => {
        const pokemonCard = `
            <div class="pokemon-card">
                <h2>${pokemon.name.toUpperCase()}</h2>
                <img src="${pokemon.image}" alt="${pokemon.name}">
                <p>Type: ${pokemon.type}</p>
                <p>Height: ${pokemon.height}m</p>
                <p>Weight: ${pokemon.weight}kg</p>
            </div>
        `;
        pokedex.innerHTML += pokemonCard;
    });
}

displayPokemon(pokemonList);

document.getElementById("searchButton").addEventListener("click", () => {
    const pokemonName = document.getElementById("search").value.toLowerCase();
    const filteredList = pokemonList.filter(
        (pokemon) => pokemon.name.toLowerCase() === pokemonName
    );
    if (filteredList.length > 0) {
        displayPokemon(filteredList);
    } else {
        document.getElementById("pokedex").innerHTML = "<p>Pokémon not found. Please try again.</p>";
    }
});

document.getElementById("all").addEventListener("click", () => displayPokemon(pokemonList));

document.getElementById("normal").addEventListener("click", () => {
    const filteredList = pokemonList.filter((pokemon) => pokemon.type === "Normal");
    displayPokemon(filteredList);
});

document.getElementById("fire").addEventListener("click", () => {
    const filteredList = pokemonList.filter((pokemon) => pokemon.type === "Fire");
    displayPokemon(filteredList);
});

document.getElementById("water").addEventListener("click", () => {
    const filteredList = pokemonList.filter((pokemon) => pokemon.type === "Water");
    displayPokemon(filteredList);
});