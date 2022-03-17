function handleSendMessage() {
    const students = document.querySelector("#attendingStudentsForm")

    for (let i = 0; i < students.options.length; i++) { 
        console.log(students[i].value); //log the value
    }

    const alert = document.querySelector("#main-alert")

    alert.classList.remove('d-none')
    alert.innerText = "Message was sent successfully!"

    setTimeout(
        function () {
            alert.classList.add('d-none')
        },
        3000
    )

}

const initializeButtonListener = () => {
    let btn = document.querySelector('.btn');
    console.log(btn);
    btn.addEventListener('click', renderQuestion);
}

const renderQuestion = (event) => {
    let btn = event.target;

    btn.classList.add('invisible');

    let questions = [];
    
    createQuestionDiv(event);
}


const createQuestionDiv = (event) => {
    let btn = event.target;
    let div = btn.parentElement;
    let nextQuestion = document.createElement('div');
    nextQuestion.setAttribute(`id`, `question${questionNumber}`);
    nextQuestion.classList.add('question-ans-container');
    nextQuestion.innerHTML = 'Test';
    div.appendChild(nextQuestion);
}

const RenderNextQuestion = (event, questionNumber, questArr) => {

}

const onLoad = () => {
    console.log('page loaded, starting JS...')
    initializeButtonListener();
}

window.onload = onLoad();