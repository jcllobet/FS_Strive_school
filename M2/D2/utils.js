// MANDATORY JS EXERCISES (create a different file for this exercise)

//     1) Save this array in a variable called genres: ["Comedy", "Drama", "Romance", "Horror", "Sci-Fi", "Documentary"]

let genres = ["Comedy", "Drama", "Romance", "Horror", "Sci-Fi", "Documentary"];

//     2) Create an unordered list using JavaScript and save it in a variable

//     3) Cycle the array and create a list-item via JavaScript for every element

//     4) Insert the genere as text in the list-item

//     5) Append the list items in the unordered list

//     6) Append the unordered list in the document. The list should appear in the page.

const createUnorderedList = (id, array) => {
    let footer = document.getElementById(id);
    let div = document.createElement("div");
    div.classList.add("container");
    let list = document.createElement("ul");
    let h3 = document.createElement("h3");
    h3.innerText = "Genres:";
    div.appendChild(h3);
    array.forEach(element => {
        let listItem = document.createElement("li");
        listItem.innerHTML = element;
        list.appendChild(listItem);
    });
    div.appendChild(list);
    footer.parentElement.insertBefore(div, footer);
}

createUnorderedList("footer", genres);