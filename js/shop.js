import shoes from "./productsData.js";

const productsContainer = document.querySelector(".products .container");

shoes.forEach((shoe) => {
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
        <a class="btn"  href="./singleItem.html?id=${shoe.id}">Learn more</a>
        </div>
        </div>
    `;
  productsContainer.appendChild(div);
});

// search functionality

// search form

const searchForm = document.querySelector(".search-form");
const searchInput = document.querySelector(".search-input");

const filteredShoes = [];

searchInput.addEventListener("keyup", (e) => {
  const searchValue = e.target.value.toLowerCase().trim();
  if (searchValue === "") {
    shoes.forEach((shoe) => {
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
      productsContainer.appendChild(div);
    });
  }

  filteredShoes.length = 0;
  shoes.forEach((shoe) => {
    if (shoe.name.toLowerCase().includes(searchValue)) {
      filteredShoes.push(shoe);
    }
  });

  if (filteredShoes.length === 0) {
    productsContainer.innerHTML = "";
    const h2 = document.createElement("h2");
    h2.innerHTML = `
          No results found...
    `;
    productsContainer.appendChild(h2);
    return;
  }

  productsContainer.innerHTML = "";
  filteredShoes.forEach((shoe) => {
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
    productsContainer.appendChild(div);
  });
});

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
});
