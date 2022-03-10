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

const area = function (l1, l2) {
    return l1 * l2;
  };
  const areaResult = area(3, 4);
  console.log(areaResult);
  
  /* EXERCISE 2
     Write a function called "crazySum" which receives two integers as parameters.
     It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
  */
  
  // if(typeof num1 === "number" && typeof num2 === "number") {
  
  // }
  // 
  const crazySum = function (num1  , num2 ) { //num1 is a number, num2 is a number
    if (num1 === num2) {
      return (num1 + num2) * 3;
    } else {
      return num1 + num2;
    }
  };
  
  // const crazySum2 = function(num1,num2) {
  //   return num1 === num2 ? (num1+num2) * 3 : num1 + num2
  // }
  
  console.log(crazySum(3, 3));
  
  /* EXERCISE 3
     Write a function called "crazyDiff" that computes the absolute difference between a given number and 19.
     It should return triple their absolute difference if the given number is greater than 19.
  */
  
  const crazyDiff = function (num) {
    if (num > 19) {
      return Math.abs(num - 19) * 3;
    } else {
      return Math.abs(num - 19);
    }
  };
  // const crazyDiff = (num) =>
  // num > 19 ? Math.abs(num - 19) * 3 : Math.abs(num - 19);
  console.log(crazyDiff(3));
  
  /* EXERCISE 4
     Write a function called "boundary" which accept an integer parameter n and returns true if n is within 20 and 100 (included) or if n it's equal to 400.
  */
  
  const boundary = function (n) {
    if ((n > 20 && n <= 100) || n === 400) {
      return true;
    } else {
      return false;
    }
  };
  //  const boundary = function(n) {
  //  return ((n > 20 && n <=100) || n === 400) ?  true :  false
  // }
  
  console.log("ex 4", boundary(3));
  
  /* EXERCISE 5
     Write a function called "strivify" which accepts a string as a parameter.
     It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
  */
  
  const strivify = function (str) {
    if (str.startsWith("Strive") /* true / false */) {
      return str;
    } else {
      return "Strive " + str;
    }
  };
  /* 
  const striviy = function(str) {
    return str.startsWith("Strive") ? str : "Strive" + str 
  }
  */
  console.log(strivify("Strivers")); // Strivers
  console.log(strivify("Hello")) // Strive Hello
  
  /* EXERCISE 6
     Write a function called "check3and7" which accepts a positive number as a parameter and checks if it is a multiple of 3 or a multiple of 7.
     HINT: Modulus Operator
  */
  
  const check3and7 = function (n) {
    if (n >= 0 && (n % 3 === 0 || n % 7 === 0)) {
      //n is more than 0 
      //n / 3 === reminder of 0 OR n / 7 reminder of 0
      return true;
    } else {
      return false;
    }
  };
  // const check3and7 = (n) =>
  //   n >= 0 && (n % 3 === 0 || n % 7 === 0) ? true : false;
  // const check3and7 = function(n) {
  //   return n >= 0 && (n % 3 === 0 || n%7 === 7) ? true : false
  // }
  console.log(check3and7(20));
  
  /* EXERCISE 7
     Write a function called "reverseString" which programmatically reverses a given string (es.: Strive => evirtS).
  */
  
  const reverseString = function (str) {
    return str.split("").reverse("").join("");
  
    //let splitString = str.split("")
    //let reverseString = splitString.reverse()
    //let finalString = reverseString.join("")
  };
  console.log(reverseString("Strive"));
  
  /* EXERCISE 8
     Write a function called "upperFirst" which capitalizes the first letter of each word of a given string passed as a parameter.
  */
  
  // const upperFirst = function (str) { //works for one word only
  //   return str.charAt(0).toUpperCase() + str.slice(1);
  //   /* 
  //     let firstChar = str.chatAt(0) 
  //     let uppercaseChar = firstChar.toUpperCase()
  //     let cutString = str.slice(1)
  //     return uppercaseChar + cutString
  //   */
  // };
  // console.log(upperFirst("strivers"));
  
  const upperFirstPhrase = function(str) { //phrase as param
    let words = str.split(" ")
    let finalString = []
    for(let i = 0; i < words.length; i++) {
      let firstChar = words[i].charAt(0)
      console.log(firstChar)
      let uppercaseChar = firstChar.toUpperCase()
      let cutString = words[i].slice(1)
      let finalWord = uppercaseChar + cutString
      finalString.push(finalWord)
    }
    console.log(finalString.join(""))
  }
  
  upperFirstPhrase("hello world")
  
  /* EXERCISE 9
     Write a function called "cutString" which creates a new string without the first and last character of a given string passed as a parameter.
  */
  
  const cutString = function (str) {
    return str.slice(1, str.length - 1); //.slice(1,-1) works as well
  };
  console.log(cutString("strive"));
  
  /* EXERCISE 10
     Write a function called "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
  */
  
  const giveMeRandom = function (n) {
    const arr = [];
    for (let i = 0; i <= n; i++) {
      arr.push(Math.floor(Math.random() * 10));
    }
    return arr;
  };
  console.log(giveMeRandom(5));
  
  /* WHEN YOU ARE FINISHED
     Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
  */