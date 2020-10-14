export function getPokemonById(pokemonArray, id) {
    let pokeMatch;
    
    pokemonArray.forEach(pokemonArray => {
        if (id === pokemonArray.id) {
            pokeMatch = pokemonArray;
        }
    });

    return pokeMatch;
}

export function wildEncounter(pokemonArray) {
    const generatePokemon = Math.floor(Math.random() * pokemonArray.length);
    const homie = pokemonArray[generatePokemon];
    return homie;
}
