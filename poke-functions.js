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

export function encounteredLog(id, array) {
    const seenPokemon = getPokemonById(array, id);
    if (seenPokemon._id === undefined) {
        const newEncounter = {
            _id: id,
            encounters: 1,
            caught: 0
        };
        array.push(newEncounter);
    } else { 
        seenPokemon.encounters++;
    }
}