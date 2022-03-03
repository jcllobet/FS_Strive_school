/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Create a variable and assign to it an array containing the first 5 positive numbers.
*/

let x = [1, 2, 3, 4, 5];

/* EXERCISE 2
 Create a variable and assign to it an object containing your name, surname, email address and age.
*/

let personalDetails = {
    name: "John",
    surname: "Doe",
    email: '123@gmail.com',
    age: 30,
};

/* EXERCISE 3
 Add to the previously created object a property with a boolean value to rappresent wheter you have or not a driving license.
*/

personalDetails.hasDrivingLicense = false;

/* EXERCISE 4
 Remove from the previously created object the age property.
*/

delete personalDetails.age;

/* EXERCISE 5
 Create a second object with another name, surname, email address and verify that this object has a different email address than the previous one.
*/

let differentPerson = {
    name: "Jane",
    surname: "DAO",
    email: '456@gmail.com',
};

console.log(differentPerson.email === personalDetails.email);

/* EXERCISE 6
 You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
 Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
 Write an algorithm that calculates the total cost to charge the user with.
*/

let totalShoppingCart = 10;
let holidays = true;

console.log(totalShoppingCart);

let totalCost = (item, isBlackFriday) => {
    if (item <= 50) {
        item += 10;
    } if (isBlackFriday) {
        item = item * 0.8;
    }
    return item;
}

console.log(totalCost(totalShoppingCart, holidays));

/* EXERCISE 7
 You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
 Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/



/* EXERCISE 8
 Create a variable and assign to it an object representing a car, with properties like brand, model and licensePlate.
 Then clone it 5 times, and change the licensePlate for each cloned car without affecting the original one.
*/

let car = {
    brand: "Ford",
    model: "Mustang",
    licensePlate: "ABC123",
};

let car2 = { ...car };
car2.licensePlate = "DEF456";

let car3 = { ...car };
car3.licensePlate = "GHI789";

let car4 = { ...car };
car4.licensePlate = "JKL012";

let car5 = { ...car };
car5.licensePlate = "MNO345";


console.log(car, '\n', car2, '\n', car3, '\n', car4, '\n', car5);

// TODO: Optimize this code above


/* EXERCISE 9
 Create a variable called carsForRent and assign to it an array containing all the cars from the previous exercise.
*/

let carsForRent = [car, car2, car3, car4, car5];

/* EXERCISE 10
 Remove the first and the last car from the carsForRent array.
*/

carsForRent.pop();
carsForRent.shift();

/* EXERCISE 11
 Print to the console the type of the car variable you created before, as well as the types of its licensePlate and brand properties.
*/

console.log(car, '\n', car2, '\n', car3, '\n', car4, '\n', car5);
console.log(carsForRent);

/* EXERCISE 12
 Create a new variable called carsForSale assigning to it an empty array, and then insert 3 cars into it.
 Create a new variable called totalCars and assign to it the total number of cars present in the carsForSale and carsForRent arrays.
*/

let carsForSale = [];
carsForSale.push(car2, car3, car4);



let totalCars = (arr1, arr2) => {
    let finalCars = new Set();

    for (let i = 0; i < arr1.length; i++) {
        finalCars.add(arr1[i]);
    } for (let i = 0; i < arr2.length; i++) {
        finalCars.add(arr2[i]);
    }

    return [...finalCars];
}

console.log(`unique cars: ${totalCars(carsForSale, carsForRent).length}`);

/* EXERCISE 13
 Using a loop, print to the console all the data for each car in the carsForSale array.
*/

console.log(carsForSale)

/* WHEN YOU ARE FINISHED
 Upload the .js file on Eduflow before 5PM CET. In the next days we'll also learn how to use GIT!
*/