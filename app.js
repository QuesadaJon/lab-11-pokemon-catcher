import { pokeData } from './api.js';
import { getPokemonById, getRandomPokemon, anyPokemon } from './poke-functions.js';
// import functions and grab DOM elements
const pokemonRadioTags = document.querySelectorAll('input');
const pokemonImageTags = document.querySelectorAll('img');
const result = document.querySelector('result');
const sprites = document.querySelector('sprites');
// initialize state

const pokemon = pokeData.slice();
let encounters = 0;
let pokemonCaptured = 0;

// set event listeners to update state and DOM
const aWildPokemonHasAppeared = () => {
    const encounterPokemon = getRandomPokemon(pokemon);

    for (let i = 0; i < pokemonRadioTags.length; i++) {
        pokemonRadioTags[i];
    }
    if (encounters > 10) {
        encounterPokemon;
    }


    encounterPokemon;

    pokemonImageTags[1].src = encounterPokemon.image;
};

aWildPokemonHasAppeared;