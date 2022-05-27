
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = " "
const messageEl = document.getElementById("message-el")
const sumEl = document.querySelector("#sum-el")
const cardEl = document.querySelector("#card-el")

let player = {
    person:"John",
    chips: 500
}
const playerEl = document.querySelector("#player-el")


playerEl.textContent = player.person +  ":  $" + player.chips


function getRandomCard() {
    let randomNumber =  Math.floor(Math.random()*13) + 1  
    if (randomNumber === 1){
        return 11
    }else if (randomNumber > 10){
        return 10
    }else {
       return randomNumber
    }
}
console.log(cards);


function startGame() {
    isAlive = true
    let firstNumber = getRandomCard()
    let secondNumber = getRandomCard()
    cards = [firstNumber, secondNumber],
    sum = firstNumber + secondNumber
renderGame()
}

function renderGame() {
cardEl.textContent = "Cards: " 
for (let i = 0; i <  cards.length; i++) {
    cardEl.textContent += cards[i] + " "
}

sumEl.textContent = "Sum: " + sum
if (sum <= 20) {
    message = ("Do you want to draw a new card ?");
   } else if (sum === 21) {
       message = ("Wohoo! You've got blackjack!!!");
       hasBlackJack = true
   } else {
       message = ("You're out of the game!");
       isAlive = false
   }
messageEl.textContent = message
}
function newCard() {

if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard()
    sum += card
    cards.push(card)
    console.log(card);
    renderGame()
}

}