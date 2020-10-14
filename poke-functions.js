export function getPokemonById(pokemonArray, id) {
    let pokeMatch;
    
    for (let i = 0; i < pokemonArray.length; i++) {
        if (id === pokemonArray[i]._id) return pokemonArray[i];
    }
    pokeMatch = pokemonArray;

    return pokeMatch;
}

export function wildEncounter(pokemonArray) {
    const generatePokemon = Math.floor(Math.random() * pokemonArray.length);
    const homie = pokemonArray[generatePokemon];
    return homie;
}

// export function journalLog(array) {
//     const 
// }