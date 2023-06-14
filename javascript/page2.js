//allora devo riuscire a far ritornare il valore del id del pokemon selezionato per poter mandare i suoi dati a schermo nella page 2
import { callPokemon, serverLocation } from "./callApi.js";
import { valueStringQuery, idImg } from "./function.js";



callPokemon(valueStringQuery()).then((pokemon) => {
    document.querySelector("#imgPokemon").src = `${serverLocation}/pokemon/images/${idImg(pokemon.id)}`;
    document.querySelector("#namePokemon").innerHTML = pokemon.name.english;
    document.querySelector("#valueType").innerHTML = pokemon.type[0];
    document.querySelector("#valueSpeed").innerHTML = pokemon.base.Speed;
    document.querySelector("#valueHP").innerHTML = pokemon.base.HP;
    document.querySelector("#pokemonId").innerHTML = pokemon.id;

    document.querySelector("#pokemonAttack").innerHTML = pokemon.base.Attack;
    document.querySelector("#pokemonDefense").innerHTML = pokemon.base.Defense;
    document.querySelector("#pokemonSpAttack").innerHTML = pokemon.base["Sp. Attack"];
    document.querySelector("#pokemonSpDefense").innerHTML = pokemon.base["Sp. Defense"];
});