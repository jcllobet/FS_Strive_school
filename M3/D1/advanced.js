/* 1) MAX CHAR

Given a string, return the character that is most
commonly used in the string.

--- Examples
    maxChar("abcccccccd") === "c"
    maxChar("apple 1231111") === "1"
*/

const maxCharOfStr = (text) => {
    const charMap = {};
    let maxNum = 0;
    let maxChar = "";

    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        if (charMap[char]) {
            charMap[char]++;
        } else {
            charMap[char] = 1;
        }
    }

    for (let char in charMap) {
        if (charMap[char] > maxNum) {
            maxNum = charMap[char];
            maxChar = char;
        }
    }
    return maxChar;
};

/* 2) ANAGRAMS

Check to see if two provided strings are anagrams of each other.
One string is an anagram of another if it uses the same characters
in the same quantity. Only consider characters, not spaces
or punctuation.  Consider capital letters to be the same as lower case

--- Examples
  anagrams('rail safety', 'fairy tales') --> True
  anagrams('RAIL! SAFETY!', 'fairy tales') --> True
  anagrams('Hi there', 'Bye there') --> False
*/

const areAnagrams = (str1, str2) => {
    const charMap1 = {};
    const charMap2 = {};

    const regexp = /[^\w]|_/g; //any word character (A-Z, a-z, 0-9, _).

    let alphaNumStr1 = str1.replace(regexp, "").toLowerCase();
    let alphaNumStr2 = str2.replace(regexp, "").toLowerCase();

    let sortedStr1 = alphaNumStr1.split("").sort().join("");
    let sortedStr2 = alphaNumStr2.split("").sort().join("");

    console.log(sortedStr1);
    console.log(sortedStr2);

    if (sortedStr1.length !== sortedStr2.length) {
        return false;
    } else {
        for (let i = 0; i < sortedStr1.length; i++) {
            let char = sortedStr1[i];
            if (charMap1[char]) {
                charMap1[char]++;
            } else {
                charMap1[char] = 1;
            }
        }

        for (let i = 0; i < sortedStr2.length; i++) {
            let char = sortedStr2[i];
            if (charMap2[char]) {
                charMap2[char]++;
            } else {
                charMap2[char] = 1;
            }
        }
        console.log(charMap1);
        console.log(charMap2);

        console.log(Object.keys(charMap1));
        console.log(Object.keys(charMap2));
        console.log(Object.values(charMap1));
        console.log(Object.values(charMap2));

        console.log(Object.keys(charMap1) === Object.keys(charMap2)); //lesson, don't compare to objects directly
        // checking if both char maps are equal
        if (JSON.stringify(charMap1) === JSON.stringify(charMap2)) {
            return true;
        } else {
            return false;
        }
    }
};

console.log(areAnagrams("rail safety", "fairy tales"));
/* 3) ANAGRAMS 2

Given a word and a list of possible anagrams, select the correct sublist.

--- Examples 

    "listen" and a list of candidates like "enlists" "google" "inlets" "banana" the program should return a list containing "inlets".
*/

/* 4) PALINDROME

Given a string, return true if the string is a palindrome
or false if it is not.  Palindromes are strings that
form the same word if it is reversed. Do include spaces
and punctuation in determining if the string is a palindrome.

--- Examples:

    palindrome("abba") === true
    palindrome("abcdefg") === false
 */

/* 5) REVERSE INT

Given an integer, return an integer that is the reverse
ordering of numbers.

--- Examples

    reverseInt(15) === 51
    reverseInt(981) === 189
    reverseInt(500) === 5
    reverseInt(-15) === -51
    reverseInt(-90) === -9
 */

/* 6) STEPS

Write a function that accepts a positive number N.
The function should console log a step shape
with N levels using the # character.  Make sure the
step has spaces on the right hand side!

--- Examples

    steps(2)
        '# '
        '##'
    steps(3)
        '#  '
        '## '
        '###'
    steps(4)
        '#   '
        '##  '
        '### '
        '####' */

/* 7) REVERSE STRING

Given a string, return a new string with the reversed
order of characters

--- Examples

    reverse('apple') === 'leppa'
    reverse('hello') === 'olleh'
    reverse('Greetings!') === '!sgniteerG'
 */

/* 8) CHUNK

Given an array and chunk size, divide the array into many subarrays
where each subarray is of length size

--- Examples

    chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
    chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
    chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
    chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
    chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]
*/

/* 9) PYRAMID

Write a function that accepts a positive number N.
The function should console log a pyramid shape
with N levels using the # character.  Make sure the
pyramid has spaces on both the left and right hand sides

--- Examples

    pyramid(1)
        '#'
    pyramid(2)
        ' # '
        '###'
    pyramid(3)
        '  #  '
        ' ### '
        '#####' */

/* 10) SPYRAL MATRIX

Write a function that accepts an integer N
and returns a NxN spiral matrix.

--- Examples

    matrix(2)
        [[1, 2],
        [4, 3]]
    matrix(3)
        [[1, 2, 3],
        [8, 9, 4],
        [7, 6, 5]]
    matrix(4)
        [[1, 2, 3, 4],
        [12, 13, 14, 5],
        [11, 16, 15, 6],
        [10,  9,  8, 7]]

*/

module.exports = {
    maxCharOfStr,
    // areAnagrams,
    // allContainedAnagrams,
    // isPalindrome,
    // reverseInteger,
    // printSteps,
    // reverseString,
    // arrayDivChunks,
    // printPyramid,
    // createNNMatrix,
};
