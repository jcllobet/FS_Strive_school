const generateBinogBoard = (num) => {
    let bingoContainer = document.getElementsByClassName('bingo-container')[0]
    for (let i = 1; i <= num; i++) {
        let bingoNumber = document.createElement('div')
        bingoNumber.classList.add('bingo-number')
        bingoNumber.innerText = i
        bingoContainer.appendChild(bingoNumber)
    }
}

generateBinogBoard(76)

let numbersGenerated = []

const generateRandomNum = () => {
    let numberDisplay = document.getElementById('displayRandomNum')
    
    let randomNum = Math.ceil(Math.random() * 76)
    
    while (numbersGenerated.includes(randomNum)) {
        randomNum = Math.ceil(Math.random() * 76)
    }
    numberDisplay.innerHTML = `<p>${randomNum}</p>`
    numbersGenerated.push(randomNum)
    unHighlightRandomNum()
    highlightRandomNum(randomNum)
}

let bingoNumbers = document.getElementsByClassName('bingo-number')
let userNumbers = document.getElementsByClassName('user-number')

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

let randonNumBtn = document.getElementById('numGenerator')
randonNumBtn.addEventListener('click', generateRandomNum)

const createUserBoard = () => {
    let userContainer = document.getElementsByClassName('userboard-container')[0];
    let alreadyGenerated = [];
    for (let i = 0; i <= 24; i++) {
        let userBoard = document.createElement('div');
        userBoard.classList.add('user-number');
        if (i===12) {
            userBoard.innerText = 'FREE';
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

createUserBoard()