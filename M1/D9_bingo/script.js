const PLAYERS = ['John', 'Maria', 'Alex', 'Marta', 'Job', 'Edgar', 'Albert', 'Aleix', 'Anna', 'Diego'];



const delay = ms => new Promise(res => setTimeout(res, ms));

let bingoNumbers = document.getElementsByClassName('bingo-number');
let userNumbers = document.getElementsByClassName('user-number');
let randonNumBtn = document.getElementById('numGenerator');
let numbersGenerated = [];
let winnerArr = [];


const generateBingoBoard = (num) => {
    let bingoContainer = document.getElementsByClassName('bingo-container')[0]
    for (let i = 1; i <= num; i++) {
        let bingoNumber = document.createElement('div')
        bingoNumber.classList.add('bingo-number')
        bingoNumber.innerText = i
        bingoContainer.appendChild(bingoNumber)
    }
}

const initializeUserBingos = () => {
    let userBingoObj = {
        set current(name) {
            this.log.push(name);
        },
    };
    PLAYERS.forEach( user => {
        userBingoObj[user] = [];
    });
    return userBingoObj
}

let userBingos = initializeUserBingos();

const containsAll = (arr1, arr2) => {
    for (let num of arr1) {
        if (!arr2.includes(num)) {
            return false;
        }
    }
    return true;
}

const checkWinner = () => {
    console.log(userBingos)
    PLAYERS.forEach(player => {
        if (userBingos[player].length >= 23){
            if (containsAll(userBingos[player], numbersGenerated)) {
                winnerArr.push(player);
            }
        }
    });
}

const generateRandomNum = async () => {

    while (winnerArr.length < 1) {
        await delay(10);
        let numberDisplay = document.getElementById('displayRandomNum')
        let randomNum = Math.ceil(Math.random() * 76)
        
        while (numbersGenerated.includes(randomNum)) {
            randomNum = Math.ceil(Math.random() * 76)
        }
        numberDisplay.innerHTML = `<p>${randomNum}</p>`
        numbersGenerated.push(randomNum)
        numbersGenerated.sort((a, b) => a - b);
        let numList = document.querySelector('.num-list');
        numList.innerHTML = `Numbers selected: ${numbersGenerated.join(', ')}`;
        highlightRandomNum(randomNum);

        if (numbersGenerated.length > 23) {
            checkWinner();
        }
        //unHighlightRandomNum()
    }
    
    if (winnerArr.length > 0) {
        let winner = winnerArr[0];
        alert(`${winner} won the game!`);
    }
    
}

const unHighlightRandomNum = () => {
    for (bingoNum of bingoNumbers) {
        for (classList of bingoNum.classList) {
            if (classList === 'highlighted') {
                bingoNum.classList.remove('highlighted')
            }
        }
    }
    for (userNum of userNumbers) {
        for (classList of userNum.classList) {
            if (classList === 'highlighted') {
                userNum.classList.remove('highlighted')
            }
        }
    }
}

const highlightRandomNum = (number) => {
    for (let bingoNum of bingoNumbers) {
        if (bingoNum.innerText == number) {
            bingoNum.classList.add('highlighted')
        }
    }
    for (let userNum of userNumbers) {
        if (userNum.innerText == number) {
            userNum.classList.add('highlighted')
        }
    }
}

const createUserBoard = (user) => {
    let target = document.getElementsByClassName('users-playroom')[0];

    let userContainer = document.createElement('div');
    userContainer.classList.add('userboard-container');
    target.appendChild(userContainer);

    let title = document.createElement('h3');
    title.classList.add('userboard-name')
    title.innerText = `${user}'s board`;
    userContainer.appendChild(title);

    let alreadyGenerated = [];

    for (let i = 0; i <= 24; i++) {
        let userBoard = document.createElement('div');
        userBoard.classList.add('user-number')
        if (i===12) {
            userBoard.innerText = 'FREE';
            userBoard.classList.add('highlighted')
        } else {
            let userRandomNum = Math.ceil(Math.random() * 76);

            // Make sure no duplicate numbers are generated
            while (alreadyGenerated.includes(userRandomNum)) {
                userRandomNum = Math.ceil(Math.random() * 76);
            }

            //add generated number to array
            alreadyGenerated.push(userRandomNum);

            // add the number to the user bingo
            userBingos[user].push(userRandomNum);

            userBoard.innerText = userRandomNum;
        }
        userContainer.appendChild(userBoard);
    }
    
}

function onLoad() {
    generateBingoBoard(76);
    
    let numUsers = parseInt(window.prompt("Input a number of users (Max 10):","1"));
    if (numUsers > 10) {
        numUsers = 10;
    }
    for (let i = 0; i < numUsers; i++) {
        let user = PLAYERS[i]
        createUserBoard(user)
    }
    
    randonNumBtn.addEventListener('click', generateRandomNum);
}

window.onload = onLoad // Without brackets because we don't want to call it during the assignment