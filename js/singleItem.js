import shoes from "./productsData.js";

// get the id from the url
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get("id");

// get the blog with the id
const item = shoes.find((blog) => blog.id === parseInt(id));
console.log(item);
// update the html with the blog details
//   <section class="item">
//     <div class="container">
//       <div class="item-img">
//         <img src="" alt="" />
//       </div>
//       <div class="item-text">
//         <h2 class="name"></h2>
//         <p class="description"></p>
//         <p class="price"></p>
//         <p class="color"></p>
//         <p class="quantity"></p>
//         <p class="size"></p>
//         <a href="./shop.html" class="btn">
//           Explore other products
//         </a>
//       </div>
//     </div>
//   </section>;

// get items

const itemImg = document.querySelector(".item-img img");
const itemName = document.querySelector(".item-text .name");
const itemDescription = document.querySelector(".item-text .description");
const itemPrice = document.querySelector(".item-text .price");
const itemColor = document.querySelector(".item-text .color");
const itemQuantity = document.querySelector(".item-text .quantity");
const itemSize = document.querySelector(".item-text .size");

itemImg.alt = item.name;
itemImg.style = "width: 100%;";

itemImg.src = item.image;
itemName.textContent = item.name;
itemDescription.textContent = item.description;
itemPrice.textContent = item.price;
itemColor.textContent = item.color;
itemQuantity.textContent = item.quantity;
itemSize.textContent = item.size;
