import { pokeData } from './api.js';
import { getPokemonById, wildEncounter } from './poke-functions.js';
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

// set event listeners to update state and DOM

// My next goal is to store all the first encountered Pokemon in local storage tracking the 1) Pokemon 2) times encountered and 3) times captured
function aWildPokemonHasAppeared() {
    if (battles >= 10);
    let wildPokemon1 = wildEncounter(pokeData);
    let wildPokemon2 = wildEncounter(pokeData);
    let wildPokemon3 = wildEncounter(pokeData);
    while (wildPokemon1._id === wildPokemon2._id || wildPokemon1._id === wildPokemon3._id || wildPokemon2._id === wildPokemon3._id) {       
        wildPokemon2 = wildEncounter(pokeData);
        wildPokemon3 = wildEncounter(pokeData);
    }   
 
    pokemonRadioTag1.value = getPokemonById(wildPokemon1._id, pokeData);
    pokemonImageTag1.src = wildPokemon1.url_image;
    pokemonRadioTag2.value = wildPokemon2.pokemon;
    pokemonImageTag2.src = wildPokemon2.url_image;
    pokemonRadioTag3.value = wildPokemon3.pokemon;
    pokemonImageTag3.src = wildPokemon3.url_image;

    // caughtLog(wildPokemon1._id);
    encounteredLog(wildPokemon1._id);
    encounteredLog(wildPokemon2._id);
    encounteredLog(wildPokemon3._id);
    battles++;

}

aWildPokemonHasAppeared();

// function caughtLog(id) {
//     if (localStorage.getItem('caught') === null) {
//         const newCatch = {
//             _id: id,
//             encounters: 0,
//             caught: 1
//         };
//         encounteredPoke.push(newCatch);
//     }
// }

function encounteredLog(id) {
    const seenPokemon = getPokemonById(encounteredPoke, id);
    if (seenPokemon._id === undefined) {
        const newEncounter = {
            _id: id,
            encounters: 1,
            caught: 0
        };
        encounteredPoke.push(newEncounter);
    } else { 
        seenPokemon.encounters++;
    }
}

console.log(battles, encounteredPoke);