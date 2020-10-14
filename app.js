import { pokeData } from './api.js';
import { getPokemonById, wildEncounter, encounteredLog } from './poke-functions.js';
// import functions and grab DOM elements
const pokemonRadioTag1 = document.getElementById('radio-one');
const pokemonRadioTag2 = document.getElementById('radio-two');
const pokemonRadioTag3 = document.getElementById('radio-three');
const pokemonImageTag1 = document.getElementById('img-one');
const pokemonImageTag2 = document.getElementById('img-two');
const pokemonImageTag3 = document.getElementById('img-three');
const result = document.querySelector('result');
const sprites = document.querySelector('sprites');
// initialize state

let battles = 0; 
let encounteredPoke = [];
let radios = [pokemonRadioTag1, pokemonRadioTag2, pokemonRadioTag3];


// set event listeners to update state and DOM

// My next goal is to store all the first encountered Pokemon in local storage tracking the 1) Pokemon 2) times encountered and 3) times captured
function aWildPokemonHasAppeared() {
    if (battles >= 11);
    let wildPokemon1 = wildEncounter(pokeData);
    let wildPokemon2 = wildEncounter(pokeData);
    let wildPokemon3 = wildEncounter(pokeData);
    while (wildPokemon1._id === wildPokemon2._id || wildPokemon1._id === wildPokemon3._id || wildPokemon2._id === wildPokemon3._id) {       
        wildPokemon2 = wildEncounter(pokeData);
        wildPokemon3 = wildEncounter(pokeData);
    }   
 
    pokemonRadioTag1.value = getPokemonById(wildPokemon1._id, pokeData);
    pokemonImageTag1.src = wildPokemon1.url_image;
    pokemonRadioTag2.value = getPokemonById(wildPokemon2._id, pokeData);
    pokemonImageTag2.src = wildPokemon2.url_image;
    pokemonRadioTag3.value = getPokemonById(wildPokemon3._id, pokeData);
    pokemonImageTag3.src = wildPokemon3.url_image;

    // caughtLog(wildPokemon1._id);
    encounteredLog(wildPokemon1._id, encounteredPoke);
    encounteredLog(wildPokemon2._id, encounteredPoke);
    encounteredLog(wildPokemon3._id, encounteredPoke);
    
    
    for (let i = 0; i < radios.length; i++) {
        radios[i].addEventListener('change', (e) =>
        {
            caughtLog(e.target.value, encounteredPoke);
            aWildPokemonHasAppeared();
            console.log(battles, encounteredPoke);
        }
        
        )
    }
    battles++;

}

aWildPokemonHasAppeared();


function caughtLog(id, array) {
    const seenPokemon = getPokemonById(array, id);
    if (seenPokemon._id === undefined) {
        const newEncounter = {
            _id: id,
            encounters: 0,
            caught: 1
        };
        array.push(newEncounter);
    } else { 
        seenPokemon.caught++;
    }
}



