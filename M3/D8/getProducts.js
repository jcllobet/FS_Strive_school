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
            headers: myHeaders,
            redirect: "follow"
        };
        const response = await fetch(endpoint, requestOptions);
        const result = await response.text();
        return result;
    } catch (error) {
        console.log("Error: ", error);
    }
};

window.onload = async () => {
    console.log("starting Window-onload");
    let url = "https://striveschool-api.herokuapp.com/api/product/";
    //let prodID = "5d318e1a8541744830bef139";
    //let data = "";
    const response = await getProducts(url, "GET");
    console.log(response);
};
