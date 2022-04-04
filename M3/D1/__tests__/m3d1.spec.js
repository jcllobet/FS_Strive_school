const { describe, test, expect } = require("@jest/globals");
const {
    sumOfTwoInt,
    isOneFifty,
    removeChar,
    largestInt,
    numbersInRange,
    stringCopies,
    returnCity,
    sumOfArray,
    textIfContains,
    textIfNotContains,
    longestString,
    typesOfAngle,
    indexOfGreatestInt,
    greatestEven,
    isPositiveNegative,
    upperLower,
    sumOfTwoIntRange,
    numberToStringStrive,
    acronymGenerator,
} = require("../m3d1.js");

// Generating the relevant tests for each of the functions in the hw.js file

/* 1. A function to calculate the sum of the two given integers. If the two values are the same, return triple their sum. */

console.log(sumOfTwoInt(3, 3));

describe("sumOfTwoInt", () => {
    test("should return the sum of the two given integers", () => {
        expect(sumOfTwoInt(3, 4)).toBe(7);
    });
});

describe("sumOfTwoInt", () => {
    test("If the two values are the same, return triple their sum.", () => {
        expect(sumOfTwoInt(3, 3)).toBe(18);
    });
});
/* 2. A function to check two given integers. Return `true` if one of them is 50 or if their sum is 50. */

describe("isOneFifty", () => {
    test("should return true if one of them is 50", () => {
        expect(isOneFifty(50, 3)).toBe(true);
    });
});

describe("isOneFifty", () => {
    test("should return true if their sum is 50.", () => {
        expect(isOneFifty(25, 25)).toBe(true);
    });
});

/* 3. A function to remove a character at a specified position from a given string: pass the position and the string as parameters, return the new string. */

describe("removeChar", () => {
    test("should return the new string minus the char at the set position", () => {
        expect(removeChar("Hello", 1)).toBe("Hllo");
    });
});

describe("removeChar", () => {
    test("should be able to replace first element", () => {
        expect(removeChar("Hello", 0)).toBe("ello");
    });
});

describe("removeChar", () => {
    test("should be able to replace last element", () => {
        expect(removeChar("Hello", 4)).toBe("Hell");
    });
});

/* 4. A function to find and return the largest of three given integers. */

describe("largestInt", () => {
    test("should return the largest of the three given integers", () => {
        expect(largestInt(3, 4, 5)).toBe(5);
    });
});

/* 5. A function to check if two numbers are in the range 40-60 or 70-100. 
    Return `true` if they do, return `false` if one (or both) don't. */

describe("numbersInRange", () => {
    test("should return true if both of them are in the range 40-60", () => {
        expect(numbersInRange(40, 50)).toBe(true);
    });
});

describe("numbersInRange", () => {
    test("should return true if only of them is in the range 40-60", () => {
        expect(numbersInRange(40, 61)).toBe(false);
    });
});

/* 6. A function to create a new string composed of a specified number of copies of a given string. 
    Pass the string and the number of copies as parameters. */

describe("stringCopies", () => {
    test("should return the new string composed of the given string repeated the given number of times", () => {
        expect(stringCopies("Hello", 3)).toBe("HelloHelloHello");
    });
});

/* 7. A function to display the city name if the string begins with "Los" or "New". 
    Pass the city name as a parameter. Return `false` if they start with a different string. */

describe("returnCity", () => {
    test("should return the city name if the string begins with 'Los'", () => {
        expect(returnCity("Los Angeles")).toBe("Los Angeles");
    });
});

describe("returnCity", () => {
    test("should return dalse name if the string does not begin with 'Los' or 'New'", () => {
        expect(returnCity("Nueva Los Angeles")).toBe(false);
    });
});
/* 8. A function to calculate and return the sum of all elements from an array with 3 elements. 
    Pass the array as a parameter. */
describe("sumOfArray", () => {
    test("should return the sum of all elements from an array with 3 elements", () => {
        expect(sumOfArray([1, 2, 3])).toBe(6);
    });
});

/* 9. A function to test if an array of lenght 2 contains 1 OR 3. 
    Return `true` is it does, `false` if it doesn't. */

describe("textIfContains", () => {
    test("should return true if the array contains 1 or 3", () => {
        expect(textIfContains([1, 3])).toBe(true);
    });
});

/* 10. A function to test if an array of lenght 2 DOES NOT contain 1 or 3. 
    Return `true` if it doesn't, `false` if it does. */
describe("textIfNotContains", () => {
    test("should return true if the array does not contain 1 or 3", () => {
        expect(textIfNotContains([1, 3])).toBe(false);
    });
});

/* 11. A function to find the longest string from a given array of strings. 
    Pass the array as parameter and return the longest string. */

describe("longestString", () => {
    test("should return the longest string from an array of strings", () => {
        expect(longestString(["Hello", "Worlds", "How", "Are", "You"])).toBe(
            "Worlds"
        );
    });
});

/* 12. A function to find the types of a given angle:
  1. Acute angle ⇒ between 0 and 90 degrees. Return `acute`.
    2. Right angle ⇒ 90 degree. Return `right`
    3. Obtuse angle ⇒ between 90 and 180. Return `obtuse`
    4. Straight angle ⇒ 180 degrees. Return `straight`
    Pass the angle as a parameter.
*/

describe("typesOfAngle", () => {
    test("should return acute if the angle is between 0 and 90 degrees", () => {
        expect(typesOfAngle(45)).toBe("acute");
    });
});

/* 13. A function to find and return the index of the greatest element of a given array of integers that you passed as a parameter. */
describe("indexOfGreatestInt", () => {
    test("should return the index of the greatest element of an array of integers", () => {
        expect(indexOfGreatestInt([1, 2, 3, 4, 5])).toBe(4);
    });
});

/* 14. A function to find and return the largest **even** number from an array of integers that is passed a parameter. */
describe("greatestEven", () => {
    test("should return the largest even number from an array of integers", () => {
        expect(greatestEven([1, 2, 3, 4, 5])).toBe(4);
    });
});

/* 15. A function to check from two given integers (passed as parameters) if one is positive and the other is negative. 
    Return `true` if that's the case, return `false` if it's not. */
describe("isPositiveNegative", () => {
    test("should return true if one is positive and the other is negative", () => {
        expect(isPositiveNegative(1, -1)).toBe(true);
    });
});

/* 16. A function to create and return a new string where the first 3 characters and in lower case and the others are in upper case. 
    If the string's length is less than 3, convert the whole string into uppercase. Pass the original string as a parameter. */
describe("upperLower", () => {
    test("should return the new string where the first 3 characters and in lower case and the others are in upper case", () => {
        expect(upperLower("Hello")).toEqual("helLO");
    });
});

describe("upperLower", () => {
    test("If the string's length is less than 3, convert the whole string into uppercase.", () => {
        expect(upperLower("He")).toEqual("HE");
    });
});

/* 17. A function to calculate the sum of two integers (passed as parameters). 
    If the sum is in the 50-80 range, return `65`, otherwise, return `80`. */

describe("sumOfTwoIntRange", () => {
    test("should return 65 if the sum is in the 50-80 range", () => {
        expect(sumOfTwoIntRange(50, 50)).toBe(80);
    });
});

/* 18. A function to convert a number (passed as a parameter) into a string, basing yourself on this example: 
    The number has 3 as a factor ⇒ return `Diego`
    The number has 5 as a factor ⇒ return `Riccardo`
    The number has 7 as a factor ⇒ return `Stefano`
    If the number does not have 3,5, or 7, return the original number. 
    ⚠️ The factor is an integer which evenly divides a number without leaving a remainder. One number can have more than one factor, in that case you should return both names. 
Ex. 15 has both 3 and 5 has factors: the function will return `DiegoRiccardo` */

describe("numberToStringStrive", () => {
    test("The number has 3 as a factor ⇒ return `Diego`", () => {
        expect(numberToStringStrive(3)).toEqual("Diego");
    });
});

describe("numberToStringStrive", () => {
    test("The number has 5 as a factor ⇒ return `Riccardo`", () => {
        expect(numberToStringStrive(5)).toEqual("Riccardo");
    });
});

describe("numberToStringStrive", () => {
    test("15 has both 3 and 5 has factors: the function will return `DiegoRiccardo`", () => {
        expect(numberToStringStrive(15)).toEqual("DiegoRiccardo");
    });
});

/* 19. A function that that takes a phrase as a parameter and returns its acronym.
Ex. British Broadcasting Corporation returns `BBC` */

describe("acronymGenerator", () => {
    test("takes a phrase as a parameter and returns its acronym.", () => {
        expect(acronymGenerator("British Broadcasting Corporation")).toEqual(
            "BBC"
        );
    });
});
