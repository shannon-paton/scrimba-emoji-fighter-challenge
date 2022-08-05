let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")
let player1 = document.getElementById("player-1")
let player2 = document.getElementById("player-2")

fightButton.addEventListener("click", function() {
    arrayLength = fighters.length

    // get random number from 0 to array length
    let randomNumber = Math.floor(Math.random() * arrayLength);



        // get random number from 0 to array length
    let randomNumber = Math.floor(Math.random() * arrayLength);

    // Challenge:
    // When the user clicks on the "Pick Fighters" button, pick two random 
    // emoji fighters and display them as i.e. "🦀 vs 🐢" in the "stage" <div>.
})
