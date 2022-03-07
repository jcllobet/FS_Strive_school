console.log("hello world")

// EX7: Write a function to change the h1 text to something else

// textContents is all text contained by an element and all its children that are for formatting purposes only.
// innerText returns all text contained by an element and all its child elements.
// innerHtml returns all text, including html tags, that is contained by an element.

// By ID

console.log()

//document.getElementById("shop_title").innerHTML = "NOT an Iphone Repair Shop";

// By Tag

let changeTextBy = (method, element, newText, amount = 'one') => {
    if (method === 'id') {
        document.getElementById(element).innerHTML = newText;
    } else if (method === 'className') {
        target = document.getElementsByClassName(element);
        if (amount === 'all') {
            for (let i = 0; i < target.length; i++) {
                target[i].innerHTML = newText;
            }
        } else {
            target[0].innerHTML = newText;
        }
    } else if (method === 'tagName') {
        target = document.getElementsByTagName(element);
        if (amount === 'all') {
            for (let i = 0; i < target.length; i++) {
                target[i].innerHTML = newText;
            }
        } else {
            target[0].innerHTML = newText;
        }
    } else if (method === 'query') {
        target = document.querySelector(element);
        if (amount === 'all') {
            for (let i = 0; i < target.length; i++) {
                target[i].innerHTML = newText;
            }
        } else {
            target[0].innerHTML = newText;
        }
    } else {
        console.log('input a valid method')
    }
}

changeTextBy('tagName', 'h1', 'NOT an iPhone Repair Shop')

// Write a function to change the page background color

let changeBackgroundColor = (color) => {
    document.body.style.backgroundColor = color;
}

changeBackgroundColor("#E6E9EB")

// EX9: Write a function to change the footer address with a fake one

let addressChange = (newStreet) => {
    // we take the first part!
    let newAddress = document.getElementsByTagName("footer")[0].children[1].innerHTML.split(':')[0];
    // append the new address
    let address = document.getElementsByTagName("footer")[0].children[1].innerHTML = newAddress + ': ' + newStreet;
}

addressChange("C/ Fake Street 123, Fake City, Fake Country")

console.log(`Query: ${document.querySelector('footer, p').innerHTML}`)

let footerText = document.querySelector('footer, p').innerHTML

console.log(footerText.split(','))


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