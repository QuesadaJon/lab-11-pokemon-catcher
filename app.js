import { pokeData } from './api.js';
import { wildEncounter, encounteredLog, caughtLog, insertLocalStorage, getFromLocalStorage } from './poke-functions.js';
// import functions and grab DOM elements
const pokemonRadioTag1 = document.getElementById('radio-one');
const pokemonRadioTag2 = document.getElementById('radio-two');
const pokemonRadioTag3 = document.getElementById('radio-three');
const pokemonImageTag1 = document.getElementById('img-one');
const pokemonImageTag2 = document.getElementById('img-two');
const pokemonImageTag3 = document.getElementById('img-three');
var ctx = document.getElementById('my-chart');
// initialize state

let battles = 0; 
let radios = [pokemonRadioTag1, pokemonRadioTag2, pokemonRadioTag3];
let imgs = [pokemonImageTag1, pokemonImageTag2, pokemonImageTag3];
let adventure = [];

// set event listeners to update state and DOM

// My next goal is to store all the first encountered Pokemon in local storage tracking the 1) Pokemon 2) times encountered and 3) times captured
function aWildPokemonHasAppeared() {
     
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
    
}
        // {
        //     results.hidden = false;
        // }


aWildPokemonHasAppeared();


for (let i = 0; i < radios.length; i++) {
    radios[i].addEventListener('click', (e) => { 
        const pokeStorage = getFromLocalStorage('POKEMON');
        if (battles === 9) {
            for (let i = 0; i < pokeStorage.length; i ++) {
                const localStorageArray = pokeStorage[i];
                console.log(localStorageArray);
                pokeLogName.push(localStorageArray.name);
                pokeLogCaught.push(localStorageArray.caught);
                pokeLogEncountered.push(localStorageArray.encounters);
                
            } 
            {
                for (let i = 0; i < radios.length; i++) {
                    radios[i].hidden = true;
                    radios[i].disabled = true;
                }
                for (let i = 0; 1 < imgs.length; i++) {
                    imgs[i].hidden = true;
                } 
                ctx.style.visiblity = 'visible';
            
            }
        } else {
            caughtLog(Number(e.target.value), adventure);

            aWildPokemonHasAppeared();

            for (let i = 0; i < radios.length; i++) {
                radios[i].checked = false;

            }
            battles++;
        }

    });
}

const pokeLogName = [];
const pokeLogCaught = [];
const pokeLogEncountered = [];

new Chart(ctx, { //eslint-disable-line
    type: 'bar',
    data: {
        labels: pokeLogName,
        datasets: [{
            label: 'pokemon encountered',
            data: pokeLogEncountered,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});