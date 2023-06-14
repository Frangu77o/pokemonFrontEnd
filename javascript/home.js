import { callAllPokemon } from "./callApi.js";
import { eventListnerElement, filter, rendering } from "./function.js";


callAllPokemon().then((pokemon)=>{
    rendering(pokemon);
    eventListnerElement(".nav-link", "click", filter)
});

