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

//Using Array.from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
let randomArray = Array.from({length: 100}, (v, i) => Math.floor(Math.random()*100))

console.log(randomArray.length)

// the traditional way

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

// traditional way but faster https://stackoverflow.com/questions/3895478/does-javascript-have-a-method-like-range-to-generate-a-range-within-the-supp

let fasterArr = [...Array(100).keys()].map(x => Math.round(Math.random()*100))

console.log(fasterArr)

//Write a function to get the maximum and minimum values from the previously created array

const minMaxVal = (arr) => {
    if (arr.length > 0){
        let dict = {}
        let max = Number.MIN_VALUE;
        let min = Number.MAX_VALUE;
        arr.forEach(num => {
            if (num > max) {
                max = num;
            } else if (num < min) {
                min = num;
            }
        });
        dict['max'] = max;
        dict['min'] = min;
        return dict
    } else {
        return 'Please input a valid array'
    }
    
}
console.log(minMaxVal(fasterArr))

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
    let sumArr1 = arr1.reduce((accumulator, currentVal) => accumulator + currentVal)
    let sumArr2 = arr2.reduce((accumulator, currentVal) => accumulator + currentVal)
    return sumArr1 > sumArr2 ? arr1 : arr2;
}

console.log(sumNumArr(fasterArr, randArr))

//             DOM EXERCISES

//             31) Get the element with an id of "container" from the page
//             32) Get every <td> element from the page
//             33) Use a loop for printing the text inside of every <td> element in the page
//             34) Write a function to change the heading of the page
//             35) Write a function to add an extra row to the table
//             36) Write a function to add a class of "test" to each row in the table
//             37) Write a function to add a red background to every link in the page
//             38) Console log "Page loaded" when the page is correctly loaded
//             39) Write a function to add new items to a unordered list
//             40) Write a function to empty a list

//             EXTRA EXERCISES

//             41) Add an eventListener to show an alert when the cursor hovers a link, displaying its href property
//             42) Create a button that will hide every image on the page when clicked
//             43) Create a button that will hide or show the table on the page when clicked
//             44) Write a function for calculating the sum of every number inside all the table cells (if their content is numeric)
//             45) Delete the last letter from the heading each time the user clicks on it
//             46) Change the background color of a <td> if the user clicks on it
//             47) Add a delete button at the bottom of the table, when clicked it should delete a random <td>
//             48) Add automatically a pink border to a cell when the mouse hovers it
//             49) Write a function to create a table with 4 rows and 3 columns programmatically and add it to the bottom of the page
//             50) Write a function to remove the last table from the page
