//set monster counter to be added to new monster elements as an ID
let monsterId = 0;

const monsterArr = [{
    type: 'zombie', //noted for later versions to be able to have other monsters
    attack: 1,
    colStart: 1,
    colEnd: 2,
    hitPoints: 4
}];

const playerChar = {
    type: 'player',
    attack: 2,
    hitPoints: 20
}

//get main element to append new elements to
const mainEl = document.querySelector('main');

const createMonster = () => {
    console.log('createMonster');
    const monster = document.createElement('div');
    monster.setAttribute('class', 'monster');

  //set new monster's ID to a trackable number
    monster.setAttribute('id', monsterId);
    mainEl.appendChild(monster);
}

//add monster object to monster array
const addMonster = () => {
    //advance monster tracker
    monsterId++;
    monsterArr.push({
        type: 'zombie',
        attack: 1,
        colStart: 1,
        colEnd: 2,
        hitPoints: 4
    });
}

//move monster on screen by advancing along grid columns
const updateMonstCol = () => {
    console.log("updateMonstCol");
    for (i = 0; i < monsterArr.length; i ++){
        console.log(monsterArr[i].colStart);
        if(monsterArr[i].colStart < 12){
            const oldStart = monsterArr[i].colStart;
            monsterArr[i].colStart++;
            monsterArr[i].colEnd++;
            const monsterIdString = "monst" + i;    
            const monsterInCss = document.getElementById(monsterIdString);
            
            //monsterInCss.removeAttribute('style');
            //monsterInCss.setAttribute('style', 'grid-column:' +  monsterArr[i].colStart + '/' + monsterArr[i].colEnd);
        }
    }
}

const createPlayer = () => {
    playerDiv = document.createElement('div');
    playerDiv.setAttribute('class', 'player');
    mainEl.appendChild(playerDiv);
} 

const freshMonster = () => {
    //create new monsters (but no more than 21)
    if (monsterId < 21) {
        createMonster();
        addMonster();

    }
}

createPlayer();
//check for player demise, stop game and end timers if dead
const checkPlayerHp = () => {
    if (playerChar.hitPoints === 0) {
        clearInterval(updateColumns);
        clearInterval(newMonst);
        clearInterval(checkPlayerHitPoints);
    }
}





const checkPlayerHitPoints = setInterval(checkPlayerHp, 500);
const makeMonst = setInterval(freshMonster, 2500);
const updateColumns = setInterval(updateMonstCol, 200);




// move zombies toward player char
//MVP will only concern itself with monsters from one direction
/*const monstersMove = (counter) => {
    if (monsters[counter].position < 6)
    const oldPosition = monsters[counter].position;
    const newPosition = monsters[counter].postion++;                
    } //for attacks from either side:
    /*else if (monsters[counter].position > 7) {
        monsters[counter].position--;
    }*/
/*
    const zomIdOld = document.getElementById('monst' + oldPosition);
    zomIdOld.classlist.add('toggleMonster');     
    const zomIdNew = document.getElementByID('monst' + newPosition);
    zomIdNew.classlist.remove('toggleMonster');
}*/
/*
const getDamage = (place) => {
    if (monsters[place].position === 6) { //for dual sided attacks: (7 || 6)) {
        playerHP -= monsters[place].attack;
    }
}
*/
/*
const monstersTurn = () => {
    if (monsters.length !== 0){
        for (i = 0; i < monsters.length; i++) {
            monstersMove(i);
            getDamage(i);
        }
    }
}
*/
//const timeTurns = setInterval(monstersTurn, 2000);
/*
const checkHealth = () => {
    if (playerHP === 0) {
        clearInterval(timeTurns);
    } 
}
*/
/*
const runGame = () => {
    zombTimer;
    zombCreateStop;
    timeTurns;
}

runGame();
*/