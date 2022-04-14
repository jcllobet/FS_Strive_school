const BASE_URL = "https://striveschool-api.herokuapp.com/api/product/";
const headers = new Headers({
    "Content-Type": "application/json",
    Authorization: "Bearer [YOUR API KEY]"
});

const postProduct = (product, callback) => {
    fetch(BASE_URL, {
        headers,
        method: "POST",
        body: JSON.stringify(product)
    })
        .then((res) => res.json())
        .then((data) => callback(null, data))
        .catch((error) => callback(error, null));
};

const formOnSubmit = function (e) {
    e.preventDefault();
    const name = document.querySelector("#name").value;
    const brand = document.querySelector("#brand").value;
    const imageUrl = document.querySelector("#imageUrl").value;
    const price = parseInt(document.querySelector("#price").value);
    const description = document.querySelector("#description").value;
    const product = { name, brand, imageUrl, price, description };
    postProduct(product, (err, data) => {
        if (err) {
            alert(err.message);
        } else {
            e.target.reset();
            window.location.replace("/");
        }
    });
};

window.onload = function () {
    const form = document.querySelector("form");
    form.onsubmit = formOnSubmit;
};
