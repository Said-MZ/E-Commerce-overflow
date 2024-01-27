//TODO: Add more products to the array

const shoes = [
  {
    id: 1,
    isAvailable: true,
    name: "Air Jordan 1 Retro High OG",
    brand: "Nike",
    price: 180,
    color: "yellow",
    size: 10,
    quantity: 1,
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/fd8ed81b-130b-4580-9c8c-bb1d66c77231/air-jordan-1-retro-high-og-mens-shoes-JHpxkn.png",
    description:
      "The Air Jordan 1 Retro High OG 'Yellow Toe' showcases a familiar color scheme that first appeared on the 'Black Toe' Jordan 1 in 1985. The high-top makes use of a white leather base with contrasting black leather overlays on the toe and heel. The collar, Swoosh and outsole are finished in University Gold, a color that also appears on the ball-and-wings logo on the lateral collar flap. The high-top rides on a white midsole, supported underfoot by a black rubber outsole.",
  },
  {
    id: 2,
    isAvailable: true,
    name: "Nike Air VaporMax Plus",
    brand: "Nike",
    price: 210,
    color: "black",
    size: 12,
    quantity: 3,
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/fliho8ygw5nogbmtcbft/air-vapormax-plus-mens-shoes-nC0dzF.png",
    description:
      "The Nike Air VaporMax Plus looks to the past to propel you into the future. This revamp nods to the super-techy Air Max Plus of 1998 with its floating cage, cushioned upper and heel logo. Revolutionary VaporMax Air technology brings it into today.",
  },
  {
    id: 3,
    isAvailable: true,
    name: 'Sabrina 1 "Beyond The Game"',
    brand: "Nike",
    price: 130,
    color: "grey",
    size: 10,
    quantity: 2,
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/6c559852-81fa-493e-b30f-b96de095fe12/sabrina-1-beyond-the-game-basketball-shoes-f8jr2H.png",
    description:
      "The Nike Air Zoom BB NXT is designed to help players feel light, secure and responsive. You can see the Nike Air Zoom cushioning through a window on the outsole. A thin plate runs along the bottom, helping roll you from heel to toe during your stride. The laces feed through loops that wrap around your foot to help secure you in. The padded collar is built with a 3/4 cut, letting you move comfortably.",
  },
  {
    id: 4,
    isAvailable: true,
    name: "Nike G.T. Cut Academy",
    brand: "Nike",
    price: 95,
    color: "white",
    size: 12,
    quantity: 3,
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b0d8ce80-3207-46d5-9781-c134a8368e10/gt-cut-academy-basketball-shoes-VvkL4Q.png",
    description:
      "The Nike G.T. Cut Academy is designed for players who want to feel light and be fast. It has responsive cushioning and multi-directional traction that's tuned for the court.",
  },
  {
    id: 5,
    isAvailable: true,
    name: "Nike Blazer Phantom Mid",
    brand: "Nike",
    price: 150,
    color: "white",
    size: 10,
    quantity: 3,
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f81661c8-3f3a-4f76-8333-2b6ef1335fb1/blazer-phantom-mid-mens-shoes-fKkXKb.png",
    description:
      "The Nike Blazer Phantom Mid harnesses the old-school look of Nike b-ball with a vintage midsole finish, making it look like you've been saving them for years.",
  },
  {
    id: 6,
    isAvailable: true,
    name: "Nike Air Max 2017",
    brand: "Nike",
    price: 150,
    color: "white",
    size: 12,
    quantity: 7,
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/9caabd31-67b5-4ce6-84c4-b2cd35f10292/air-max-2017-mens-shoes-BVqnkV.png",
    description:
      "The Nike Air Max 2017 delivers the plush ride you love with a full-length Max Air unit. The upper is seamlessly constructed with zonal support and ventilation while molded foam wraps your midfoot and heel for locked-down comfort.",
  },
  {
    id: 7,
    isAvailable: true,
    name: "Nike Air Max Pulse",
    brand: "Nike",
    price: 150,
    color: "black",
    size: 10.5,
    quantity: 3,
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/9caabd31-67b5-4ce6-84c4-b2cd35f10292/air-max-2017-mens-shoes-BVqnkV.png",
    description:
      "The Nike Air Max Pulse is inspired by the feeling of your heart pounding as you run and the rhythm of your feet on the pavement. It features a flat, wide sole with increased surface area for dependable stability and a revolutionary cushioning system.",
  },
  {
    id: 8,
    isAvailable: true,
    name: "Air Jordan 1 Low SE",
    brand: "Nike",
    price: 125,
    color: "charcoal",
    size: 10.5,
    quantity: 3,
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/9caabd31-67b5-4ce6-84c4-b2cd35f10292/air-max-2017-mens-shoes-BVqnkV.png",
    description:
      "The Air Jordan 1 Low SE is the perfect, easy-to-wear sneaker. The classic design and elevated materials create a look that's versatile enough for everyday wear. The Air-Sole unit in the heel provides lightweight cushioning for all-day comfort.",
  },
  {
    id: 9,
    isAvailable: true,
    name: "Nike G.T. Jump 2",
    brand: "Nike",
    price: 145,
    color: "red",
    size: 10.5,
    quantity: 1,
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e65329a1-f922-42e2-a9e4-bf43c9107b46/gt-jump-2-mens-basketball-shoes-JgT85c.png",
    description:
      "The Nike G.T. Jump 2 is designed for players who want to feel light and be fast. It has responsive cushioning and multi-directional traction that's tuned for the court.",
  },
  {
    id: 10,
    isAvailable: true,
    name: "Nike Air Force 1 '07 LV8 1",
    brand: "Nike",
    price: 135,
    color: "red",
    size: 10,
    quantity: 2,
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0adc5f31-1d41-4337-9354-8e305444037c/air-force-1-07-lv8-1-mens-shoes-x0bMdL.png",
    description:
      "The legend lives on in the Nike Air Force 1 '07 LV8 1, a modern take on the icon that blends classic style and fresh, crisp details. ",
  },
  {
    id: 11,
    isAvailable: true,
    name: "Nike Run Swift 3",
    brand: "Nike",
    price: 55,
    color: "red",
    size: 10,
    quantity: 2,
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f6afa167-7d8f-43cc-919b-503d5bb4078d/run-swift-3-mens-road-running-shoes-KtXxs0.png",
    description:
      "The Nike Run Swift 3 delivers a smooth ride from start to finish. Mesh details provide breathability, while plush cushioning and a rigid outsole help you transition smoothly through every mile.",
  },
  {
    id: 12,
    isAvailable: true,
    name: "Nike Metcon 9",
    brand: "Nike",
    price: 100,
    color: "red",
    size: 12,
    quantity: 4,
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c2820781-bae7-4001-8d50-27605b5caae9/metcon-9-mens-workout-shoes-00kjPz.png",
    description:
      "The Nike Metcon 9 is designed for heavy lifting like squats and snatches. It features a flat, wide heel and a flexible forefoot for stability and comfort when you're going all out.",
  },
];

export default shoes;
