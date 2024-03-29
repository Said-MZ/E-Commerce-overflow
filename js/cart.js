// get data from local storage

const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart")) || [];
const shoesFromLocalStorage = JSON.parse(localStorage.getItem("shoes"));

// get the cart container

const cartContainer = document.querySelector("main .container");
if (cartFromLocalStorage.length === 0) {
  cartContainer.innerHTML = `
  <div class="empty-cart" style="width: 100%;">
  <h1>Your cart is currently empty</h1>
  <div>
    <button style="display:block; margin:2rem auto; "
    onclick="window.location.href='./shop.html'"
    class="btn">Continue Shopping</button>
  </div>
  </div>
  `;
}
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
    <button class=" remove"  href="./pages/shop.html">Remove</button>
    </div>
    `;
});
cartContainer.appendChild(div);

// handle remove button

const removeBtns = document.querySelectorAll(".remove");
removeBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    cartFromLocalStorage.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cartFromLocalStorage));
    shoesFromLocalStorage[index].quantity += 1;
    localStorage.setItem("shoes", JSON.stringify(shoesFromLocalStorage));
    location.reload();
  });
});

// coupon and total price

const total = document.querySelector(".totalPrice");
const couponForm = document.querySelector(".coupon");
const couponInput = document.querySelector(".coupon input");
const couponBtn = document.querySelector(".coupon button");
total.innerHTML = `$${totalPrice}`;

couponBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const coupon = couponInput.value;
  if (coupon.toUpperCase() === "50OFF" && cartFromLocalStorage.length > 0) {
    const newTotal = totalPrice / 2;
    total.innerHTML = `<span class="old-price">$${totalPrice}</span> $${newTotal}`;
    couponInput.value = "";
    displayAlert("Success", "Coupon is valid, You got 50% discount", "success");
  } else if (
    coupon.toUpperCase() === "50OFF" &&
    cartFromLocalStorage.length === 0
  ) {
    displayAlert(
      "Error",
      "You should have items in your cart first, silly!",
      "danger"
    );
    couponInput.value = "";
  } else {
    displayAlert("Error", "Coupon is not valid", "danger");
    couponInput.value = "";
  }
});

// handle form

const form = document.querySelector(".checkout-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.querySelector(".checkout-form input[type=text]");
  const email = document.querySelector(".checkout-form input[type=email]");
  const address = document.querySelector(".checkout-form .address");
  const city = document.querySelector(".checkout-form .city");
  const country = document.querySelector(".checkout-form .country");
  const zip = document.querySelector(".checkout-form .zip");
  const cardNumber = document.querySelector(".checkout-form .card-number");
  const cardHolder = document.querySelector(".checkout-form .card-holder");
  const expiryDate = document.querySelector(".checkout-form .expiry-date");
  const cvv = document.querySelector(".checkout-form .cvv");
  const nameValue = name.value;
  const emailValue = email.value;
  const addressValue = address.value;
  const cityValue = city.value;
  const countryValue = country.value;
  const zipValue = zip.value;
  const cardNumberValue = cardNumber.value;
  const cardHolderValue = cardHolder.value;
  const expiryDateValue = expiryDate.value;
  const cvvValue = cvv.value;

  if (
    nameValue === "" ||
    emailValue === "" ||
    addressValue === "" ||
    cityValue === "" ||
    countryValue === "" ||
    zipValue === "" ||
    cardNumberValue === "" ||
    cardHolderValue === "" ||
    expiryDateValue === "" ||
    cvvValue === ""
  ) {
    displayAlert(" Error", "Please fill out all fields", "danger");
  } else {
    displayAlert("Success", "Message sent successfully", "success");
    name.value = "";
    email.value = "";
    address.value = "";
    city.value = "";
    country.value = "";
    zip.value = "";
    cardNumber.value = "";
    cardHolder.value = "";
    expiryDate.value = "";
    cvv.value = "";
    total.innerHTML = `$${totalPrice}`;
    couponInput.value = "";
    console.log(`
        Name: ${nameValue}
        Email: ${emailValue}
        Address: ${addressValue}
        City: ${cityValue}
        Country: ${countryValue}
        Zip: ${zipValue}
        Card Number: ${cardNumberValue}
        Card Holder: ${cardHolderValue}
        Expiry Date: ${expiryDateValue}
        CVV: ${cvvValue}
        `);
    localStorage.setItem("cart", JSON.stringify([]));
    setTimeout(() => {
      location.reload();
    }, 3000);
  }
});

// display alert

function displayAlert(header, text, action) {
  const alert = document.querySelector(".alert");
  const alertH4 = document.querySelector(" .alert h4");
  const alertP = document.querySelector(".alert p");
  const timeLine = document.querySelector(".alert .time-line");

  alert.style.display = "block";
  alert.style.width = "clamp(350px, 50%, 450px)";
  alert.style.opacity = "1";
  alert.style.top = "0%";

  alert.classList.add(`alert-${action}`);
  alertH4.innerHTML = header;
  alertP.innerHTML = text;
  timeLine.style.opacity = "1";
  timeLine.classList.add(`time-line-animate`);

  setTimeout(() => {
    alert.style.opacity = "0";
    alert.style.width = "0";
    alert.classList.remove(`alert-${action}`);
    timeLine.classList.remove(`time-line-animate`);
    timeLine.style.opacity = "0";
    alert.style.top = "-100%";
  }, 3000);
}
