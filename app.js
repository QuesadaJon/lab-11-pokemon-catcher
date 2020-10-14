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

const pokemon = pokeData.slice();
let encounters = 0; 

// set event listeners to update state and DOM


function aWildPokemonHasAppeared() {
    if (encounters >= 10);
    let wildPokemon1 = wildEncounter(pokemon);
    let wildPokemon2 = wildEncounter(pokemon);
    let wildPokemon3 = wildEncounter(pokemon);
    while (wildPokemon1._id === wildPokemon2._id || wildPokemon1._id === wildPokemon3._id || wildPokemon2._id === wildPokemon3._id) {       
        wildPokemon2 = wildEncounter(pokemon);
        wildPokemon3 = wildEncounter(pokemon);
    }   
 
    pokemonRadioTag1.value = wildPokemon1._id;
    pokemonImageTag1.src = wildPokemon1.url_image;
    pokemonRadioTag2.value = wildPokemon2.pokemon;
    pokemonImageTag2.src = wildPokemon2.url_image;
    pokemonRadioTag3.value = wildPokemon3.pokemon;
    pokemonImageTag3.src = wildPokemon3.url_image;


    encounters++;

}

aWildPokemonHasAppeared();

console.log(encounters);