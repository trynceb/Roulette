
const spinBtnEl = document.querySelector(".spinBtn")
const numberWindowEl = document.querySelector(".numberWindow")
const redEl = document.querySelector(".left-bet")
const blackEl = document.querySelector(".right-bet")
const winLoseEl = document.querySelector(".winLose")
const moneyEl = document.querySelector(".money")
const redChipEl = document.getElementById("red-chip")
const blackChipEl = document.getElementById("black-chip")
let oddsAre
let theColorIs


spinBtnEl.addEventListener("click", randomNum)
spinBtnEl.addEventListener("click", evenOrOdd)
spinBtnEl.addEventListener("click", blackOrRed)
spinBtnEl.addEventListener("click", bettingRed)
spinBtnEl.addEventListener("click", bettingBlack)
redEl.addEventListener("click", placeBetRed)
blackEl.addEventListener("click", placeBetBlack)


function randomNum() {
    let randomNumber =  Math.floor(Math.random() * 36) + 1
    numberWindowEl.innerHTML = randomNumber
    return randomNumber
}

function evenOrOdd() {
    let isEven = numberWindowEl.textContent
    if (isEven % 2 == 0) {
        oddsAre = "even"
    } else {
        oddsAre = "odd"
    }
}

function blackOrRed() {
    let number = numberWindowEl.textContent
    let isOdd = oddsAre
    let backColor
    if (number > 0 && number < 11 && isOdd == "odd") {
        theColorIs = "red"
        backColor = "#D60000"
    } else if (number > 10 && number < 19 && isOdd == "even") {
        theColorIs = "red"
        backColor = "#D60000"
    } else if (number > 18 && number < 29 && isOdd == "odd") {
        theColorIs = "red"
        backColor = "#D60000"
    } else if (number > 28 && number < 37 && isOdd == "even") {
        theColorIs = "red"
        backColor = "#D60000"
    } else {
        theColorIs = "black"
        backColor = "#232323"
    }
    numberWindowEl.style.backgroundColor = backColor
}

function placeBetRed() {
    redChipEl.style.zIndex = "4"
    blackChipEl.style.zIndex ="0"
}

function placeBetBlack() {
    blackChipEl.style.zIndex = "4"
    redChipEl.style.zIndex = "0"
}

function bettingRed() {
    if (redChipEl.style.zIndex == "4" && theColorIs == "red") {
        winLoseEl.innerHTML = "You win!"
        moneyEl.innerHTML = moneyEl.innerHTML * 2
    } else if (redChipEl.style.zIndex == "4" && theColorIs == "black") {
        winLoseEl.innerHTML = "Sorry, you lose."
        moneyEl.innerHTML = 100 
    }
    redChipEl.style.zIndex = "0"
}

function bettingBlack() {
    if (blackChipEl.style.zIndex == "4" && theColorIs == "black") {
        winLoseEl.innerHTML = "You win!"
        moneyEl.innerHTML = moneyEl.innerHTML * 2 
        blackChipEl.style.zIndex = "0"
    } else if (blackChipEl.style.zIndex == "4" && theColorIs == "red") {
        winLoseEl.innerHTML = "Sorry, you lose."
        moneyEl.innerHTML = 100
        blackChipEl.style.zIndex = "0"
    }
}


// Create an array for the roulette board 0-36 + 00

// Create arrays for:

// evens and odds


// 1st 12, 2nd 12, 3rd 12

// if (number > 0 && number < 13) {
//     return 1st 12
// } else if (number > 12 && number < 25) {
//     return 2nd 12
// } else if (number > 24 && number < 37) {
//     return 3rd 12
// } else {
//     return null
// }


// making a class for all the numbers
// class PossibleNumbers {
//     constructor(number) {
//         this.number = number
//         this.evenOrOdd = PossibleNumbers.evenOrOdd(number)
//         this.color = 
//         this.thirds = 
//       }
//       static evenOrOdd(num) {
//         if (num % 2 === 0) {
//             return even
//         } else {
//             return odd
//         }
//       }
// }



// create a calculator that adds to your amount. 
// each type of 