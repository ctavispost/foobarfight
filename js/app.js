console.log("Hello?");

//const playerChar = document.createElement('div');
//playerChar.setAttribute('class', 'player');
//document.querySelector('main').appendChild(playerChar);
let zombieCount = 0;

const createZombie = () => {
    const zombie = document.createElement('div');
    zombie.setAttribute('class', 'zombie');
    document.querySelector('main').appendChild(zombie);
    zombieCount++;
}

const zombTimer = setInterval(createZombie, 2000);
const zombCreateStop = setTimeout(clearInterval(zombTimer), 20000);

const zombMove = () => {
    const zoms = document.getElementsByClassName(zombie);
    for (i = 0; i < zombCreateStop.length; i++) {
 //       const position = zoms[i].setAttribute('class', '')
    }
}

const runGame = () => {

}