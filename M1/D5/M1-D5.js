/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be pushed to the repository and be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Write a function called "area" which receives 2 parameters (l1, l2) and calculates the area of the associated rectangle.
*/

let area = (l1, l2) => l1 * l2;

console.log(area(4,3));
/* EXERCISE 2
 Write a function called "crazySum" which receives two integers as parameters.
 It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

let crazySum = (a, b) => {
    if (a === b) {
        return a + b * 3;
    } else {
        return a + b;
    }
};

console.log(crazySum(3,3))
/* EXERCISE 3
 Write a function called "crazyDiff" that computes the absolute difference between a given number and 19.
 It should return triple their absolute difference if the given number is greater than 19.
*/

let crazyDiff = (a) => {
    if (a > 19) {
        return Math.abs(a - 19) * 3;
    } else {
        return Math.abs(a - 19);
    }
};

console.log(crazyDiff(3));

/* EXERCISE 4
 Write a function called "boundary" which accept an integer parameter n and returns true if n is within 20 and 100 (included) or if n it's equal to 400.
*/

let boundary = (n) => {
    if (n >= 20 && n <= 100 || n === 400) {
        return true;
    } else {
        return false;
    }
};

console.log("ex 4", boundary(3));

/* EXERCISE 5
 Write a function called "strivify" which accepts a string as a parameter.
 It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

let strivify = (str) => {
    if (str.startsWith("Strive")) {
        return str;
    } else {
        return "Strive " + str;
    }
};

console.log(strivify("Hello")); // Strive Hello

/* EXERCISE 6
 Write a function called "check3and7" which accepts a positive number as a parameter and checks if it is a multiple of 3 or a multiple of 7.
 HINT: Modulus Operator
*/

let check3and7 = (n) => {
    if (n % 3 === 0 || n % 7 === 0) {
        return true;
    } else {
        return false;
    }
};

console.log(check3and7(20));

/* EXERCISE 7
 Write a function called "reverseString" which programmatically reverses a given string (es.: Strive => evirtS).
*/

let reverseString = (str) => {
    let newStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }
    return newStr;
};

console.log(reverseString("Strive"));

/* EXERCISE 8
 Write a function called "upperFirst" which capitalizes the first letter of each word of a given string passed as a parameter.
*/

let upperFirst = (str) => {
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] === " ") {
            newStr += str[i];
        } else {
            newStr += str[i].toUpperCase();
        }
    }
    return newStr;
};

console.log(upperFirst('hello world'));

/* EXERCISE 9
 Write a function called "cutString" which creates a new string without the first and last character of a given string passed as a parameter.
*/

let cutString = (str) => {
    let newStr = "";
    for (let i = 1; i < str.length - 1; i++) {
        newStr += str[i];
    }
    return newStr;
};

console.log(cutString('test'))

/* EXERCISE 10
 Write a function called "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

function giveMeRandom(n){
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(Math.floor(Math.random() * 11));
    }
    return arr;
}

console.log(giveMeRandom(5));

/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/

module.exports ={
    giveMeRandom: giveMeRandom,
};

