let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")
let player1 = document.getElementById("player-1")
let player2 = document.getElementById("player-2")

fightButton.addEventListener("click", function() {
    arrayLength = fighters.length

    // get random number from 0 to array length
    let randomNumber1 = Math.floor(Math.random() * arrayLength);
    player1.innerHTML = fighters[randomNumber1]

        // get random number from 0 to array length
    let randomNumber2 = Math.floor(Math.random() * arrayLength);
    player2.innerHTML = fighters[randomNumber2]

    // Challenge:
    // When the user clicks on the "Pick Fighters" button, pick two random 
    // emoji fighters and display them as i.e. "🦀 vs 🐢" in the "stage" <div>.
})
