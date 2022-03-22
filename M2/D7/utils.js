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
    target.innerHTML = 'fun';
}

removeSearchIcon('div > header > div > div:nth-child(3) > a > svg > title');


// EX17) Write a function to trim just the first 50 characters in the first paragraph for each blog post

const trimChars = (query) => {
    let target = document.querySelectorAll(query).forEach(e => {
        console.log(e.innerText);
        e.innerHTML = e.innerHTML.substring(0, 50);
    });
    
    //target
}

trimChars('main > div > div > div > p:nth-child(3)');

// EX18) Write a function and attach it to the "Newer" button, to add new Blog Post (just div and title)

const addNewerListener = (btnQuery) => {
    let target = document.querySelector(btnQuery);
    target.classList.remove('disabled');
    target.setAttribute('href', '#');
    console.log(target);
    target.addEventListener('click', addBlogPost);
}

const addBlogPost = () => {
    let sibling = document.querySelector('main > div > div > div:first-of-type');
    let parent = sibling.parentElement;
    console.log(sibling)
    let newPost = document.createElement('div');
    newPost.classList = sibling.classList;
    let title = document.createElement('h2');
    title.textContent = 'New Blog Post';
    newPost.appendChild(title);
    parent.insertBefore(newPost, sibling);
}

// EX19) Write a function and attach it to the "Older" button, to remove the last Blog Post

const addOlderListener = (btnQuery) => {
    let target = document.querySelector(btnQuery);
    console.log(target);
    target.setAttribute('href', '#');
    target.addEventListener('click', removeBlogPost);
}

const removeBlogPost = () => {
    let target = document.querySelector('main > div > div > div:last-of-type');
    target.remove();
}

// EX20) Write an alert with the name of the author every time the user hover with the mouse over an author name

const addAlertListener = () => {

}

const onLoad = () => {
    addNewerListener('a.btn.btn-outline-secondary.disabled');
    addOlderListener('.blog-pagination > a:first-of-type');
    addAlertListener();
}

window.onload = onLoad ();