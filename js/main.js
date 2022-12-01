
const spinBtnEl = document.querySelector(".spinBtn")
const numberWindowEl = document.querySelector(".numberWindow")
let oddsAre
let theColorIs


spinBtnEl.addEventListener("click", randomNum)
spinBtnEl.addEventListener("click", evenOrOdd)
spinBtnEl.addEventListener("click", blackOrRed)


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