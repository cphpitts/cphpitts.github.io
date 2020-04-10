//MASTER VARIABLE VALUES
const START_INSPIRATION = 1;
const START_ARCANE_SHOT = 2;
const START_SHIFTING = 1;
const START_SECOND_WIND = 1;
const START_ACTION_SURGE = 1;

//RUNNING VARIABLE VALUES
var inspiration, arcaneShot, shifting, secondWind, actionSurge;

function rest() {
    console.log('I rested!');
    inspiration = START_INSPIRATION;
    arcaneShot = START_ARCANE_SHOT;
    shifting = START_SHIFTING;
    secondWind = START_SECOND_WIND;
    actionSurge =  START_SECOND_WIND;
    document.querySelector("#" + 'inspiration' + " h2").innerHTML = inspiration;
    document.querySelector("#" + 'arcane' + " h2").innerHTML = arcaneShot;
    document.querySelector("#" + 'shifting' + " h2").innerHTML = shifting;
    document.querySelector("#" + 'second' + " h2").innerHTML = secondWind;
    document.querySelector("#" + 'action' + " h2").innerHTML = actionSurge;

    var buttonList = document.querySelectorAll('button');
    for (i=0; i < buttonList.length; i++) {
        buttonList[i].removeAttribute('disabled');
        buttonList[i].className = "btn btn-info";
    }

}

function useAbility(ability) {
    var container = document.querySelector("#" +ability + " h2");
    var currentValue = parseInt(container.innerHTML);
    currentValue--;
    container.innerHTML = currentValue;
    if (currentValue < 1 ) {
        console.log('yes')
;        var currentButton = document.querySelector("#" +ability + " button");
        currentButton.toggleAttribute('disabled');
        currentButton.className="btn btn-secondary";
    }

}