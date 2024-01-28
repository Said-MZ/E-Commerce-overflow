// get data from local storage

const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart"));
const shoesFromLocalStorage = JSON.parse(localStorage.getItem("shoes"));

console.log(cartFromLocalStorage);