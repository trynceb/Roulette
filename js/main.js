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
const wheel = document.querySelector(".wheel");

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
spinBtnEl.addEventListener("click", function() {
    wheel.classList.add("spin");
});

// Spin button event handler
function spinTheWheel() {
    if (!validBet()) return;
    let randomNumber =  Math.floor(Math.random() * 36) + 1;
    numberEl.innerHTML = randomNumber;
    oddsAre = (randomNumber % 2 === 0) ? 'even' : 'odd';
    theColorIs = (randomNumber >=1 && randomNumber <= 10 && randomNumber % 2 === 1 || (randomNumber >= 11 && randomNumber <= 18 && randomNumber % 2 === 0)) ? 'red' : 'black';
    splitBet();
    numberWindowEl.style.backgroundColor = (theColorIs === 'red') ? '#D60000' : 'black';

    if (redChipEl.style.zIndex === "4") {
        bettingRed();
    }
    if (blackChipEl.style.zIndex === "4") {
        bettingBlack();
    }
    if (evenChipEl.style.zIndex === "4") {
        bettingEven();
    }
    if (oddChipEl.style.zIndex === "4") {
        bettingOdd();
    }
    doubleLoss();
    updateAccount();
}

// checks to see if a valid bet has been placed
function validBet() {
    return redChipEl.style.zIndex === "4" || blackChipEl.style.zIndex === "4" || evenChipEl.style.zIndex === "4" || oddChipEl.style.zIndex === "4"
}

// splits the bet if multiple bets are placed
function splitBet() {
    if (redChipEl.style.zIndex === "4" && oddChipEl.style.zIndex === "4") {
        numberInputEl.value /= 2;
    }
    else if (redChipEl.style.zIndex === "4" && evenChipEl.style.zIndex === "4") {
        numberInputEl.value /= 2;
    }
    else if (blackChipEl.style.zIndex === "4" && oddChipEl.style.zIndex === "4") {
        numberInputEl.value /= 2;
    }
    else if (blackChipEl.style.zIndex === "4" && evenChipEl.style.zIndex === "4") {
        numberInputEl.value /= 2;
    }
}

// handles red chip bet
function bettingRed() {
    if (theColorIs === "red") {
        winLoseEl.innerHTML = "You Win!"
        oddsResultEl.innerHTML = "Odds: 2/1"
        bankAccount += numberInputEl.value * 2
    }
    else {
        winLoseEl.innerHTML = "You Lose!"
        oddsResultEl.innerHTML = "Odds: 2/1"
        bankAccount -= numberInputEl.value
    }
}

// handles black chip bet
function bettingBlack() {
    if (theColorIs === "black") {
        winLoseEl.innerHTML = "You Win!"
        oddsResultEl.innerHTML = "Odds: 2/1"
        bankAccount += numberInputEl.value * 2
    }
    else {
        winLoseEl.innerHTML = "You Lose!"
        oddsResultEl.innerHTML = "Odds: 2/1"
        bankAccount -= numberInputEl.value
    }
}

// handles even chip bet
function bettingEven() {
    if (oddsAre === "even") {
        winLoseEl.innerHTML = "You Win!"
        oddsResultEl.innerHTML = "Odds: 2/1"
        bankAccount += numberInputEl.value * 2
    }
    else {
        winLoseEl.innerHTML = "You Lose!"
        oddsResultEl.innerHTML = "Odds: 2/1"
        bankAccount -= numberInputEl.value
    }
}

// handles odd chip bet
function bettingOdd() {
    if (oddsAre === "odd") {
        winLoseEl.innerHTML = "You Win!"
        oddsResultEl.innerHTML = "Odds: 2/1"
        bankAccount += numberInputEl.value * 2
    }
    else {
        winLoseEl.innerHTML = "You Lose!"
        oddsResultEl.innerHTML = "Odds: 2/1"
        bankAccount -= numberInputEl.value
    }
}

// handles double loss
function doubleLoss() {
    if (theColorIs === "red" && oddsAre === "even") {
        bankAccount -= numberInputEl.value
    }
    else if (theColorIs === "black" && oddsAre === "odd") {
        bankAccount -= numberInputEl.value
    }
}

// updates account balance
function updateAccount() {
    accountEl.innerHTML = bankAccount
    moneyEl.innerHTML = bankAccount
}

