console.log("hello world")

// EX7: Write a function to change the h1 text to something else

document.getElementById("shop_title").innerHTML = "NOT an Iphone Repair Shop";

// Write a function to change the page background color

document.body.style.backgroundColor = "#E6E9EB";

// EX9: Write a function to change the footer address with a fake one

document.getElementsByTagName("footer")[0].innerHTML = "Fake Street 123, Fake City, Fake Country";

// EX10: Write a function to add a CSS class to every Amazon link

function myFunction() {
    let elements = document.getElementsByTagName("a");
    for (let i = 0; i < elements.length; i++) {
        elements[i].classList.add("strive");
    }
}

myFunction();

// EX11: Write a function to toggle a CSS class for all the images in the table; that class should set the visibility of the image

function toggle() {
    let elements = document.getElementsByTagName("img");
    for (let i = 0; i < elements.length; i++) {
        elements[i].classList.toggle("hidden");
    }
}

toggle();

// EX12: Write a function to color the price of the products in a different one every time it's invoked

let colorList = ['red', 'blue', 'yellow', 'green', 'orange']

function color(colorList) {
    counter = 0;
    let elements = document.getElementsByTagName("td");
    for (let i = 0; i < elements.length; i++) {
        if (elements[i].innerHTML.includes("$")) {
            elements[i].style.color = colorList[counter];
            counter += 1;
        }
    }
}

color(colorList);