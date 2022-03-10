const MARCH_DAYS = 31;

function onLoad() {
    createDays(MARCH_DAYS)
}

window.onload = onLoad // Without brackets because we don't want to call it during the assignment

function zeroPad(numberStr) {
    return numberStr.padStart(2, "0");
  }

let createDays = (days) => {
    // Get the parent
    let monthNode = document.getElementById('march');
 
    for (let day = 1; day<=days ; day++ ){
        // create a new div
        let newDiv = document.createElement('div')

        // add the text/class
        if (day%7 === 0){
            newDiv.classList.add('end-day')
        } else {
            newDiv.classList.add("day");
        }
        
        let numString = day.toString();
        let paddedNum = zeroPad(numString);
        let textNode = document.createTextNode(`${paddedNum}`);
        

        // add the text node to the newly created div
        newDiv.appendChild(textNode);

        //append it to the parent
        monthNode.appendChild(newDiv)
    }
}
