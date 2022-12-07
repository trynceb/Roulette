
const spinBtnEl = document.querySelector(".spinBtn")
const numberWindowEl = document.querySelector(".numberWindow")
const numberEl = document.querySelector(".number")
const redEl = document.querySelector(".left-bet")
const blackEl = document.querySelector(".right-bet")
const redChipEl = document.getElementById("red-chip")
const blackChipEl = document.getElementById("black-chip")
const evenEl = document.querySelector(".even-bet")
const oddEl = document.querySelector(".odd-bet")
const evenChipEl = document.getElementById("even-chip")
const oddChipEl = document.getElementById("odd-chip")
const winLoseEl = document.querySelector(".winLose")
const oddsResultEl = document.querySelector(".oddsResult")
const moneyEl = document.querySelector(".money")

let theColorIs
let oddsAre
let numberInputEl = document.querySelector(".numberInput")
let accountEl = document.querySelector(".account")
let bankAccount = 500
accountEl.innerHTML = bankAccount

spinBtnEl.addEventListener("click", spinTheWheel)
redEl.addEventListener("click", placeBetRed)
blackEl.addEventListener("click", placeBetBlack)
evenEl.addEventListener("click", placeBetEven)
oddEl.addEventListener("click", placeBetOdd)
numberInputEl.addEventListener("input", stringToNumber)

// animation to run though colors in number window
// $(".spinBtn").click(function() {
//     $('.numberWindow').toggleClass('numberWindow-active');
//   });


console.log(numberInputEl.value)
console.log(bankAccount)
// activates spin wheel button, calls all the functions after bet is placed
function spinTheWheel() {
    if (redChipEl.style.zIndex === "4" || blackChipEl.style.zIndex === "4" || evenChipEl.style.zIndex === "4" || oddChipEl.style.zIndex === "4") {
        randomNum()
        splittingTheBet()
        evenOrOdd()
        blackOrRed()
        bettingRed()
        bettingBlack()
        bettingEven()
        bettingOdd()
        doubleLoss()
    } else {
        return
    }
}

// provides the random number
function randomNum() {
    let randomNumber =  Math.floor(Math.random() * 36) + 1
    numberEl.innerHTML = randomNumber
    return randomNumber
}

// splits the value of the input accross both bets
function splittingTheBet() {
    if (winLoseEl.innerHTML === "Sorry, you lose this bet." && oddsResultEl.innerHTML === "Sorry, you lose this bet.") {
    } else if (redChipEl.style.zIndex === "4" && oddChipEl.style.zIndex === "4") {
        numberInputEl.value /= 2
    } else if (redChipEl.style.zIndex === "4" && evenChipEl.style.zIndex === "4") {
        numberInputEl.value /= 2
    } else if (blackChipEl.style.zIndex === "4" && oddChipEl.style.zIndex === "4") {
        numberInputEl.value /= 2
    } else if (blackChipEl.style.zIndex === "4" && evenChipEl.style.zIndex === "4") {
        numberInputEl.value /= 2
    } else {
        return
    }
}

// checks to see if random number is even or odd
function evenOrOdd() {
    let isEven = numberWindowEl.textContent
    if (isEven % 2 == 0) {
        oddsAre = "even"
    } else {
        oddsAre = "odd"
    }
}

// asigns each number with a color and changes the background to said color in the window
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

// can only bet red and not black
function placeBetRed() {
    redChipEl.style.zIndex = "4"
    blackChipEl.style.zIndex ="0"
}

// can only bet black and not red
function placeBetBlack() {
    blackChipEl.style.zIndex = "4"
    redChipEl.style.zIndex = "0"
}

// runs if you bet red win/lose then adds or subtracts betting value from bank acount
function bettingRed() {
    console.log("this is bankAccount before red", bankAccount)
    console.log("this is numberInput before red", numberInputEl.value)
    if (redChipEl.style.zIndex === "4" && theColorIs === "red") {
        winLoseEl.innerHTML = "It's red! You win!"
        accountEl.innerHTML = parseInt(bankAccount) + parseInt(numberInputEl.value)
        bankAccount = parseInt(bankAccount) + parseInt(numberInputEl.value)
    } else if (redChipEl.style.zIndex === "4" && theColorIs === "black") {
        winLoseEl.innerHTML = "I'm sorry, you lose this bet."
        accountEl.innerHTML = parseInt(bankAccount) - numberInputEl.value
        bankAccount = parseInt(bankAccount) - parseInt(numberInputEl.value)
        numberInputEl.value -= numberInputEl.value
        console.log("this is bankAccount after red", bankAccount)
        console.log("this is numberInput after red", numberInputEl.value)
    }
    redChipEl.style.zIndex = "0"

}

// runs if you bet black win/lose then adds or subtracts betting value from bank acount
function bettingBlack() {
    if (blackChipEl.style.zIndex === "4" && theColorIs === "black") {
        winLoseEl.innerHTML = "It's black! You win!"
        numberInputEl.value *= 2
        accountEl.innerHTML = parseInt(bankAccount) + parseInt(numberInputEl.value)
        bankAccount = parseInt(bankAccount) + parseInt(numberInputEl.value)
    } else if (blackChipEl.style.zIndex === "4" && theColorIs === "red") {
        winLoseEl.innerHTML = "I'm sorry, you lose this bet."
        accountEl.innerHTML = parseInt(bankAccount) - numberInputEl.value
        bankAccount = parseInt(bankAccount) - parseInt(numberInputEl.value)
        numberInputEl.value -= numberInputEl.value
    }
    blackChipEl.style.zIndex = "0"
}

// can only bet even and not odd
function placeBetEven() {
    evenChipEl.style.zIndex = "4"
    oddChipEl.style.zIndex ="0"
}

// can only bet odd and not even
function placeBetOdd() {
    oddChipEl.style.zIndex = "4"
    evenChipEl.style.zIndex = "0"
}

// runs if you bet even win/lose then adds or subtracts betting value from bank acount
function bettingEven() {
    console.log("this is bankAccount before even", bankAccount)
    console.log("this is numberInput before even", numberInputEl.value)
    if (evenChipEl.style.zIndex === "4" && oddsAre === "even") {
        oddsResultEl.innerHTML = "It's even! You win!"
        // numberInputEl.value *= 2
        accountEl.innerHTML = parseInt(bankAccount) + parseInt(numberInputEl.value)
        bankAccount = parseInt(bankAccount) + parseInt(numberInputEl.value)
    } else if (evenChipEl.style.zIndex === "4" && oddsAre === "odd") {
        oddsResultEl.innerHTML = "I'm sorry, you lose this bet."
        accountEl.innerHTML = parseInt(bankAccount) - numberInputEl.value
        bankAccount = parseInt(bankAccount) - parseInt(numberInputEl.value)
        numberInputEl.value -= numberInputEl.value
        console.log("this is bankAccount after even", bankAccount)
        console.log("this is numberInput after even", numberInputEl.value)
    }
    evenChipEl.style.zIndex = "0"
}

// runs if you bet odd win/lose then adds or subtracts betting value from bank acount
function bettingOdd() {
    console.log("this is the HTML", accountEl.innerHTML)
    console.log("this is the bank account", bankAccount)
    if (oddChipEl.style.zIndex === "4" && oddsAre === "odd") {
        oddsResultEl.innerHTML = "It's odd! You win!"
        numberInputEl.value *= 2
        accountEl.innerHTML = parseInt(bankAccount) + parseInt(numberInputEl.value) 
        bankAccount = parseInt(bankAccount) + parseInt(numberInputEl.value)
    } else if (oddChipEl.style.zIndex === "4" && oddsAre === "even") {
        oddsResultEl.innerHTML = "I'm sorry, you lose this bet."
        accountEl.innerHTML = parseInt(bankAccount) - numberInputEl.value
        bankAccount = parseInt(bankAccount) - parseInt(numberInputEl.value)
        numberInputEl.value -= numberInputEl.value
    }
    oddChipEl.style.zIndex = "0"
    console.log(numberInputEl.value)
    console.log("this is the HTML", accountEl.innerHTML)
    console.log("this is the bank account", bankAccount)
}

// Handle number changes for the input bet
function stringToNumber() {
    // As a number
    let num = numberInputEl.valueAsNumber
    return num
};

function doubleLoss() {
    if (winLoseEl.innerHTML === "I'm sorry, you lose this bet." && oddsResultEl.innerHTML === "I'm sorry, you lose this bet.") {
        numberInputEl.value *= 2
    } else {
        return
    }
}  
    
// button to refresh the page
function refreshPage(){
    window.location.reload();
} 


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

