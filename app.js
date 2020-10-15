import { pokeData } from './api.js';
import { getPokemonById, wildEncounter, encounteredLog, caughtLog, insertLocalStorage, getFromLocalStorage } from './poke-functions.js';
// import functions and grab DOM elements
const pokemonRadioTag1 = document.getElementById('radio-one');
const pokemonRadioTag2 = document.getElementById('radio-two');
const pokemonRadioTag3 = document.getElementById('radio-three');
const pokemonImageTag1 = document.getElementById('img-one');
const pokemonImageTag2 = document.getElementById('img-two');
const pokemonImageTag3 = document.getElementById('img-three');
const result = document.querySelector('tbody');
const sprites = document.querySelector('sprites');
// initialize state

let battles = 1; 
let radios = [pokemonRadioTag1, pokemonRadioTag2, pokemonRadioTag3];
let imgs = [pokemonImageTag1, pokemonImageTag2, pokemonImageTag3];
let adventure = [];

// set event listeners to update state and DOM

// My next goal is to store all the first encountered Pokemon in local storage tracking the 1) Pokemon 2) times encountered and 3) times captured
function aWildPokemonHasAppeared() {
    if (battles <= 10) {
        let wildPokemon1 = wildEncounter(pokeData);
        let wildPokemon2 = wildEncounter(pokeData);
        let wildPokemon3 = wildEncounter(pokeData);
        while (wildPokemon1.id === wildPokemon2.id || wildPokemon1.id === wildPokemon3.id || wildPokemon2.id === wildPokemon3.id) {       
            wildPokemon2 = wildEncounter(pokeData);
            wildPokemon3 = wildEncounter(pokeData);
        }   
 
        pokemonRadioTag1.value = wildPokemon1.id;
        pokemonImageTag1.src = wildPokemon1.url_image;
        pokemonRadioTag2.value = wildPokemon2.id;
        pokemonImageTag2.src = wildPokemon2.url_image;
        pokemonRadioTag3.value = wildPokemon3.id;
        pokemonImageTag3.src = wildPokemon3.url_image;

        encounteredLog(wildPokemon1, adventure);
        encounteredLog(wildPokemon2, adventure);
        encounteredLog(wildPokemon3, adventure);
        insertLocalStorage('POKEMON', adventure);
    
    } else {
        for (let i = 0; i < radios.length; i++) {
            radios[i].hidden = true;
            radios[i].disabled = true;
           
        }
        for (let i = 0; i < imgs.length; i++) {
            imgs[i].hidden = true;
        } 
        // result.hidden = false;
        // for (let i = 0; i < journeyStats.length; i++) {
        //     const game = journeyStats[i];
        //     const tr = renderArray(game);
        //     result.appendChild(tr);
        // }
    }
}

aWildPokemonHasAppeared();

for (let i = 0; i < radios.length; i++) {
    radios[i].addEventListener('click', (e) =>
    
    { caughtLog(Number(e.target.value), adventure);

        aWildPokemonHasAppeared();

        for (let i = 0; i < radios.length; i++) {
            radios[i].checked = false;

        }
        battles++;

    });
}






