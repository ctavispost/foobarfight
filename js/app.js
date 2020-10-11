//keep track to be able to limit number of monsters
let monsterCount = 0
let monstersBeat = 0
const totalMonst = 12

//contains objects with details about monsters
const monstersArr = []


//creates 12 monsters, one at a time; pushes to monstersArr
const monsterAppears = () =>{
    if (monsterCount < totalMonst){
        const firstStep = document.getElementById('spot0')
        firstStep.classList.add('monster')
        monsterCount++
        monstersArr.push({
            type: 'zombie', 
            steps: 1
        })    
    }
}



//to create monster movement, removes monster from old spot and place one column to the left
const monstersMove = () => {
    for(i = 0; i < monsterCount; i++){
        if(monstersArr[i].steps < 12){
            const stepCount = monstersArr[i].steps++;
            const leaveGridSpot = document.getElementById(`spot${stepCount - 1}`).classList.remove("monster")
            const newSpot = document.getElementById(`spot${stepCount}`).classList.add("monster")
        }
    }
}

const playerChar = {
    type: 'player',
    hitPoints: 20
}

//monsterts attack once they reach the player character
const monsterHit = () => {
    for (i = 0; i < monstersArr.length; i++) {
        if(monstersArr[i].steps === 12) {
            playerChar.hitPoints--
        }
    }
}

const createPlayer = () => {
    const playerSpot = document.getElementById('spot12')
    playerSpot.setAttribute('class', 'player')
} 

//clear intervals on win or loss
const endgame = () => {
    clearInterval(monsterAppears)
    clearInterval(monstersMove)
    clearInterval(checkPlayerHp)
    clearInterval(monsterHit)
}

//check number of monsters beat up, if it equals goal, end game and declare victory
const checkMonstersBeat = () => {
    if (monstersBeat === totalMonst){
        endgame;
        document.getElementById('footText').innerHTML = "You won! You're still alive and your bar is safe... for now."
        document.querySelector('main').style.backgroundImage = "url('./images/victory.jpg')"
    }
    

}

//check for player demise or victory, stop game, end timers if dead
const checkPlayerHp = () => {
    if (playerChar.hitPoints === 0) {
        endgame
        document.getElementById('footText').innerHTML = "Oh no! You lost... Maybe you'll join the undead."
        document.querySelector('main').style.backgroundImage = "url('./images/defeat.jpg')"
    }
}

//removes first item of monstersArr & monster class from 12th column, adds to monstersBeat count; there should be a better solution, leaving the column red if more than one monster is there
const hitMonster = () => {
    for (i = 0; i < monstersArr.length; i++){
        if(monstersArr[i].steps === 12) {
            document.getElementById("spot11").classList.remove('monster')
            monstersArr.shift()
            monstersBeat++
        }
    }
}

createPlayer();

//player attacks on mouse-click
const getBody = document.querySelector("body")
getBody.addEventListener('click', hitMonster)

//monsters appear every 2.5 seconds
const newMonster = setInterval(monsterAppears, 2500)
//monsters move once a second
const moveMonsters = setInterval(monstersMove, 1000)

const checkPlayerHitPoints = setInterval(checkPlayerHp, 500)
const checkMonstersBeat = setInterval(checkMonstersBeat, 500)
const monsterAttack = setInterval(monsterHit, 500)

//old code
//get main element to append new elements to
//const mainEl = document.querySelector('main');

/*
const createMonster = () => {
    const monster = document.createElement('div');
    monster.setAttribute('class', 'monster');

  //set new monster's ID to a trackable number
    monster.setAttribute('id', `monstId${monsterId}`);
    //right now this is just appending to the first empty grid space
    mainEl.appendChild(monster);
}
*/
//add monster object to monster array
/*
const addMonster = () => {
    //advance monster tracker
    monsterId++;
    monsterArr.push({
        type: 'zombie',
        attack: 1,
        hitPoints: 4
    });
}
*/

//move monster on screen by advancing along grid columns
/*const updateMonstCol = () => {
    for (i = 0; i < monsterArr.length; i++){
        if(monsterArr[i].colStart < 12){
            const oldStart = monsterArr[i].colStart;
            monsterArr[i].colStart++;
            monsterArr[i].colEnd++;
            
            
            //console.log(monsterIdString)  
            const monsterInCss = document.getElementById(`monstId${i}`);
            //console.log(`monstId${i}`);
            //console.log(MonsterInCss);

            monsterInCss.style.gridColumnStart = monsterArr[i].colStart;
            monsterInCss.style.gridColumnEnd = monsterArr[i].colEnd;
            const leaveSpot = document.getElementById(`monstId${i - 1}`).classList.remove('monster');
            
            //console.log(MonsterInCss);
            
        } else {
            const twelve = 12;
            const thirteen = 13;
            monsterArr[i].colStart = twelve;
            monsterArr[i].colEnd = thirteen;
        }
    }
}
*/

/*
const freshMonster = () => {
    //create new monsters (but no more than 12)
    if (monsterId < 12) {
        createMonster();
        addMonster();
    }
}
*/

/*
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
            const monstToKill = document.getElementById(`monstId${1}`);
            monstToKill.remove();
            //monsterArr[i].hitPoints -= playerChar.attack;
        }    
    }
})
*/

/*
const makeMonst = setInterval(freshMonster, 2500);

const updateColumns = setInterval(updateMonstCol, 200);
*/