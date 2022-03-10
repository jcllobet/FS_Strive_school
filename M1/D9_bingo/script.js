const USERNAMELIST = ['John', 'Maria', 'Alex', 'Marta', 'Job', 'Edgar', 'Albert', 'Aleix', 'Anna', 'Diego'];



const delay = ms => new Promise(res => setTimeout(res, ms));

let bingoNumbers = document.getElementsByClassName('bingo-number');
let userNumbers = document.getElementsByClassName('user-number');
let randonNumBtn = document.getElementById('numGenerator');

const generateBingoBoard = (num) => {
    let bingoContainer = document.getElementsByClassName('bingo-container')[0]
    for (let i = 1; i <= num; i++) {
        let bingoNumber = document.createElement('div')
        bingoNumber.classList.add('bingo-number')
        bingoNumber.innerText = i
        bingoContainer.appendChild(bingoNumber)
    }
}

let userHits = (userArr) => {
    let userHitsObj = {};
    for (let user of userArr) {
        for (let userNum of user.children) {
            if (userNum.classList.contains('highlighted')) {
                userHits++;
            }
        }
    }
    return userHits;
}

const countUserHits = (userArr) => {
    let userHits = {};
    for (let user of userArr) {
        for (let userNum of user.children) {
            if (userNum.classList.contains('highlighted')) {
                userHits++;
            }
        }
    }
    return userHits;
}

const generateRandomNum = async () => {
    let numbersGenerated = [];

    winner = false;
    while (!winner){
        await delay(500);
        let numberDisplay = document.getElementById('displayRandomNum')
        let randomNum = Math.ceil(Math.random() * 76)
        
        while (numbersGenerated.includes(randomNum)) {
            randomNum = Math.ceil(Math.random() * 76)
        }
        numberDisplay.innerHTML = `<p>${randomNum}</p>`
        numbersGenerated.push(randomNum)
        numbersGenerated.sort((a, b) => a - b);
        let numList = document.querySelector('.num-list');
        numList.innerHTML = `Numbers selected: ${numbersGenerated.join(', ')}`
        //unHighlightRandomNum()
        highlightRandomNum(randomNum)
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

            userBoard.innerText = userRandomNum;
        }
        userContainer.appendChild(userBoard);
    }
    
}

function onLoad() {
    generateBingoBoard(76);
    
    let users = 5;  
    //let users = parseInt(window.prompt("Input a number of users (Max 10):","1"));
    if (users > 10) {
        users = 10;
    }

    for (let i = 0; i < users; i++) {
        let user = USERNAMELIST[i]
        createUserBoard(user)
    }
    
    randonNumBtn.addEventListener('click', generateRandomNum);
}

window.onload = onLoad // Without brackets because we don't want to call it during the assignment