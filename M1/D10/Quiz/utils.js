// QUIZ GAME!

//             RULES:
//             / The player must guess correctly a certain amount of questions
//             / Each correct answer gives him one point
//             / Answers could be multiple or true/false
//             / At the end of the game, the user must know his/her total score

//             QUESTIONS:
//             / You can get them from this URL ( http://bit.ly/strive_QUIZZ ) or you can write your own
//             / Could be multiple of boolean (true / false)

//             HINTS:
//             / Keep a global variable score for the user score
//             / Keep a variable questionNumber for the question the user is answering
//             / When questionNumber is bigger then the available questions, present the score
//             / Start working with the questions saved in a variable (or you can use AJAX for fetching external questions if you already know how to do it!)
//             / Start with the easier version and THEN implement the EXTRAs
//             / Please debug everything / try it on the console to be sure of what to expect from your code

//             EXTRA:
//             / Show if the answer provided was the wrong one or correct it after clicking
//             / Present the questions one at a time instead of having all of them displayed together
//             / Let the user select difficulty and number of questions (you can get q/a from https://opentdb.com/api.php?amount=10&category=18&difficulty=easy modifying amount and difficulty)
let score = 0;
let questionNumber = 0;

const initializeButtonListener = () => {
    let btn = document.querySelector('.btn');
    console.log(btn);
    btn.addEventListener('click', renderQuestion);
}

async function getJson() {
    const response = await fetch('./quiz.json');
    const data = await response.json();
    return data
}

const renderQuestion = (event) => {
    let btn = event.target;

    btn.classList.add('invisible');

    let questions = [];
    
    getJson().then(data => {
        let response = data.results;
        console.log(response);
        // first element
        createQuestionDiv(event, response[questionNumber]);
    });
}

// {
//     "category": "Science: Computers",
//     "type": "multiple",
//     "difficulty": "easy",
//     "question": "In any programming language, what is the most common way to iterate through an array?",
//     "correct_answer": "&#039;For&#039; loops",
//     "incorrect_answers": [
//         "&#039;If&#039; Statements",
//         "&#039;Do-while&#039; loops",
//         "&#039;While&#039; loops"
//     ]
// },


const createQuestionDiv = (event,content) => {
    let btn = event.target;
    let div = btn.parentElement;
    let nextQuestion = document.createElement('div');
    nextQuestion.setAttribute(`id`, `question${questionNumber}`);
    nextQuestion.classList.add('question-ans-container');
    nextQuestion.innerHTML = content.question;
    div.appendChild(nextQuestion);
}

const RenderNextQuestion = (event, questionNumber, questArr) => {

}

const onLoad = () => {
    console.log('page loaded, starting JS...')
    initializeButtonListener();
}

window.onload = onLoad();