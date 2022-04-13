//import fetch from "node-fetch";

import getProduct from "./getProduct";

let userArray = [];

const STATE = {
    isAdmin: false
};

//______________________________________________________________________________

// Async Function to Fetch users using await

const fetchUsers = async () => {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );
        return response.json();
    } catch (error) {
        console.log(err);
    }
};

// Display users onload

const renderUsers = (userArray) => {
    // target the right div
    const row = document.querySelector("#product-display");
    row.innerHTML = "";
    console.log(row);

    userArray.forEach((user) => {
        console.log(user);
        const col = document.createElement("div");
        col.className = "my-3 mx-3 col-md-3";
        const card = document.createElement("div");

        card.className = "card";
        console.log(STATE);
        console.log("all is true");
        card.innerHTML += `
            <img class="card-img-top" src="..." alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${user.name}</h5>
                <p class="card-text">${user.username}</p>
                <p class="card-text">${user.email}</p>
                <a href="/detail.html" event= class="btn btn-primary"> Render ${user.id}</a>
            </div>
            `;

        col.appendChild(card);
        row.appendChild(col);
    });
};

const addDropdown = async (userArray) => {
    const row = document.querySelector(".row");
    const search = document.createElement("div");
    search.className = "col-10 my-3 mx-3";
    search.innerHTML = `    
        <div class="input-group">
            <div class="form-outline">
            <input type="search" id="form1" class="form-control" />
            <label class="form-label" for="form1">Search</label>
            </div>
            <button type="button" class="btn btn-primary">
            <i class="fas fa-search"></i>
            </button>
        </div>
    `;
    row.prepend(search);
    row.prepend(dropdown);

    // Create a drowpdown element and append it
    // If dropdown == NAME , display only user names
};

const addDropdownListeners = () => {
    const dropItemArray = document.querySelectorAll(".dropdown-item");
    console.log(dropItemArray);
    if (dropItemArray.lenght !== 0) {
        dropItemArray.forEach((option) => {
            option.addEventListener("click", handleDropdownFilter);
        });
        console.log("listeners initated");
    } else {
        console.log("item array is empty");
    }
};

const handleDropdownFilter = (event) => {
    console.log(event.target.innerHTML);
    if (event.target.innerHTML.toLowerCase() == "name") {
        console.log("filtering by name");
        STATE.displayUsername = false;
        STATE.displayEmail = false;
        console.log("STATE", STATE);
        console.log("GLOBAL", userArray);
        renderUsers(userArray);
    } else {
        console.log("something is not working");
    }
};

window.onload = async () => {
    console.log("starting Window-onload");
    let url = "https://striveschool-api.herokuapp.com/api/product/";
    let prodID = "5d318e1a8541744830bef139";
    //let data = "";
    try {
        await getProduct(url, prodID, "get");
    } catch (error) {
        console.log("Error: ", error);
    }
    console.log(data);
};

// window.onload = async () => {
//     const data = await fetchUsers();
//     userArray = [...data];
//     // to be used in UserDetailPage
//     //const { id, name, username, email, address, phone, website } = userArray;

//     localStorage.setItem("userArray", JSON.stringify(userArray));
//     console.log("Logging user array", userArray);
//     renderUsers(userArray);
//     addDropdown(userArray);
//     addDropdownListeners(userArray);
//     userNames(userArray);
//     console.log(userNames(userArray));
//     userAddress(userNames(userArray), userArray);
//     console.log(userAddress(userNames(userArray), userArray));
// };
