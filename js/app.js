console.log("Hello?");

//const playerChar = document.createElement('div');
//playerChar.setAttribute('class', 'player');
//document.querySelector('main').appendChild(playerChar);
let zombieCount = 0;
const monsters = [];

const createZombie = () => {
    const zombie = document.createElement('div');
    zombie.setAttribute('class', 'zombie');
    document.querySelector('main').appendChild(zombie);
    zombieCount++;
    const monsterObj = {type: 'zombie', attack: 1, position: 1};
    monsters.push(monsterObj)
}

const zombTimer = setInterval(createZombie, 2000);
const zombCreateStop = setTimeout(clearInterval(zombTimer), 20000);

const monstersMove = () => {
    const zoms = document.getElementsByClassName(zombie);
    for (i = 0; i < zoms.length; i++) {
        monsters[i].postion += 1;
        const positionName = `zombieLoc ${monsters[i].postion}`
        const position = zoms[i].setAttribute('class', 'positionName');
    }
}

const runGame = () => {

}