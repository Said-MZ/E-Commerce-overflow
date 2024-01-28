import shoes from "./productsData.js";

// get the id from the url
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get("id");

// get the blog with the id
const shoesFromLocalStorage = JSON.parse(localStorage.getItem("shoes"));

let shoesData = shoesFromLocalStorage || shoes;
const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart"));

const item = shoesData.find((shoe) => shoe.id === parseInt(id));

const itemImg = document.querySelector("header > img");
const itemName = document.querySelector(".item .name");
const itemDescription = document.querySelector(".item .description");
const itemPrice = document.querySelector(".item .price");
const itemColor = document.querySelector(".item .color");
const itemQuantity = document.querySelector(".item .quantity");
const itemSize = document.querySelector(".item .size");

itemImg.alt = item.name;
itemImg.src = item.image;
itemName.textContent = item.name;
itemDescription.textContent = item.description;
itemPrice.textContent = "Price: $" + item.price;
itemColor.textContent = "Color: " + item.color;
itemQuantity.textContent = "Stock: " + item.quantity;
itemSize.textContent = "Size :" + item.size;

if (item.quantity === 0 || !item.isAvailable) {
  itemImg.classList.add("unavailable");
}

// cart

const addToCartBtn = document.querySelector(".add-to-cart-btn");
if (item.quantity === 0 || !item.isAvailable) {
  addToCartBtn.disabled = true;
  addToCartBtn.textContent = "Out of stock";
  addToCartBtn.classList.add("disabled");
}
const cartCount = document.querySelector(".cart-count");
cartCount.textContent = cartFromLocalStorage?.length || 0;
let cart = cartFromLocalStorage || [];

addToCartBtn.addEventListener("click", () => {
  cart.push(item);
  localStorage.setItem("cart", JSON.stringify(cart));
  cartCount.textContent = cart.length;
  addToCartBtn.disabled = true;
  addToCartBtn.textContent = "Added to cart";
  addToCartBtn.classList.add("disabled");

  item.quantity--;
  itemQuantity.textContent = "Stock: " + item.quantity;
  if (item.quantity === 0 || !item.isAvailable) {
    itemImg.classList.add("unavailable");
  }
  localStorage.setItem("shoes", JSON.stringify(shoesData));

  setTimeout(() => {
    addToCartBtn.disabled = false;
    addToCartBtn.textContent = "Add to cart";
    addToCartBtn.classList.remove("disabled");
  }, 2000);
});
