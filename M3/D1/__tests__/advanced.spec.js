const { describe, test, expect } = require("@jest/globals");
const {
    maxCharOfStr,
    areAnagrams,
    allContainedAnagrams,
    isPalindrome,
    reverseInteger,
    printSteps,
    reverseString,
    arrayDivChunks,
    printPyramid,
    createNNMatrix,
} = require("../advanced");

/* 1) MAX CHAR

Given a string, return the character that is most
commonly used in the string.

--- Examples
    maxChar("abcccccccd") === "c"
    maxChar("apple 1231111") === "1"
*/

describe("maxCharOfStr", () => {
    test("should return the character that is most commonly used in the string", () => {
        expect(maxCharOfStr("abcccccccd")).toBe("c");
    });
});

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

describe("areAnagrams", () => {
    test("should return true if the two strings are anagrams of each other", () => {
        expect(areAnagrams("rail safety", "fairy tales")).toBe(true);
    });
    test("should return false if the two strings are not anagrams of each other", () => {
        expect(areAnagrams("Hi there", "Bye there")).toBe(false);
    });
});

/* 3) ANAGRAMS 2

Given a word and a list of possible anagrams, select the correct sublist.

--- Examples 

    "listen" and a list of candidates like "enlists" "google" "inlets" "banana" the program should return a list containing "inlets".
*/

describe("allContainedAnagrams", () => {
    test("should return the correct sublist", () => {
        expect(
            allContainedAnagrams("listen", [
                "enlists",
                "google",
                "inlets",
                "banana",
            ])
        ).toEqual(["inlets"]);
    });
});

/* 4) PALINDROME

Given a string, return true if the string is a palindrome
or false if it is not.  Palindromes are strings that
form the same word if it is reversed. Do include spaces
and punctuation in determining if the string is a palindrome.

--- Examples:

    palindrome("abba") === true
    palindrome("abcdefg") === false
*/

describe("isPalindrome", () => {
    test("should return true if the string is a palindrome", () => {
        expect(isPalindrome("abba")).toBe(true);
    });
    test("should return false if the string is not a palindrome", () => {
        expect(isPalindrome("abcdefg")).toBe(false);
    });
});

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

describe("reverseInteger", () => {
    test("should return the reverse of the integer", () => {
        expect(reverseInteger(15)).toBe(51);
        expect(reverseInteger(981)).toBe(189);
        expect(reverseInteger(500)).toBe(5);
        expect(reverseInteger(-15)).toBe(-51);
        expect(reverseInteger(-90)).toBe(-9);
    });
});

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

describe("printSteps", () => {
    test("should print the steps", () => {
        expect(printSteps(2)).toBe("# \n##");
        expect(printSteps(3)).toBe("#  \n## \n###");
        expect(printSteps(4)).toBe("#   \n##  \n### \n####");
    });
});

/* 7) REVERSE STRING

Given a string, return a new string with the reversed
order of characters

--- Examples

    reverse('apple') === 'leppa'
    reverse('hello') === 'olleh'
    reverse('Greetings!') === '!sgniteerG'
*/

describe("reverseString", () => {
    test("should return the reversed string", () => {
        expect(reverseString("apple")).toBe("leppa");
        expect(reverseString("hello")).toBe("olleh");
        expect(reverseString("Greetings!")).toBe("!sgniteerG");
    });
});

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

describe("arrayDivChunks", () => {
    test("should return the array divided into chunks", () => {
        expect(arrayDivChunks([1, 2, 3, 4], 2)).toEqual([
            [1, 2],
            [3, 4],
        ]);
        expect(arrayDivChunks([1, 2, 3, 4, 5], 2)).toEqual([
            [1, 2],
            [3, 4],
            [5],
        ]);
        expect(arrayDivChunks([1, 2, 3, 4, 5, 6, 7, 8], 3)).toEqual([
            [1, 2, 3],
            [4, 5, 6],
            [7, 8],
        ]);
        expect(arrayDivChunks([1, 2, 3, 4, 5], 4)).toEqual([[1, 2, 3, 4], [5]]);
        expect(arrayDivChunks([1, 2, 3, 4, 5], 10)).toEqual([[1, 2, 3, 4, 5]]);
    });
});

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
        '#####' 
*/

describe("printPyramid", () => {
    test("should print the pyramid", () => {
        expect(printPyramid(1)).toBe("#");
        expect(printPyramid(2)).toBe(" # \n###");
        expect(printPyramid(3)).toBe("  #  \n ### \n#####");
    });
});

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
describe("createNNMatrix", () => {
    test("should return the spiral matrix", () => {
        expect(createNNMatrix(2)).toEqual([
            [1, 2],
            [4, 3],
        ]);
        expect(createNNMatrix(3)).toEqual([
            [1, 2, 3],
            [8, 9, 4],
            [7, 6, 5],
        ]);
        expect(createNNMatrix(4)).toEqual([
            [1, 2, 3, 4],
            [12, 13, 14, 5],
            [11, 16, 15, 6],
            [10, 9, 8, 7],
        ]);
    });
});
