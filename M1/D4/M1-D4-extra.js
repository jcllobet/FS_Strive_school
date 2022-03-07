// Additional assignments for Day 4

/* EXTRA 1
 Write a piece of code for reverting an array.
 es:
 [1, 3, 5] ==> [5, 3, 1]
*/

let list = [1, 2, 3, 4, 5];
let list2 = [1, 2, 3, 4, 'orange'];

let reverseList = (list) => {
    let emptyList = [];

    for (let i = list.length - 1; i >= 0; i--) {
        emptyList.push(list[i])
    }
    return emptyList
}

console.log(reverseList(list))

// Faster method, which overwrites in-line:
console.log(list.reverse())

//to verify, let's check the val of list again
console.log(list)

// Fast method without in-built elements.

let fasterReverse = (list) => {
    return list.map((element, index, array) => array[array.length - 1 - index])
}

console.log(fasterReverse(list2))

/* EXTRA 2
 Write a piece of code for getting the maximum numerical value from an array.
*/

//in-built way
// ... gets the contents of the array
console.log(...list)

console.log(Math.max(...list))

// The apply() method calls a function with a given this value, and arguments provided as an array (or an array-like object).
// https://stackoverflow.com/questions/1669190/find-the-min-max-element-of-an-array-in-javascript
let maxOfArray = Math.max.apply(null, list);

console.log(maxOfArray)

// A more robust solution: 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

function arrayMax(arr) {
    return arr.reduce(function (p, v) {
      return ( p > v ? p : v );
    });
}

console.log(arrayMax(list))

/* EXTRA 3
 Write a piece of code for getting the minimum numerical value from an array.
*/

//doing it with an operation over all elements of the array

function arrayMin(arr) {
    return arr.reduce(function (previousVal, currentVal) {
        return ( previousVal < currentVal ? previousVal : currentVal );
    });
}

console.log(arrayMin(list))


/* EXTRA 4
 Write a piece of code for getting only even numerical values from an array.
*/

let evenArray = (arr) => {
    newArr = []
    for (let i = 0; i < arr.length; i++ ) {
        if (arr[i] % 2 === 0) {
          newArr.push(arr[i])  
        }
    }
    return newArr
}

console.log(evenArray(list))

/* EXTRA 5
 Write a piece of code for deleting only even entries from an array.
*/

function deleteEven (arr) {
    newArr = [];
    for (let i = 0; i < arr.length; i++ ) {
        if (!(arr[i] % 2 === 0)) {
          newArr.push(arr[i])  
        }
    }
    return newArr
}

console.log(deleteEven(list))

/* EXTRA 6
 Write a piece of code for removing all the vowels from a string.
*/

let sentence = 'Thinking about life';

let noVowels = (str) => {
    newStr = '';
    for(i = 0; i < str.length; i++){
        if (!('aeiou'.includes(str[i]))) {
            newStr += str[i];
        }
    }
    return newStr;
}

console.log(noVowels(sentence))

// in a more faster way

let fastNoVowel = (str) => {
    strArr = [...str];
    let filterStr = strArr.filter(word => !('aeiou'.includes(word)));
    return filterStr.join('')
}

console.log(fastNoVowel(sentence))

// efficient w/ regex & array

let cleanSentence = [...sentence].map(x=>x.replace( /[aeiou]/g, '' )).join('');

console.log(cleanSentence)

// directly with regex on string

let noVowelSent = sentence.replace( /[aeiou]/ig, '' )
console.log(noVowelSent)

/* EXTRA 7
 Write a piece of code for increasing all the numerical values in a array by 1.
*/



let oneMore = (arr) => {
    newArr = []
    arr.forEach(x => {
        newArr.push(x+1);
    });
    return newArr
}

console.log(list)
console.log(oneMore(list))

// more efficient way

let newList = list.map(num => num+1);
console.log(newList);

/* EXTRA 8 
 Replace all the strings contained in an array with their length.
 es.: ["strive", "is", "great"] => [6, 2, 5]
*/

let strArray = ["strive", "is", "great"];
let strLength = (strArr) => {
    newArr = [];
    strArr.forEach(element => {
        newArr.push(element.length);
    });
    return newArr
}

console.log(strLength(strArray))

// faster way

let newStrArr = strArray.map(elem => elem.length);

console.log(newStrArr);

/* WHEN YOU ARE FINISHED
 Upload the .js file on Eduflow before 5PM CET. In the next days we'll also learn how to use GIT!
*/