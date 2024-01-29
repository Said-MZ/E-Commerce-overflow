import shoes from "./productsData.js";

const products = document.querySelector(".products");
const featuredShoes = shoes
  .filter((shoe) => shoe.color.toLowerCase() === "red")
  .slice(1);

featuredShoes.forEach((shoe) => {
  const div = document.createElement("div");
  div.classList.add("card");
  div.innerHTML = `
        <div class="product-img">
        <img src="${shoe.image}" alt="${shoe.name}" />
        </div>
        <div class="text-container">
        <div class="details">
        <h4 class="product-name">${shoe.name}</h4>
        <span class="product-price">$${shoe.price}</span>
        </div>
        <p class="product-description">
        ${shoe.description}
        </p>
        <div class="product-btn">
        <a class="btn"  href="./pages/shop.html">Learn more</a>
        </div>
        </div>
    `;
  products.appendChild(div);
});

// handle form

// <form class="form">
//   <input type="email" placeholder="Enter your email" required />
//   <button type="submit" class="btn">
//     Subscribe
//   </button>
// </form>;

const form = document.querySelector(".form");
const submitBtn = document.querySelector(".btn");
const email = document.querySelector("input[type='email']");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (email.value) {
    email.value = "";
    submitBtn.textContent = "Subscribed";
    submitBtn.classList.add("disabled");
    submitBtn.disabled = true;
    displayAlert(
      "Thank you!",
      "You have successfully subscribed to our newsletter.",
      "success"
    );
  } else {
    displayAlert("Error", "Please enter your email", "error");
  }
});

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
    alert.style.top = "-100%";
    timeLine.style.opacity = "0";
    timeLine.classList.remove(`time-line-animate`);
    alert.classList.remove(`alert-${action}`);
  }, 3000);
}
