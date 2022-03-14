window.onload = onLoad

let x = "John";
let y = "Doe";
console.log(`${x} ${y}`);

let person = {
    name: "John",
    surname: "Doe",
    email: "123@gmail.com",
};

delete person.email;

console.log(person);

//Create an array with 10 strings in it
let longArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

let only10 = longArr.slice(0, 10);

//Print in the console every string from the previous array
only10.forEach(str => console.log(str));

// Create an array with 100 random numbers in it

// the traditional way

// Create an array with 100 random numbers in it
let randArr = []

const AddToArr = (arr, num) => {
    let i = 0;
    while (i<num) {
        arr.push(Math.round(Math.random()*100));
        i++;
    }
    return arr
}

AddToArr(randArr, 100);

console.log(randArr.length);

//Using Array.from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
// Create an array with 100 random numbers in it

let randomArray = Array.from({length: 100}, (v, i) => Math.floor(Math.random()*100))

console.log(randomArray.length)



// traditional way but faster https://stackoverflow.com/questions/3895478/does-javascript-have-a-method-like-range-to-generate-a-range-within-the-supp
// Create an array with 100 random numbers in it
let fasterArr = [...Array(100).keys()].map(x => Math.round(Math.random()*100))

console.log(fasterArr)

//Write a function to get the maximum and minimum values 
//from the previously created array
const minMaxVal3 = (arr) => {
    if (arr.length > 0){
        let dict = {}
        let max = Number.MIN_VALUE;
        let min = Number.MAX_VALUE;
        arr.forEach(num => {
            num > max ? max = num : min = num; 
        });
        dict['max'] = max;
        dict['min'] = min;
        return dict
    } else {
        return 'Please input a valid array'
    }
    
}


console.log(minMaxVal3(fasterArr))

//Write a function to get the maximum and minimum values 
//from the previously created array
const minMaxVal = (arr) => {
    let max = Number.MIN_VALUE;
    let min = Number.MAX_VALUE;
    arr.forEach(num => {
        num > max ? max = num : min = num; 
    });
    return [max, min]
}
console.log(minMaxVal(fasterArr))

//Write a function to get the maximum and minimum values 
//from the previously created array
const minMaxVal2 = (arr) => {
    if (arr.length > 0){
        let max = Number.MIN_VALUE;
        let min = Number.MAX_VALUE;
        arr.forEach(num => {
            num > max ? max = num : min = num; 
        });
        return [max, min]
    } else {
        return 'Please input a valid array'
    }
}
console.log(minMaxVal2(fasterArr))

//Create an array of arrays, in which every array has 10 random numbers

const randomArrayGenerator = (num) => {
    return [...Array(num).keys()].map(x => Math.round(Math.random()*100))
} 

let arrOfArr = [...Array(5).keys()].map(x => randomArrayGenerator(10))

console.log(arrOfArr)

//Create a function that gets 2 arrays as parameters and returns the longest one

const longestArray = (arr1, arr2) => {
    if(arr1.length !== arr2.length) {
        return arr1.length > arr2.length ? arr1 : arr2;
    } else {
        return `Both arrays are the same length: ${arr.length}`
    }
}

console.log(longestArray(arrOfArr, fasterArr))

//Create a function that gets 2 arrays of numbers as parameters and returns the one with the higher sum of values

const sumNumArr = (arr1, arr2) => {
    let sumArr1 = arr1.reduce((accumulator, currentVal) => accumulator + currentVal);
    let sumArr2 = arr2.reduce((accumulator, currentVal) => accumulator + currentVal);
    return sumArr1 > sumArr2 ? arr1 : arr2;
}

console.log(sumNumArr(fasterArr, randArr));

//             DOM EXERCISES

//             31) Get the element with an id of "container" from the page

let container = document.getElementById('container');

console.log(container);
//             32) Get every <td> element from the page

let tds = document.getElementsByTagName('td');

//             33) Use a loop for printing the text inside of every <td> element in the page

const printingElementsFromCollection = (collection) => {
    for (let i = 0; i<collection.length; i++) {
        if (collection[i].innerText !== ''){
            console.log(collection[i].innerText);
        }
        
    }
}

printingElementsFromCollection(tds);

//             34) Write a function to change the heading of the page

const changeHeading = (newText) => {
    let heading = document.querySelector('h1');
    heading.innerText = newText;
}

changeHeading('Changed the heading');
//             35) Write a function to add an extra row to the table

const addRow = (text) => {
    let tbodyRef = document.querySelector('table').getElementsByTagName('tbody')[0];
    // Insert a row at the end of table
    let newRow = tbodyRef.insertRow(tbodyRef.rows.length);
    newRow.innerHTML = text;
}

addRow('New Fruit');
//             36) Write a function to add a class of "test" to each row in the table

const addClass = (classname) => {
    let tbodyRef = document.querySelector('table').getElementsByTagName('tbody')[0];
    for (let i = 0; i < tbodyRef.children.length; i++) {
        if(tbodyRef.children[i].tagName.toLowerCase() === 'tr'){
            tbodyRef.children[i].classList.add(classname);
        }
    }
    
}

addClass('test');

//             37) Write a function to add a red background to every link in the page

const addBackground = (color, target) => {
    let allLinks = document.querySelectorAll(target)
    
    for (let i = 0; i < allLinks.length; i++) {
        allLinks[i].style.backgroundColor = color;
    }
    
}

addBackground('lightcoral', 'a')



//             39) Write a function to add new items to a unordered list

const addNewItems = (newItemArr) => {
    let firstUList = document.querySelector('ul');
    for (let i = 0; i < newItemArr.length; i++) {
        let newItem = document.createElement('li');
        newItem.innerText = newItemArr[i];
        firstUList.appendChild(newItem)
    }
}

addNewItems(['Pear', 'Mango']);
//             40) Write a function to empty a list

// interesting security flaws https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML


let emptyText = (target) => {
    let toEmpty = document.querySelector(target)
    console.log(toEmpty.hasOwnProperty('length'))
    if (toEmpty.hasOwnProperty('length')){
        for(let i=0; i<toEmpty.length; i++) {
            toEmpty[i].innerHTML = '';
        }
    } else {
        console.log(toEmpty.innerHTML)
        toEmpty.innerHTML = '';
    }
}

emptyText('ul')

//             EXTRA EXERCISES

//             41) Add an eventListener to show an alert when the cursor hovers a link, displaying its href property

// Resources: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#the_event_listener_callback

const initializeListeners = (query, type) => {
    let target = document.querySelectorAll(query)
    console.log(target.length)
    for(let i=0; i<target.length; i++) {
        console.log(target[i])
        if (target[i].getAttribute('listener') !== true) {
            target[i].addEventListener(type, displayAttributeCallback)
        }
    }
}

const displayAttributeCallback = (event) => {
    let attributeValue = event.target.getAttribute('href');
    console.log(attributeValue);
    alert(attributeValue);
}

//             42) Create a button that will hide every image on the page when clicked


//             43) Create a button that will hide or show the table on the page when clicked
//             44) Write a function for calculating the sum of every number inside all the table cells (if their content is numeric)
//             45) Delete the last letter from the heading each time the user clicks on it
//             46) Change the background color of a <td> if the user clicks on it
//             47) Add a delete button at the bottom of the table, when clicked it should delete a random <td>
//             48) Add automatically a pink border to a cell when the mouse hovers it
//             49) Write a function to create a table with 4 rows and 3 columns programmatically and add it to the bottom of the page
//             50) Write a function to remove the last table from the page


//             38) Console log "Page loaded" when the page is correctly loaded

function onLoad() {
    //initializeListeners('a', 'mouseover');
    console.log('Properly Loaded');
}

//TODO: https://developer.mozilla.org/en-US/docs/Web/Events/Event_handlers

// function eventHandler(event) {
//     if (event.type == 'mouseover') {
//         displayAttributeCallback();
//     } else /* fullscreenerror */ {
//       /* handle a full screen toggle error */
//     }
// }