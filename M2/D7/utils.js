// JS Exercises

// EX11) Write a function to add a new link into the navbar

const addNewLink = (link, text) => {
    let target = document.querySelector('body > div > div > nav');
    let sibling= document.querySelector('body > div > div > nav > a:first-of-type');
    let newLink = document.createElement('a');
    newLink.href = link;
    newLink.textContent = text;
    newLink.classList = sibling.classList //cool trick
    target.appendChild(newLink);
}

addNewLink('https://www.google.com', 'Google');

// EX12) Write a function to change the color of the main title

const changeMainTitleColor = (color) => {
    let target = document.querySelector('.jumbotron > div > h1');
    target.style.color = color;
}

changeMainTitleColor('red');

// EX13) Write a function to change the background of the jumbotron

const changeMainTitleBackground = (url) => {
    let target = document.querySelector('.jumbotron');
    target.style.background = url;
}

changeMainTitleBackground('url(https://picsum.photos/1000/700)');

// EX14) Write a function to remove all the links under "Elsewhere"

const removeAllLinks = () => {
    document.querySelectorAll('div > aside > div:nth-child(3) > ol > li').forEach(e => {
        console.log(e.innerText);
        e.remove();
    });
}

removeAllLinks();

// EX15) Write a function to change the column size for heading in jumbotron

const changeJumbotronColumnSize = (size, query) => {
    let target = document.querySelector(query);
    target.style.columns = size;
}

changeJumbotronColumnSize('2', '.jumbotron > div > h1');

// EX16) Write a function to remove the "Search" magnifying glass icon

const removeSearchIcon = (query) => {
    let target = document.querySelector(query);
    console.log(target);
    target.setAttribute('title', '');
}

removeSearchIcon('div > header > div > div:nth-child(3) > a > svg[title="Search"]');


// EX17) Write a function to trim just the first 50 characters in the first paragraph for each blog post

// EX18) Write a function and attach it to the "Newer" button, to add new Blog Post (just div and title)

// EX19) Write a function and attach it to the "Older" button, to remove the last Blog Post

// EX20) Write an alert with the name of the author every time the user hover with the mouse over an author name

