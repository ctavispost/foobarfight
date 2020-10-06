console.log("Hello?");

//const playerChar = document.createElement('div');
//playerChar.setAttribute('class', 'player');
//document.querySelector('main').appendChild(playerChar);

const monsters = [];

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
const monstersMove = () => {
    const zoms = document.getElementsByClassName(zombie);
    if (zoms.length > 0){
        for (i = 0; i < zoms.length; i++) {
            if (monsters[i].position < 6){
                monsters[i].postion++;                
            } else if (monsters[i].position > 7) {
                monsters[i].position--;
            }
            const positionName = `zombieLoc${monsters[i].postion}`
            const position = zoms[i].setAttribute('class', 'positionName');
        }
    }
}

const getDamage = () => {
    if ()
}

const timeMoves = setInterval(monstersMove, 500);

const runGame = () => {
    zombTimer;
    zombCreateStop;
    timeMoves;
}