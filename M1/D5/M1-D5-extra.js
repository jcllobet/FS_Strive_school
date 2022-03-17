let { giveMeRandom } = require('./M1-D5.js')
// Additional assignments for Day 5

/* EXTRA 1
 Write a function called "checkArray" which receives an array of random numbers (created with giveMeRandom) and prints, for each item, whether it's bigger than 5 or not.
 The function should return the sum of just the numbers bigger than 5.
*/

let checkArray = (arr) => {
    console.log(`Original Array: ${arr}`)
    return arr.filter(num => num > 5)
}

console.log(checkArray(giveMeRandom(5)))

/* EXTRA 2
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "shoppingCartTotal" which calculates the total due to the shop.
*/

let apple = {
    price: 0.1,
    name: 'Apple',
    id: 1001,
    quantity: 5,
}

let car = {
    price: 10000,
    name: 'Volvo',
    id: 1002,
    quantity: 1,
}

let toiletPaper = {
    price: 1,
    name: 'Mimosin',
    id: 1003,
    quantity: 8,
}

let shoppingCart = [apple, car, toiletPaper]

console.log(shoppingCart)

let shoppingCartTotal = (objArr) => {
    finalPrice = 0;
    for(let i = 0; i < objArr.length; i++) {
        console.log(objArr[i])
        finalPrice += objArr[i].price * objArr[i].quantity
    }
    return finalPrice
}

console.log(`Final Price: ${shoppingCartTotal(shoppingCart)}`)

/* EXTRA 3
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "addToShoppingCart" which receives a new object, adds it to shoppingCart and returns the total number of items in the shoppingCart.
*/

let orange = {
    price: 2,
    name: 'Valencia',
    id: 1004,
    quantity: 150,
}

let addToShoppingCart = (newObj, ObjArr) => {
    let uniqueIds = [...new Set(ObjArr.map(item => item.id))];
    if (!(uniqueIds.includes(newObj.id))) {
        ObjArr.push(newObj)
    }
    let sumQuantity = ObjArr.reduce((accumulator, currentValue) => (accumulator + currentValue.quantity), 0);
    console.log(sumQuantity)
    return sumQuantity
}

console.log(`Final Quantity: ${addToShoppingCart(orange, shoppingCart)}`)

// kind of tricky to use reduce and parameters within objects

/* EXTRA 4
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "maxShoppingCart" which receives the shoppingCart array and returns the most expensive item in it.
*/

let maxShoppingCart = (ObjArr) => {
    let maxQuantity = ObjArr.reduce((previousValue, currentValue) => (previousValue.price < currentValue.price) ?  currentValue : previousValue);
    return maxQuantity
}

// There is an edge case when two items are the same price (it would return the first one that was saved)

console.log(`The most expensive item is a ${maxShoppingCart(shoppingCart).name} with a price of $${maxShoppingCart(shoppingCart).price}`)

/* EXTRA 5
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "latestShoppingCart" which receives the shoppingCart array and returns the last item.
*/

let latestShoppingCart = (ObjArr) => {
    return ObjArr[ObjArr.length - 1]
}

console.log(latestShoppingCart(shoppingCart))

/* EXTRA 6
 Create a function called "loopUntil" which receives an integer x between 0 and 9 as a parameter.
 The function loops and prints a random number between 0 and 9 until the random number is bigger than x for three times in a row.
*/

let loopUntil = (num) => {
    counter = 0;
    while (counter < 3) {
        let randNum = getRandomIntInclusive(0,9)
        console.log(randNum)
        if (randNum > num) {
            counter += 1
        } else {
            counter = 0
        }
    }
    return 'The loop is over'
}

function getRandomIntInclusive(lowNum, highNum) {
    let num = Math.round(Math.random() * 1000);
    if (num > highNum) {
        num = highNum
    } else if (num < lowNum) {
        num = lowNum
    }
    return num
}


console.log(loopUntil(5))

/* EXTRA 7
 Write a function called "average" which receives an array and returns the average numerical value. The function automatically skips non-numeric entries in the array.
*/

let list = [1,2,3,4];

let average = (arr) => {
    return (arr.reduce((p,v) => p+v)/arr.length).toPrecision(3)
}

console.log(average(list))

/* EXTRA 8
 Write a function called "longest" to find the longest string from a given array of strings.
*/

let stringArray = ['test', 'apple', 'Don', 'Lucash', 'VeryLongGermanName']

let longest = (arr) => {
    return arr.reduce((prev, val) => prev.length > val.length ? prev : val)
}

console.log(longest(stringArray))

/* EXTRA 9
 Write a function to create a very simple anti spam filter for your mailbox. The function takes a string emailContent, and returns a boolean.
 The function should return true if the emailContent string does not contain the words SPAM or SCAM.
*/

let emailContent = 'This is a very long Spam email for you sir';
let emailContent2 = 'This is a very long and nice email for you sir';
let spamList = ['spam', 'scam']

let isSpam = (str, spamArr) => {
    let wordArr = str.toLowerCase().split(' ');
    let hasSpam = wordArr.filter(word => (spamArr.includes(word)));

    return hasSpam.length > 0
}

console.log(isSpam(emailContent, spamList))

// Same but with early stopping

let isFastSpam = (str, spamArr) => {
    let wordArr = str.toLowerCase().split(' ');
    for (let i = 0; i < spamArr.length; i++) {
        if (wordArr.indexOf(spamArr[i]) !== -1) {
            console.log(`Stopping at index: ${wordArr.indexOf(spamArr[i])} , word: ${wordArr[wordArr.indexOf(spamArr[i])]}`)
            return true
        }
    }
    return false
}

console.log(`Faster test: ${isFastSpam(emailContent, spamList)}`)

/* EXTRA 10
 Write a function that receives a date as a parameter and calculates the number of days passed since the given date.
*/

let calculateDaysSince = (date) => {
    let today = new Date();
    let days_diff = (today.getTime() - date.getTime())/(86000*1000)
    return `${Math.round(days_diff)} have passed since ${date.toLocaleDateString('en-GB')} and ${today.toLocaleDateString('en-GB')}` ;
}

console.log(calculateDaysSince(new Date("06/30/2019")));

/* EXTRA 11
 Write a function called "matrixGenerator" which receives two integers, x and y, as parameters.
 The result should be a matrix of x times y with, as value, the index of the position.
 Ex.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

let matrixGenerator = (rows, columns) => {
    let matArr = []
    for (let row = 0; row < rows; row ++){
        let rowArr = [];
        for (let col = 0; col < columns; col ++){
            rowArr.push(`${row}${col}`);
        }
        matArr.push(rowArr);
    }
    return matArr
}

console.log(matrixGenerator(2,3));
/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/