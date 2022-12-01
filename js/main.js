

// Create an array for the roulette board 0-36 + 00

// Create arrays for:

// evens and odds
    if (number % 2 === 0) {
        return even
    } else {
        return odd
    }


// black or red
let blackOrRed =  function 
if (number > 0 && number < 11 && number === odd) {
    return red
} else if (number > 18 && number < 29 && number === odd) {
    return red
} else if (number > 10 && number < 19 && number === even) {
    return red
} else if (number > 28 && number < 37 && number === even) {
    return red
} else if (number === 0 || number === 00) {
    return green
} else {
    return black
}

// 1st 12, 2nd 12, 3rd 12

if (number > 0 && number < 13) {
    return 1st 12
} else if (number > 12 && number < 25) {
    return 2nd 12
} else if (number > 24 && number < 37) {
    return 3rd 12
} else {
    return null
}


// making a class for all the numbers
class PossibleNumbers {
    constructor(number) {
        this.number = number
        this.evenOrOdd = PossibleNumbers.evenOrOdd(number)
        this.color = 
        this.thirds = 
      }
      static evenOrOdd(num) {
        if (num % 2 === 0) {
            return even
        } else {
            return odd
        }
      }
}



// create a calculator that adds to your amount. 
// each type of 