export function getPokemonById(pokemon, id) {
    let pokeMatch;
    pokemon.forEach(pokemon => {
        if (id === pokemon.id) {
            pokeMatch = pokemon;
        }
    });

    return pokeMatch;
}

export function getRandomPokemon(pokemon) {
    const randomPokemonIndex = Math.floor(Math.random() * pokemon.length);

    return pokemon[randomPokemonIndex];
}

export function anyPokemon(pokemon) {
    return pokemon.length;
}