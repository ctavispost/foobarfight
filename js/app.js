console.log("Hello?");

//const playerChar = document.createElement('div');
//playerChar.setAttribute('class', 'player');
//document.querySelector('main').appendChild(playerChar);

const monsters = [{type: 'zombie', attack: 1, position: 1}];

let playerHP = 20;

const createZombie = () => {
    const zombie = document.createElement('div');
    zombie.setAttribute('class', 'zombie');
    document.querySelector('main').appendChild(zombie);
    const monsterObj = {type: 'zombie', attack: 1, position: 1};
    monsters.push(monsterObj)
}

const zombTimer = setInterval(createZombie, 2000);
const zombCreateStop = setTimeout(clearInterval(zombTimer), 20000);

// move zombies toward player char, increasing position if to the right, and decreasing position if to the left
//MVP will only concern itself with monsters to the right
const monstersMove = (counter) => {
    if (monsters[counter].position < 6){
        monsters[counter].postion++;                
    } //for attacks from either side:
    /*else if (monsters[counter].position > 7) {
        monsters[counter].position--;
    }*/
    const positionName = `zombieLoc${monsters[counter].postion}`
    const zoms = document.getElementsByClassName('zombie');
    const position = zoms[counter].setAttribute('class', positionName);
}

const getDamage = (place) => {
    if (monsters[place].position === 6) { //for dual sided attacks: (7 || 6)) {
        playerHP -= monsters[place].attack;
    }
}

const monstersTurn = () => {
    if (monsters.length !== 0){
        for (i = 0; i < monsters.length; i++) {
            monstersMove(i);
            getDamage(i);
        }
    }
}

const timeTurns = setInterval(monstersTurn, 2000);

const checkHealth = () => {
    if (playerHP === 0) {
        clearInterval(timeTurns);
    } 
}

const runGame = () => {
    zombTimer;
    zombCreateStop;
    timeTurns;
}

runGame();