export function getPokemonById(pokemonArray, id) {
    for (let i = 0; i < pokemonArray.length; i++) {
        if (id === pokemonArray[i].id) return pokemonArray[i];
    }
}

export function wildEncounter(pokemonArray) {
    const generatePokemon = Math.floor(Math.random() * pokemonArray.length);
    const homie = pokemonArray[generatePokemon];
    return homie;
}

export function encounteredLog(wildEncounter, localArray) {

    const adventureLog = getPokemonById(localArray, Number(wildEncounter.id));
    

    if (!adventureLog) {
        const newEncounter = {
            id: Number(wildEncounter.id),
            name: wildEncounter.pokemon,
            encounters: 1,
            caught: 0
        };
        localArray.push(newEncounter);
    } else { 

        adventureLog.encounters++;
    }


}

export function caughtLog(caughtPokemon, localArray) {
    const adventureLog = getPokemonById(localArray, Number(caughtPokemon));
    
    if (!adventureLog) {
        const newEncounter = {
            id: Number(caughtPokemon.id),
            name: caughtPokemon.pokemon,
            encounters: 1,
            caught: 1
        };
        localArray.push(newEncounter);
    } else { 

        adventureLog.caught++;
    }
}

export function insertLocalStorage(key, value) {

    const stringyItem = JSON.stringify(value);

    localStorage.setItem(key, stringyItem);

    return value;
}

export function getFromLocalStorage(key) {
    const item = localStorage.getItem(key);

    return JSON.parse(item);
}
