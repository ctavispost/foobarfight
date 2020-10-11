# Foo Bar Fight

'Foo Bar Fight' is a simplified tribute to early beat-em-ups like 'Kung Fu' on the NES. It takes visual inspiration from early Atari and GameBoy games.

You play as a bartender and martial artist whose bar is under siege by monsters! You can kick them to destroy the fiends and protect your booze. But being touched by monsters slowly drains your hit-points. Don't die! Take out all the creatures of the night, and drink to your health.

[Play the game!](https://ctavispost.github.io/foobarfight/) 

## Gameplay
Click on the space in front of your player (the purple rectangle) to fight off the red monsters. Do it quickly, or you might die.

## Making of
This game was made using HTML, CSS, and Javascript, all vanilla (straight, no chaser). FBF relies heavily upon grid areas. Without it the monsters wouldn't be able to move, and what fun would that be?

The background was drawn (from a [unsplash stock photo](https://images.unsplash.com/photo-1583227061267-8428fb76fbfd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=957&q=80) by Oliver Frsh @frshmn) in Autodesk Skethcbook on an iPad, and then pixelated in 8Bit Photo Lab.

## MVP
The MVP includes one type of monster (zombies, naturally) which will advance on the hero and then drain his hp.The he can attack nearby monsters to defend themselves. Victory ends the game and bring a fitting message and background. Death, at this moment, is not final.

## Icebox
Nice-to-haves include: 
- more types of monsters to fight
- high, mid, and low attacks for the player character mapped to keys and mouse buttons
-a player select screen 
- animated attacks
- a choice between old school graphics and svg drawings
- start and pause screens
- a wider stage with monsters advancing from in front and back of the player

As a former gametester, I'd also like to fix the buggy movement of the monsters and make the loss condition permanent and predictable.

Eventually, the player character should be mobile.

## User stories

As a player, I want to...so that...and this is of ____ importance):
- start game...I can play...high
- attack monsters...stop monsters from hurting my player character...high
- view controls...I know how to play...high
- see hit points...death does not surprise me...medium
- pause game...I can take a break...medium
- see when I have won or lost ... I know game is over...medium
- attack high low or mid...I can defeat monsters that are only at head or foot height...low
- choose fighter...I feel more in-control...low
- choose difficulty...control challenge...low
- know victory and loss conditions...so I know the game has a stopping point...low

## Sketches
![sketches](https://raw.githubusercontent.com/ctavispost/foobarfight/main/images/sketches.jpg "gameplay sketches")
![wireframes and flow](https://raw.githubusercontent.com/ctavispost/foobarfight/main/images/PXL_20201002_222501520.jpg "wireframes with flow")

## Screenshots
![gameplay](https://raw.githubusercontent.com/ctavispost/foobarfight/main/images/screeenshot.jpg "gameplay")
![victory](https://raw.githubusercontent.com/ctavispost/foobarfight/main/images/victoryScreen.jpg "victory")
![loss](https://raw.githubusercontent.com/ctavispost/foobarfight/main/images/lossScreen.jpg "loss")

## Code snippet
```//creates 12 monsters, one at a time; pushes to monstersArr
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
}```