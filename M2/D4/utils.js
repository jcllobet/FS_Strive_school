function handleSendMessage() {
    const students = document.querySelector("#studentListForm");

    const numGroups = document.querySelector("#numberGroupsForm");

    console.log(students);
    //console.log(numGroups.value);

    renderTeams(students.value, numGroups.value);
}

const renderTeams = (studentString, minNum) => {
    let studentsArr = studentString.split("\n");
    // parse to int
    //let minNum = parseInt(minNumStr.value);
    console.log(studentString);
    console.log(`students: ${studentsArr}`);
    console.log(`Number of Students: ${studentsArr.length}`);
    console.log(`Number of Houses: ${minNum}`);

    let maxStudentsHouse = Math.floor(studentsArr.length / minNum);
    let waitingAssignation = studentsArr.length % minNum;

    console.log(`Students on each House: ${maxStudentsHouse}`);
    console.log(`Unassigned students: ${waitingAssignation}`);

    let col = document.createElement("div");
    col.classList.add("col-6", "col-md-4", "col-lg-3");

    // Loop through Array, if length is greater than maxStudentsHouse, create new div and reset counter to 0. Else, add to current div.

    for (let i = 0; i < studentsArr.length; i++) {
        let House = 0;
        
        if  

        createCard(studentsArr[i], col);

        for (let j = 0; j < minNum; j++) {
            appendStudent2House(cardBody);
        }

        appendElementsToCard();
        

        // let cardBody = document.createElement("div");
        // cardBody.classList.add("card-body");

        // let houseTitle = document.createElement("div");
        // houseTitle.classList.add("card-title");
        // houseTitle.innerHTML = `House ${1}`;
        // cardBody.appendChild(houseTitle);

        // let card = document.createElement("div");
        // card.classList.add("card", "my-3");
        // card.setAttribute("id", `House ${1}`);

        // let img = document.createElement("img");
        // img.classList.add("card-img-top");
        // img.setAttribute("src", `https://picsum.photos/1000`);

        // card.appendChild(img);
        // card.appendChild(cardBody);
        // col.appendChild(card);
    }

    let container = document.querySelector("#render-groups");

    let row = document.createElement("div");
    row.classList.add("row");

    row.appendChild(col);
    container.appendChild(row);
};



const appendStudent2House = (target) => {
    let studentName = studentsArr[i];

    let student = document.createElement("p");
    student.classList.add("card-text");
    student.innerText = studentName;

    let removeButton = document.createElement("button");
    removeButton.classList.add("btn", "btn-danger", "btn-sm", "float-right");
    removeButton.setAttribute("onclick", "removeStudent(this)");
    removeButton.innerText = "X";
    student.appendChild(removeButton);

    let toWaitButton = document.createElement("button");
    toWaitButton.classList.add("btn", "btn-primary", "btn-sm", "float-right");
    toWaitButton.setAttribute("onclick", "removeStudent(this)");
    toWaitButton.innerText = "⏲️";
    student.appendChild(toWaitButton);

    target.appendChild(student);
};

const removeStudent = (event) => {
    event.parentNode.remove();
};

function triggerAlert() {
    const alert = document.querySelector("#main-alert");

    alert.classList.remove("d-none");
    alert.innerText = "There is a team of one student";

    setTimeout(function () {
        alert.classList.add("d-none");
    }, 3000);
}

const initializeButtonListener = () => {
    let btn = document.querySelector(".btn");
    console.log(btn);
    btn.addEventListener("click", renderQuestion);
};

async function getJson() {
    const response = await fetch("./got-houses.json");
    const data = await response.json();
    return data;
}

const renderQuestion = (event) => {
    let btn = event.target;

    btn.classList.add("invisible");

    let questions = [];

    getJson().then((data) => {
        let response = data.royal_houses;
        console.log(response);
        // first element
        createQuestionDiv(event, response[questionNumber]);
    });
};

const onLoad = () => {
    console.log("page loaded, starting JS...");
    initializeButtonListener();
};

window.onload = onLoad();
