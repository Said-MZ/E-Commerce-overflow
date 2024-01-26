const blogData = [
  {
    id: 1,
    title: "Top 10 Fashion Trends of the Season",
    img: "https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Discover the latest fashion trends of the season. From bold colors to statement accessories, we've compiled a list of must-have items for your wardrobe. ",
    isTrending: false,
    type: "fashion",
    datePosted: "2024-01-20",
  },
  {
    id: 2,
    title: "Choosing the Perfect Shoes for Every Occasion",
    img: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Discover the art of selecting the right pair of shoes for different occasions. From casual outings to formal events, we've got you covered.",
    isTrending: false,
    type: "guide",
    datePosted: "2024-01-18",
  },
  {
    id: 3,
    title: "Tips for Maintaining Leather Products",
    img: "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Learn essential tips and tricks for keeping your leather goods in pristine condition. Proper care ensures longevity and enduring style.",
    isTrending: false,
    type: "product-care",
    datePosted: "2024-01-15",
  },
  {
    id: 4,
    title: "The Latest Sneaker Releases You Can't Miss",
    img: "https://images.unsplash.com/photo-1590673846749-e2fb8f655df8?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Stay updated with the hottest sneaker releases. We've compiled a list of must-have sneakers that will elevate your street-style game.",
    isTrending: false,
    type: "footwear",
    datePosted: "2024-01-10",
  },
  {
    id: 5,
    title: "Accessorize Like a Pro: A Complete Guide",
    img: "https://images.unsplash.com/photo-1513188732907-5f732b831ca8?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Enhance your style with the right accessories. Our comprehensive guide covers everything from jewelry to hats, helping you master the art of accessorizing.",
    isTrending: false,
    type: "guide",
    datePosted: "2024-01-08",
  },
  {
    id: 6,
    title: "Behind the Scenes: Crafting Quality Footwear",
    img: "https://images.unsplash.com/photo-1536520807309-1f7bae9f8be5?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Take a sneak peek into the craftsmanship behind quality footwear. Learn about the materials, techniques, and dedication that go into creating each pair.",
    isTrending: false,
    type: "behind-the-scenes",
    datePosted: "2024-01-05",
  },
  {
    id: 7,
    title: "Fashionable Winter Wardrobe Essentials",
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Prepare for the chilly season with our guide to fashionable winter wardrobe essentials. Stay warm without compromising on style.",
    isTrending: true,
    type: "fashion",
    datePosted: "2023-12-28",
  },
  {
    id: 8,
    title: "Choosing the Right Bag for Every Occasion",
    img: "https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "From work to weekend getaways, find the perfect bag for every occasion. Our guide will help you navigate through the world of stylish and functional bags.",
    isTrending: false,
    type: "guide",
    datePosted: "2023-12-20",
  },
  {
    id: 9,
    title: "Innovative Tech in Footwear: The Future of Comfort",
    img: "https://images.unsplash.com/photo-1512566793746-0f89bfe3cd06?q=80&w=3115&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Discover how technology is revolutionizing the world of footwear. From smart sneakers to innovative materials, explore the future of comfort.",
    isTrending: true,
    type: "technology",
    datePosted: "2023-12-15",
  },
  {
    id: 10,
    title: "Elevate Your Style: Mixing and Matching Colors",
    img: "https://images.unsplash.com/photo-1519810409043-b6d44921bfa2?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Unleash your creativity and elevate your style by mastering the art of mixing and matching colors in your outfits. Create unique and eye-catching looks effortlessly.",
    isTrending: false,
    type: "fashion",
    datePosted: "2023-12-10",
  },
  {
    id: 11,
    title: "Behind the Brand: Our Commitment to Quality",
    img: "https://images.unsplash.com/photo-1489647767089-3944a3baa54e?q=80&w=2952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Learn about the values and commitment to quality that define our brand. From sourcing materials to the final product, we prioritize excellence in every step.",
    isTrending: true,
    type: "behind-the-brand",
    datePosted: "2023-12-05",
  },
  {
    id: 12,
    title: "Caring for Your Fabrics: A Comprehensive Guide",
    img: "https://images.unsplash.com/photo-1474494819794-90f9664b530d?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Extend the life of your clothing by understanding how to care for different fabrics. Our guide covers washing, drying, and storing tips for various materials.",
    isTrending: false,
    type: "product-care",
    datePosted: "2023-11-30",
  },
];

export default blogData;
