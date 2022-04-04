/* 1. Create a function to calculate the sum of the two given integers. If the two values are the same, return triple their sum. */

const sumOfTwoInt = (int1, int2) => {
    let sum = int1 + int2;

    if (int1 === int2) {
        return 3 * sum;
    } else {
        return sum;
    }
};

/* 2. Create a function to check two given integers. Return `true` if one of them is 50 or if their sum is 50. */

const isOneFifty = (i1, i2) => {
    if (i1 === 50 || i2 === 50 || i1 + i2 === 50) {
        return true;
    } else {
        return false;
    }
};
/* 3. Create a function to remove a character at a specified position from a given string: pass the position and the string as parameters, return the new string. */

const removeChar = (text, position) => {
    if (position > text.length) {
        return text;
    } else if (position === text.length - 1) {
        return text.slice(0, position);
    } else {
        return text.slice(0, position) + text.slice(position + 1, text.length);
    }
};

/* 4. Create a function to find and return the largest of three given integers. */

const largestInt = (i1, i2, i3) => {
    return Math.max(i1, i2, i3);
};

/* 5. Create a function to check if two numbers are in the range 40-60 or 70-100. 
    Return `true` if they do, return `false` if one (or both) don't. */

const numbersInRange = (i1, i2) => {
    if ((i1 >= 40 && i1 <= 60) || (i1 >= 70 && i1 <= 100)) {
        if ((i2 >= 40 && i2 <= 60) || (i2 >= 70 && i2 <= 100)) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
};
/* 6. Create a function to create a new string composed of a specified number of copies of a given string. 
    Pass the string and the number of copies as parameters. */

const stringCopies = (text, copies) => {
    return text.repeat(copies);
};

/* 7. Create a function to display the city name if the string begins with "Los" or "New". 
    Pass the city name as a parameter. Return `false` if they start with a different string. */

const returnCity = (name) => {
    if (name.slice(0, 3) === "Los" || name.slice(0, 3) === "New") {
        return name;
    } else {
        return false;
    }
};

/* 8. Create a function to calculate and return the sum of all elements from an array with 3 elements. 
    Pass the array as a parameter. */

const sumOfArray = (array) => {
    return array[0] + array[1] + array[2];
};

/* 9. Create a function to test if an array of lenght 2 contains 1 OR 3. 
    Return `true` is it does, `false` if it doesn't. */

const textIfContains = (array) => {
    if (array.includes(1) || array.includes(3)) {
        return true;
    } else {
        return false;
    }
};

/* 10. Create a function to test if an array of lenght 2 DOES NOT contain 1 or 3. 
    Return `true` if it doesn't, `false` if it does. */

const textIfNotContains = (array) => {
    if (array.includes(1) || array.includes(3)) {
        return false;
    } else {
        return true;
    }
};

/* 11. Create a function to find the longest string from a given array of strings. 
    Pass the array as parameter and return the longest string. */

const longestString = (array) => {
    let longest = "";
    array.forEach((element) => {
        if (element.length > longest.length) {
            longest = element;
        }
    });
    return longest;
};

/* 12. Create a function to find the types of a given angle:
  1. Acute angle ⇒ between 0 and 90 degrees. Return `acute`.
    2. Right angle ⇒ 90 degree. Return `right`
    3. Obtuse angle ⇒ between 90 and 180. Return `obtuse`
    4. Straight angle ⇒ 180 degrees. Return `straight`
    Pass the angle as a parameter.
*/

const typesOfAngle = (angle) => {
    if (angle >= 0 && angle <= 90) {
        return "acute";
    } else if (angle === 90) {
        return "right";
    } else if (angle >= 90 && angle <= 180) {
        return "obtuse";
    } else if (angle === 180) {
        return "straight";
    }
};

/* 13. Create a function to find and return the index of the greatest element of a given array of integers that you passed as a parameter. */
const indexOfGreatestInt = (array) => {
    let greatest = Number.MIN_VALUE;
    array.forEach((element, index) => {
        if (element > greatest) {
            greatest = element;
        }
    });
    return array.indexOf(greatest);
};

/* 14. Create a function to find and return the largest **even** number from an array of integers that is passed a parameter. */

const greatestEven = (array) => {
    let greatest = Number.MIN_VALUE;
    array.forEach((element) => {
        if (element % 2 === 0 && element > greatest) {
            greatest = element;
        }
    });
    return greatest;
};

/* 15. Create a function to check from two given integers (passed as parameters) if one is positive and the other is negative. 
    Return `true` if that's the case, return `false` if it's not. */

const isPositiveNegative = (i1, i2) => {
    if (i1 > 0 && i2 < 0) {
        return true;
    } else if (i1 < 0 && i2 > 0) {
        return true;
    } else {
        return false;
    }
};
/* 16. Create a function to create and return a new string where the first 3 characters and in lower case and the others are in upper case. 
    If the string's length is less than 3, convert the whole string into uppercase. Pass the original string as a parameter. */

const upperLower = (string) => {
    if (string.length < 3) {
        return string.toUpperCase();
    } else {
        return string.slice(0, 3).toLowerCase() + string.slice(3).toUpperCase();
    }
};

/* 17. Create a function to calculate the sum of two integers (passed as parameters). 
    If the sum is in the 50-80 range, return `65`, otherwise, return `80`. */

const sumOfTwoIntRange = (i1, i2) => {
    let sum = i1 + i2;
    if (sum >= 50 && sum <= 80) {
        return 65;
    } else {
        return 80;
    }
};

/* 18. Create a function to convert a number (passed as a parameter) into a string, basing yourself on this example: 
    The number has 3 as a factor ⇒ return `Diego`
    The number has 5 as a factor ⇒ return `Riccardo`
    The number has 7 as a factor ⇒ return `Stefano`
    If the number does not have 3,5, or 7, return the original number. 
    ⚠️ The factor is an integer which evenly divides a number without leaving a remainder. One number can have more than one factor, in that case you should return both names. 
Ex. 15 has both 3 and 5 has factors: the function will return `DiegoRiccardo` */

const numberToStringStrive = (number) => {
    let newstring = "";
    if (number % 3 === 0) {
        newstring += "Diego";
    }
    if (number % 5 === 0) {
        newstring += "Riccardo";
    }
    if (number % 7 === 0) {
        newstring += "Stefano";
    }
    if (newstring === "") {
        return number;
    } else {
        return newstring;
    }
};

/* 19. Create a function that that takes a phrase as a parameter and returns its acronym.
Ex. British Broadcasting Corporation returns `BBC` */

const acronymGenerator = (phrase) => {
    let acronym = "";
    phrase.split(" ").forEach((element) => {
        acronym += element[0].toUpperCase();
    });
    return acronym;
};

module.exports = {
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
};

console.log("all modules exported");
