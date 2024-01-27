import blogData from "./blogsData.js";
// latest blogs array
const latestBlogs = blogData.filter((blog) => {
  return blog.datePosted >= "2024-01-15";
});

// trending blogs array
const trendingBlogs = blogData.filter((blog) => {
  return blog.isTrending === true;
});

//blog guides
const blogGuides = blogData.filter((blog) => {
  return blog.type === "guide";
});

// latest blogs html

const latestBlogsContainer = document.querySelector(".latest-container");
latestBlogs.forEach((blog, i) => {
  const div = document.createElement("div");
  div.classList.add("card");
  div.innerHTML = `
            <div class="blog-img">
            <img src="${blog.img}" alt="${blog.title}" />
            </div>
            <div class="text-container">
            <div class="details">
            <h5 class="blog-title">${blog.title}</h5>
            </div>
            <p class="blog-description">
            ${blog.description}
            </p>
            <div class="blog-btn">
            <a class="btn" href="./singleBlog.html?id=${blog.id}">Read more</a>
            </div>
            </div>
    
        `;
  latestBlogsContainer.appendChild(div);
});

// trending blogs html

const trendingBlogsContainer = document.querySelector(".trending-container");

trendingBlogs.forEach((blog, i) => {
  const div = document.createElement("div");
  div.classList.add("card");
  div.innerHTML = `
            <div class="blog-img">
            <img src="${blog.img}" alt="${blog.title}" />
            </div>
            <div class="text-container">
            <div class="details">
            <h5 class="blog-title">${blog.title}</h5>
            </div>
            <p class="blog-description">
            ${blog.description}
            </p>
            <div class="blog-btn">
            <a class="btn" href="./singleBlog.html?id=${blog.id}">Read more</a>
            </div>
            </div>
    
        `;
  trendingBlogsContainer.appendChild(div);
});

// blog guides html

const blogGuidesContainer = document.querySelector(".guides-container");

blogGuides.forEach((blog) => {
  const div = document.createElement("div");
  div.classList.add("card");
  div.innerHTML = `
            <div class="blog-img">
            <img src="${blog.img}" alt="${blog.title}" />
            </div>
            <div class="text-container">
            <div class="details">
            <h5 class="blog-title">${blog.title}</h5>
            </div>
            <p class="blog-description">
            ${blog.description}
            </p>
            <div class="blog-btn">
            <a class="btn" href="./singleBlog.html?id=${blog.id}">Read more</a>
            </div>
            </div>
    
        `;
  blogGuidesContainer.appendChild(div);
});

// all blogs html

const allBlogsContainer = document.querySelector(".all-blogs-container");

blogData.forEach((blog) => {
  const div = document.createElement("div");
  div.classList.add("card");
  div.innerHTML = `
            <div class="blog-img">
            <img src="${blog.img}" alt="${blog.title}" />
            </div>
            <div class="text-container">
            <div class="details">
            <h5 class="blog-title">${blog.title}</h5>
            </div>
            <p class="blog-description">
            ${blog.description}
            </p>
            <div class="blog-btn">
            <a class="btn" href="./singleBlog.html?id=${blog.id}">Read more</a>
            </div>
            </div>
        `;
  allBlogsContainer.appendChild(div);
});
