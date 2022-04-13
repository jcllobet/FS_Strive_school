const STATE = {
    isAdmin: false
};

let productsArray = [];

const getProducts = async (endpoint, requestMethod) => {
    try {
        console.log("Fetching...");
        let myHeaders = new Headers();

        myHeaders.append(
            "Authorization",
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDgxN2M1ZWU3ODE4NzAwMTVjMjY3YTgiLCJpYXQiOjE2NDk4NTIyNzksImV4cCI6MTY1MTA2MTg3OX0.REp870Hg9tQk7-FQ-ZQH1IItreSnvI6RHFN0HCErSE0"
        );

        let requestOptions = {
            method: `${requestMethod}`,
            headers: myHeaders
        };

        const response = await fetch(endpoint, requestOptions);
        const results = await response.json();
        console.log("We have the results:", results);

        // check if resp okay
        return results;
    } catch (error) {
        console.log("Error: ", error);
    }
};

const renderProducts = (productsArray) => {
    console.log("starting the rendering");
    const row = document.querySelector("#product-display");
    row.innerHTML = "";
    console.log(row);

    productsArray.forEach((product) => {
        if (!product.imageUrl.includes("https")) {
            product.imageUrl = "https://via.placeholder.com/150";
        }
        // shortening names and description
        if (product.name.length > 20) {
            product.name = product.name.substring(0, 20) + "...";
        }
        if (product.description.length > 20) {
            product.description = product.description.substring(0, 20) + "...";
        }
        if (product._id.length > 5) {
            product._id = product._id.substring(0, 5) + "...";
        }
        const col = document.createElement("div");
        col.className = "my-3 mx-3 col-md-3";
        const card = document.createElement("div");

        card.className = "card";
        card.innerHTML += `
            <img class="card-img-top max-size img-responsive" src=${product.imageUrl} alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text">${product.brand}</p>
                <p class="card-text">${product.description}</p>
                <p class="card-text">$ ${product.price}</p>
                <a href="/detail.html" event= class="btn btn-primary"> Access ${product._id}</a>
            </div>
            `;

        col.appendChild(card);
        row.appendChild(col);
    });
};

// const addLoginListeners = () => {
// };

window.onload = async () => {
    console.log("starting Window-onload");
    let url = "https://striveschool-api.herokuapp.com/api/product/";
    const data = await getProducts(url, "get");
    productsArray = [...data];
    renderProducts(data);
};
