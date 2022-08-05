let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")
let player1 = document.getElementById("player-1")
let player2 = document.getElementById("player-2")

fightButton.addEventListener("click", function() {
    arrayLength = fighters.length

    // get random number from 0 to array length
    stage.innerHTML = `? vs ?`

    let randomNumber1 = Math.floor(Math.random() * arrayLength);
    let randomNumber2 = Math.floor(Math.random() * arrayLength);

    let player1Fighter = fighters[randomNumber1]
    let player2Fighter = fighters[randomNumber2]

    stage.innerHTML = `${player1Fighter} vs ${player2Fighter}`
})
