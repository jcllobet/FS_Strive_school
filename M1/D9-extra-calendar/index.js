const TODAY = new Date();
const DAY = TODAY.getDay();
const MONTH = TODAY.getMonth();
const YEAR = TODAY.getFullYear();

const WEEKDAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const daysCurrentMonth = (y, m) => new Date(y, m+1, 0).getDate()

const firstDayMonth = (y, m) => {
    var options = { weekday: 'long'};
    let firstDay = new Date(y,m,1)
    return new Intl.DateTimeFormat('en-US', options).format(firstDay)
}


function selectDay(event){
    let previouslySelectedDay = document.querySelector('.selected-day');
    
    if(previouslySelectedDay !== null){
        previouslySelectedDay.classList.remove('selected-day');
    }

    let clickedDayNode = event.target;

    clickedDayNode.classList.add('selected-day');
}

const createMonths = (months, currentMonth) => {
    let monthNode = document.getElementById('months');

    for (let day = 0; day<months.length ; day++){
        let dayNode = document.createElement('div');
        dayNode.innerText = weekdays[day].toUpperCase();
        dayNode.classList.add("day-title");
        monthNode.appendChild(dayNode);
    }
}

const createWeekDays = (weekdays, currentWeekday) => {
    let weekNode = document.getElementById('weeks');

    for (let day = 0; day<weekdays.length ; day++){
        let dayNode = document.createElement('div');
        dayNode.innerText = weekdays[day].toUpperCase();
        dayNode.classList.add("day-title");
        weekNode.appendChild(dayNode);
    }
}

const createDays = (days, currentDay) => {
    // Get the parent
    let monthNode = document.getElementById('days');
 
    for (let day = 1; day<=days ; day++ ){

        // create a new div
        let dayNode = document.createElement('div');
        dayNode.innerText = day;
        dayNode.classList.add("day");
        dayNode.addEventListener('click', selectDay); //We want it to be called later

        // create a link
        //let linkNode = document.createElement('a');
        //linkNode.innerText = day;
        //dayNode.appendChild(linkNode);

        //append it to the parent
        monthNode.appendChild(dayNode);
    }
}

function onLoad() {
    let daysInMonth = daysCurrentMonth(TODAY.getFullYear(), TODAY.getMonth());
    let firstDay = firstDayMonth(TODAY.getFullYear(), TODAY.getMonth())
    createWeekDays(WEEKDAYS);
    createDays(daysInMonth);
    //selectDay();
}

window.onload = onLoad // Without brackets because we don't want to call it during the assignment