import shoes from "./data.js";

const products = document.querySelector(".products");
const featuredShoes = shoes
  .filter((shoe) => shoe.color.toLowerCase() === "red")
  .slice(1);

featuredShoes.forEach((shoe) => {
  const div = document.createElement("div");
  div.classList.add("product-card");
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
        <a class="btn">Learn more</a>
        </div>
        </div>

    `;
  products.appendChild(div);
});
