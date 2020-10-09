const getBElements = document.querySelectorAll('b');
console.log(getBElements);

//set monster counter to be added to new monster elements as an ID
let monsterId = 0;

const monsterArr = [{
    type: 'zombie', //noted for later versions to be able to have other monsters
    attack: 1,
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
    const monster = document.createElement('div');
    monster.setAttribute('class', 'monster');

  //set new monster's ID to a trackable number
    monster.setAttribute('id', `monstId${monsterId}`);
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
    for (i = 0; i < monsterArr.length; i++){
        if(monsterArr[i].colStart < 12){
            const oldStart = monsterArr[i].colStart;
            monsterArr[i].colStart++;
            monsterArr[i].colEnd++;
            
            
            //console.log(monsterIdString)  
            const monsterInCss = document.getElementById(`monstId${i}`);
            console.log(`monstId${i}`);
            console.log(MonsterInCss);

            monsterInCss.style.gridColumnStart = monsterArr[i].colStart++;
            monsterInCss.style.gridColumnEnd = monsterArr[i].colEnd++;
            
            console.log(MonsterInCss);
            
        } else {
            const twelve = 12;
            const thirteen = 13;
            monsterArr[i].colStart = twelve;
            monsterArr[i].colEnd = thirteen;
        }
    }
}

const monsterHit = () => {
    for (i = 0; i < monsterArr.length; i++) {
        if(monsterArr[i].colStart >= 12) {
            playerChar.hitPoints -= monsterArr[i].attack;
        }
    }
}

const createPlayer = () => {
    playerDiv = document.createElement('div');
    playerDiv.setAttribute('class', 'player');
    mainEl.appendChild(playerDiv);
} 

const freshMonster = () => {
    //create new monsters (but no more than 12)
    if (monsterId < 12) {
        createMonster();
        addMonster();
    }
}

createPlayer();

//check for player demise, stop game, end timers if dead
const checkPlayerHp = () => {
    if (playerChar.hitPoints === 0) {
        clearInterval(updateColumns);
        clearInterval(newMonst);
        clearInterval(checkPlayerHitPoints);
        document.getElementById('footText').innerHTML = "Oh no! You lost... Maybe you'll join the undead.";
        document.querySelector('main').style.backgroundImage = "url('./images/defeat.jpg')"
    }
}

//monster dies: display none and set attack to 0
const checkMonstHp = () => {
    for (i = 0; i < monsterArr.length; i++) {
        if (monsterArr[i].hitPoints === 0){
            monsterArr[i].attack = 0;
            const deadAgainUndead = document.getElementById[i];
            deadAgainUndead.className += toggleDisplay;
        }
    }
}

//not firing just now; also needs some kind of limit so it can't be spammed
const playerKick = document.addEventListener('keydown', (event) => {
    // handle keydown
    for (i = 0; i < monsterArr.length; i++){
        if(monsterArr[i].startCol === 12){
            monsterArr[i].hitPoints -= playerChar.attack;
        }    
    }
})


const makeMonst = setInterval(freshMonster, 2500);

const updateColumns = setInterval(updateMonstCol, 200);
const checkPlayerHitPoints = setInterval(checkPlayerHp, 500);
const monsterAttack = setInterval(monsterHit, 500);
