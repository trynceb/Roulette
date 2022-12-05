
const spinBtnEl = document.querySelector(".spinBtn")
const numberWindowEl = document.querySelector(".numberWindow")
const numberEl = document.querySelector(".number")
const redEl = document.querySelector(".left-bet")
const blackEl = document.querySelector(".right-bet")
const winLoseEl = document.querySelector(".winLose")
const moneyEl = document.querySelector(".money")

const redChipEl = document.getElementById("red-chip")
const blackChipEl = document.getElementById("black-chip")

let oddsAre
let theColorIs
let numberInputEl = document.querySelector(".numberInput")
let accountEl = document.querySelector(".account")
let bankAccount = 500

spinBtnEl.addEventListener("click", spinTheWheel)
redEl.addEventListener("click", placeBetRed)
blackEl.addEventListener("click", placeBetBlack)
numberInputEl.addEventListener("input", stringToNumber)



function spinTheWheel() {
    if (redChipEl.style.zIndex === "4" || blackChipEl.style.zIndex === "4") {
        randomNum()
        evenOrOdd()
        blackOrRed()
        bettingRed()
        bettingBlack()
    } else {
        return
    }
}

function randomNum() {
    let randomNumber =  Math.floor(Math.random() * 36) + 1
    numberEl.innerHTML = randomNumber
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
    if (number > 0 && number < 11 && isOdd === "odd") {
        theColorIs = "red"
        backColor = "#D60000"
    } else if (number > 10 && number < 19 && isOdd === "even") {
        theColorIs = "red"
        backColor = "#D60000"
    } else if (number > 18 && number < 29 && isOdd === "odd") {
        theColorIs = "red"
        backColor = "#D60000"
    } else if (number > 28 && number < 37 && isOdd === "even") {
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
    if (redChipEl.style.zIndex === "4" && theColorIs === "red") {
        winLoseEl.innerHTML = "You win!"
        numberInputEl.value *= 2
        bankAccount = parseInt(bankAccount) + parseInt(numberInputEl.value)
        redChipEl.style.zIndex = "0"
        // return accountEl

    } else if (redChipEl.style.zIndex === "4" && theColorIs === "black") {
        winLoseEl.innerHTML = "Sorry, you lose."
        bankAccount = parseInt(bankAccount) - numberInputEl.value
        numberInputEl.value -= numberInputEl.value
        redChipEl.style.zIndex = "0"
        // return accountEl
    }
}

function bettingBlack() {
    if (blackChipEl.style.zIndex === "4" && theColorIs === "black") {
        winLoseEl.innerHTML = "You win!"
        numberInputEl.value *= 2
        bankAccount = parseInt(bankAccount) + parseInt(numberInputEl.value)
    } else if (blackChipEl.style.zIndex === "4" && theColorIs === "red") {
        winLoseEl.innerHTML = "Sorry, you lose."
        bankAccount = parseInt(bankAccount) - numberInputEl.value
        numberInputEl.value -= numberInputEl.value
    }
    blackChipEl.style.zIndex = "0"
}

// Handle number changes
function stringToNumber() {
    // As a number
    let num = numberInputEl.valueAsNumber
    return num
};

    
    // add an input
    //Choose bet, max amount cannot > than your amount and cannot be less than $1.

//your amount starts at $100
//betting amount = amount enter
// your amount = your amount - betting amount
//if win  your amount = your amount + (betting amount * 2)



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

