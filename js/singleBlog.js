import blogData from "./blogsData.js";

// get the id from the url
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get("id");

console.log(id);

// get the blog with the id

const blog = blogData.find((blog) => blog.id === parseInt(id));

console.log(blog);

// update the html with the blog details

const img = document.querySelector(".hero img");
const h1 = document.querySelector(".hero h1");
const description = document.querySelector(".hero p");
const blogText = document.querySelector(".blog-text p");

img.src = blog.img;
h1.textContent = blog.title;
description.textContent = blog.description;
blogText.textContent = blog.blog;
