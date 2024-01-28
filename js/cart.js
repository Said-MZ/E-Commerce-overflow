// get data from local storage

const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart")) || [];
// const shoesFromLocalStorage = JSON.parse(localStorage.getItem("shoes")) ;

// get the cart container

const cartContainer = document.querySelector("main .container");

// get the total price
let totalPrice = 0;
const div = document.createElement("div");
cartFromLocalStorage.forEach((item) => {
  totalPrice += item.price;
  console.log(item);
  // cart
  div.innerHTML += `
    <div class="cart">
    <div class="cart-img">
    <img src="${item.image}" alt="${item.name}" />
    </div>
    <div class="cart-text">
    <div class="cart-details">
    <h4 class="cart-name">${item.name}</h4>
    <span class="total">$${item.price}</span>
    </div>
    <div class="cart-btn">
    </div>
    </div>
    <div class="cart-quantity">
    </div>
    <div class="cart-total">
    </div>
    <button class="btn remove"  href="./pages/shop.html">Remove</button>
    </div>
    `;
});
cartContainer.appendChild(div);
