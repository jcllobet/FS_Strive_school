// Additional assignments for Day 3

/* EXTRA 1
 Use a ternary operator to assign to a variable called gender the string values "male" or "female".
 The choice should be made based on the value of another variable called isMale.
*/

let isMale = true;

let whatGender = isMale? true : false;

console.log(whatGender)

/* EXTRA 2
 Write a piece of code for checking if, given two integers, the value of one of them is 8 or if their addition or subtraction is equal to 8.
*/

let int1 = 8;
let int2 = 16;

let equalsEight = (i1, i2) => {
    return (i1 === 8 || i2 === 8 || i1 + i2 === 8 || i1 - i2 === 8);
}

/* EXTRA 3
 Create a variable and assign to it the concatenation of two strings.
*/

let concat = "Hello " + "World";

/* EXTRA 4
 Create three variables and assign a numerical value to each one of them. 
 Using a conditional statement, write a piece of code for sorting their values from highest to lowest.
 Display the result in the console.
*/

//trying to implement quicksort

let int3 = 1;

const quickSort = (arr) => {

    if (arr.length < 2) {
        return arr;
    }

    // We return the first element and remove it from the array.
    const [pivot, ...rest] = arr;
    console.log('\nPivot is: ', pivot);
    
    // We iterate over the array and check if each element is less than the pivot. Also boable with filter
    let lessThanPivot = rest.filter(n => n <= pivot);
    let greaterThanPivot = rest.filter(n => n > pivot);

    console.log('Less than pivot: ', lessThanPivot);
    console.log('Greater than pivot: ', greaterThanPivot);
    

    // We call the reduced lists recursively and destroy them (will only return remaining pivots). 
    return [...quickSort(lessThanPivot), pivot, ...quickSort(greaterThanPivot)];
};

console.log([quickSort([int3, int2, int1]).reverse().join(', ')]);

let unsortedValues = [5,34,12,1,0,52,190,7,9];

console.log([quickSort(unsortedValues).join(', ')]);

/* EXTRA 5
 Write a piece of code for finding the average of two given integers.
*/

const average = (a, b) => {
    return (a + b) / 2;
}

console.log(average(4,5));
/* EXTRA 6
 Write a piece of code for finding the longest of two given strings.
*/

const longest = (a, b) => {
    return a.length > b.length ? a : b;
}

console.log(longest('aaa', 'a'));
/* EXTRA 7
 Write a piece of code for checking if a given value is a integer or not.
*/

const isInteger = (value) => {
    return (type(value) === 'number' && value % 1 === 0);
}

console.log(isInteger('5'));
/* EXTRA 8
 Write a piece of code for calculating a certain percentage of a given number.
 (Ex.: the 20% of 400 is 80)
*/

const percentage = (number, percentage) => {
    return number * percentage / 100;
}

console.log(percentage(400,20));
/* EXTRA 9
 Write a piece of code for checking if a given number is even or odd.
*/

const isEvenOrOdd = (number) => {
    return (number % 2 === 0) ? 'even' : 'odd';
}

console.log(isEvenOrOdd(5));
/* WHEN YOU ARE FINISHED
 Upload the .js file on Eduflow before 5PM CET. In the next days we'll also learn how to use GIT!
*/