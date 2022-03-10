// Additional assignments for Day 3

/* EXTRA 1
 Use a ternary operator to assign to a variable called gender the string values "male" or "female".
 The choice should be made based on the value of another variable called isMale.
*/

let isMale = false;
let gender = isMale ? "male" : "female";

/* EXTRA 2
 Write a piece of code for checking if, given two integers, the value of one of them is 8 or if their addition or subtraction is equal to 8.
*/

let a = 5;
let b = 10;
if (a === 8 || b === 8 || a + b === 8 || a - b === 8) {
  console.log(true);
} else {
  console.log(false);
}

/* EXTRA 3
 Create a variable and assign to it the concatenation of two strings.
*/

let str = "Strive " + "School";

/* EXTRA 4
 Create three variables and assign a numerical value to each one of them. 
 Using a conditional statement, write a piece of code for sorting their values from highest to lowest.
 Display the result in the console.
*/

let x = 3;
let y = 6;
let z = -1;

if (x > y && x > z) {
  if (y > z) {
    console.log(x + ", " + y + ", " + z);
  } else {
    console.log(x + ", " + z + ", " + y);
  }
} else if (y > x && y > z) {
  if (x > z) {
    console.log(y + ", " + x + ", " + z);
  } else {
    console.log(y + ", " + z + ", " + x);
  }
} else if (z > x && z > y) {
  if (x > y) {
    console.log(z + ", " + x + ", " + y);
  } else {
    console.log(z + ", " + y + ", " + x);
  }
}

/* EXTRA 5
 Write a piece of code for finding the average of two given integers.
*/

let d = 4;
let h = 5;
let average = (d + h) / 2;
console.log(average);

/* EXTRA 6
 Write a piece of code for finding the longest of two given strings.
*/

let str1 = "aaaa";
let str2 = "bb";
if (str1.length > str2.length) {
  console.log("str1 is longer");
} else {
  console.log("str2 is longer");
}

/* EXTRA 7
 Write a piece of code for checking if a given value is a integer or not.
*/

console.log(typeof str1);
if (typeof d === "number") {
  console.log(true);
} else {
  console.log(false);
}

/* EXTRA 8
 Write a piece of code for calculating a certain percentage of a given number.
 (Ex.: the 20% of 400 is 80)
*/

let num = 400;
let per = 20;
let percentage = (400 / 100) * 20;
console.log(percentage);

/* EXTRA 9
 Write a piece of code for checking if a given number is even or odd.
*/

if (num % 2 === 0) {
  console.log("even");
} else {
  console.log("odd");
}

/* WHEN YOU ARE FINISHED
 Upload the .js file on Eduflow before 5PM CET. In the next days we'll also learn how to use GIT!
*/