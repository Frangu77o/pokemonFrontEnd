const serverLocation = "http://localhost:3000";


async function callAllPokemon(){
    try {
        var request = await fetch(`${serverLocation}/pokemon`);
        var allpokemon = await request.json();
        return allpokemon.data;
    } catch (err) {
        return {success: false, message: err.message};
    };
};

async function callTypePokemon(type){
    try {
        var request = await fetch(`${serverLocation}/pokemon/type/${type}`);
        var pokemon = await request.json();
        return pokemon.data;
    } catch (err) {
        return {success: false, message: err.message};
    };
}

async function callPokemon(id){
    try {
        var request = await fetch(`${serverLocation}/pokemon/${id}`);
        var pokemon = await request.json();
        return pokemon.data[0];
    } catch (err) {
        return {success: false, message: `error backend ${err.message}`};
    };
};

export {
    serverLocation,
    callAllPokemon,
    callTypePokemon,
    callPokemon,
};
