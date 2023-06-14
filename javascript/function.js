import { callAllPokemon, callTypePokemon, serverLocation } from "./callApi.js";

function createCard(type, name, imgType, att, dif, id, imgId){
    //element
    let card = document.createElement('div');
    let cardImg = document.createElement('img');
    let cardBody = document.createElement('div');
    let cardName = document.createElement('h5');
    let cardValue = document.createElement('div');
    let cardValueType = document.createElement('div');
    let cardValueTypePoints = document.createElement('h5');
    let cardValueTypeButton = document.createElement('div');
    let cardValueAtt = document.createElement('div');
    let cardValueAttPoints = document.createElement('h5');
    let cardValueAttButton = document.createElement('div');
    let cardValueDif = document.createElement('div');
    let cardValueDifPoints = document.createElement('h5');
    let cardValueDifButton = document.createElement('div');

    //class
    card.classList.add('card');
    cardBody.classList.add('card-body');
    cardName.classList.add('name');
    cardValue.classList.add('card-value');
    cardValueType.classList.add('card-value-type');
    cardValueTypeButton.classList.add('card-value-button');
    cardValueAtt.classList.add('card-value-att');
    cardValueAttPoints.classList.add('card-value-points');
    cardValueAttButton.classList.add('card-value-button');
    cardValueDif.classList.add('card-value-dif');
    cardValueDifPoints.classList.add('card-value-points');
    cardValueDifButton.classList.add('card-value-button');
    card.classList.add('card-type-' + type);
    card.setAttribute("id", id);
    cardImg.setAttribute("src", `${serverLocation}/pokemon/images/` + imgId);

    //data
    cardName.innerHTML = name;
    cardValueTypeButton.innerHTML = "TYPE";
    cardValueAttButton.innerHTML = "ATT";
    cardValueDifButton.innerHTML = "DIF";
    cardValueTypePoints.innerHTML = imgType;
    cardValueAttPoints.innerHTML = att;
    cardValueDifPoints.innerHTML = dif;

    //append childs
    cardValueType.appendChild(cardValueTypePoints);
    cardValueType.appendChild(cardValueTypeButton);
    cardValueAtt.appendChild(cardValueAttPoints);
    cardValueAtt.appendChild(cardValueAttButton);
    cardValueDif.appendChild(cardValueDifPoints);
    cardValueDif.appendChild(cardValueDifButton);
    cardValue.appendChild(cardValueType);
    cardValue.appendChild(cardValueAtt);
    cardValue.appendChild(cardValueDif);
    cardBody.appendChild(cardName);
    cardBody.appendChild(cardValue);
    card.appendChild(cardImg);
    card.appendChild(cardBody);
    document.querySelector(".row").appendChild(card);
}

function typeIcon(type){
    switch (type) {
        case "Grass":return "🍃";
        case "Fire": return "🔥";
        case "Water": return "💧";
        case "Bug": return "🐞";
        case "Normal":return "🔘";
        case "Poison": return "☠️";
        case "Electric":return "⚡";
        case "Ground": return "🗿";
        case "Fairy": return"✨";
        case "Fighting":return "🥊";
        case "Psychic":return "🧠";
        case "Rock":return "⛰️";
        case "Ghost":return "👻";
        case "Ice":return "❄️";
        case "Dragon":return "🐲";
        case "Dark":return "🌙";
        case "Steel":return "🛡️";
        case "Flying": return "🌪️";
        default: return "?";
    };
}

function idImg(id){
    if(id<10){
        return "00" + id;
    }else if(id < 100){
        return "0" + id;
    }else{
        return id;
    };
};





function eventListnerElement(queryselcetor, evento, useFunction ){
    let collect = document.querySelectorAll(queryselcetor);
    collect.forEach(element => {
        element.addEventListener(evento, (evt)=>{useFunction(evt)})
    });
};

function cardDetails(evt){
    console.log("siamo qui", window.location.href)
    window.location = window.location.href.replace("home.html", `pokemon.html?q=${evt.target.offsetParent.id}`)
};

function filter(evt){
    if(evt.target.id == "All"){
        callAllPokemon().then((pokemon)=>rendering(pokemon));
    }else{
        callTypePokemon(evt.target.id).then((pokemon)=>rendering(pokemon));
    }
};

function rendering(array){
    document.querySelector(".row").innerHTML = ""
    array.forEach(element => {
        createCard(element.type[0], element.name.english, typeIcon(element.type[0]), element.base.Attack, element.base.Defense, element.id, idImg(element.id));
    });
    eventListnerElement(".card", "click", cardDetails);
}


function valueStringQuery(){
    var url = window.location.search;
    return url.replace("?q=", "");
}














export{
    createCard,
    typeIcon,
    idImg,
    eventListnerElement,
    cardDetails,
    filter,
    rendering,
    valueStringQuery
};