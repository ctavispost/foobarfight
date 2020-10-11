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
        getBody.removeEventListener('click', hitMonster)
        document.getElementById("spot12").classList.remove('player')

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
const checkAllMonstersBeat = setInterval(checkMonstersBeat, 500)
const monsterAttack = setInterval(monsterHit, 500)