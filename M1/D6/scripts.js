console.log("hello world")

// EX7: Write a function to change the h1 text to something else

document.getElementById("shop_title").innerHTML = "NOT an Iphone Repair Shop";

// Write a function to change the page background color

document.body.style.backgroundColor = "#E6E9EB";

// EX9: Write a function to change the footer address with a fake one

document.getElementsByTagName("footer")[0].innerHTML = "Fake Street 123, Fake City, Fake Country";

// EX10: Write a function to add a CSS class to every Amazon link

function myFunction() {
    var element = document.getElementById("myDIV");
    element.classList.add("mystyle");
  }

// EX11: Write a function to toggle a CSS class for all the images in the table; that class should set the visibility of the image

// EX12: Write a function to color the price of the products in a different one every time it's invoked