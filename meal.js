// order like this:
// 1 - difficulty
// 2 - type of meal
// 3 - speed of making
// 4+ any extra tags
// keep consistent tags for better usabilty

/*
  {
    name: "",
    tags: ["difficulty", "type", "speed", "extraTags"],
    description: ""
  },
*/

export const meals = [
  {
    name: "Wrap",
    tags: ["easy", "main", "fast", "healthy", "empty-the-fridge"],
    description: "Tortilla + anything that is in the fridge."
  },
  {
    name: "Chocolate chip cookies",
    tags: ["easy", "dessert", "slow", "snack", "showstopper", "vegeterian"],
    description: "Indulgent chocolate chip cookies.",
    url: "https://www.youtube.com/watch?v=rEdl2Uetpvo"
  },
  {
    name: "Tiramisu Semifredo",
    tags: ["medium", "dessert", "very-slow", "showstopper", "vegeterian"],
    description: "Extra rich and creamy dessert.",
    url: "https://www.youtube.com/watch?v=87V4nizNJiE"
  },
  {
    name: "Frirata",
    tags: ["easy", "main", "empty-the-fridge", "fast", "breakfast", "vegeterian"],
    description: "Omelette + anything in fridge. Good for any amount of people."
  },
  {
    name: "German pancake",
    tags: ["easy", "main", "medium", "breakfast", "pancake", "showstopper", "vegeterian"],
    description: "Big puffy pancake with any delicious toppings you want",
    url: "https://www.youtube.com/watch?v=6gpoV6zCHkQ"
  },
  {
    name: "French omelette",
    tags: ["insane", "main", "fast", "breakfast", "vegeterian"],
    description: "3 eggs rolled up into delicious custardy roll.",
    url: "https://www.youtube.com/watch?v=A-pqjLgFCqw"
  },
  {
    name: "Pasta",
    tags: ["easy", "main", "fast", "slow", "showstopper"],
    description: "Mince + sauce + pasta. Yum."
  },
  {
    name: "Burger",
    tags: ["easy", "main", "fast", "snack"],
    description: "Meaaaaaaat!"
  },
  {
    name: "Fries",
    tags: ["easy", "side", "fast", "snack", "frozen", "vegan"],
    description: "Tesco fries cooked from frozen and ready in 20 min.",
    url: "https://www.tesco.com/groceries/en-GB/shop/frozen-food/chips-potatoes-and-sides/chips-and-french-fries/frozen-chips-french-fries"
  },
  {
    name: "Tomato mozarella salad",
    tags: ["easy", "starter", "slow", "showstopper", "vegeterian"],
    description: "Beautify cut tomato slices and basel with mozarella or burrata centerpiece."
  },
  {
    name: "Youghurt + oats + fruits",
    tags: ["easy", "main", "super-fast", "breakfast", "healthy", "vegeterian"],
    description: "Very fast and healthy start of a day."
  },
  {
    name: "Tomato salad",
    tags: ["easy", "salad", "fast", "healthy", "vegan"],
    description: "All the tomatoe types, red onion and herbs mixed."
  },
  {
    name: "Beigin duck",
    tags: ["medium", "main", "slow", "healthy", "frozen"],
    description: "Mini wraps with delicious sauce and cucumbers and spring onion strips."
  },
  {
    name: "Ceaser salad",
    tags: ["easy", "salad", "fast"],
    description: "Same as burger but different textures."
  },
  {
    name: "Roast chicken spatchcock",
    tags: ["medium", "main", "very-slow", "showstopper", "healthy"],
    description: "Classic roast chicken",
    url: "https://www.youtube.com/watch?v=pod4x5NJoYI"
  },
  {
    name: "Rice",
    tags: ["easy", "side", "fast", "healthy", "vegan"],
    description: "Steamed rice, don't forget the right proportions.",
    url: "https://www.youtube.com/watch?v=Jf75I9LKhvg"
  },
  {
    name: "Potato mash",
    tags: ["easy", "side", "fast", "healthy", "vegan"],
    description: "Simple potato"
  },
  {
    name: "Sweet potato mash",
    tags: ["easy", "side", "fast", "healthy", "vegan"],
    description: "Better potato"
  },
  {
    name: "Egg noodle",
    tags: ["easy", "side", "super-fast", "healthy", "vegeterian"],
    description: "Better version of instant noodle"
  },
  {
    name: "Kale crips",
    tags: ["easy", "snack", "fast", "healthy", "vegan", "vegeterian"],
    description: "Delicious helthy crisps"
  },
  {
    name: "Knafeh",
    tags: ["medium", "dessert", "slow", "vegeterian", "showstopper"],
    description: "Delicious cheesy dessert with honey"
  },
  {
    name: "Ratatouille",
    tags: ["easy", "main", "slow", "vegan", "vegeterian"],
    description: "Baked bunch of veggies"
  },
  {
    name: "Pancake",
    tags: ["easy", "main", "slow", "vegeterian"],
    description: "A brown thin, round cake"
  },
  {
    name: "Dauphinoise potatoes",
    tags: ["medium", "main", "side", "slow", "vegeterian"],
    description: "Very cheesy potatoes."
  },
  {
    name: "Grilled Halloumi cheese",
    tags: ["easy", "side", "fast", "vegeterian"],
    description: "Mashallah"
  },
  {
    name: "Cheese platter",
    tags: ["easy", "side", "fast", "vegeterian"],
    description: "Create a tasting session of different cheeses from hard to soft ones."
  },
  {
    name: "Chocolate cake",
    tags: ["???", "dessert", "very-slow"],
    description: "Mashallah"
  },
  {
    name: "Coleslaw",
    tags: ["easy", "salad", "fast", "vegeterian", "healthy"],
    description: "Shredded cabbage and carrots with creamy dressing."
  },
  {
    name: "Water",
    tags: ["easy", "drink", "super-fast"],
    description: "The best drink ever"
  },
  {
    name: "Mojito",
    tags: ["easy", "drink", "super-fast", "cocktail", "alcoholic"],
    description: "Lime, mint, sugar, soda and rum over ice."
  },
  {
    name: "Croissant (frozen)",
    tags: ["easy", "snack", "slow", "breakfast", "frozen"],
    description: "Bake-from-frozen croissants until puffed and golden."
  },
  {
    name: "Sunrise mocktail",
    tags: ["easy", "drink", "super-fast", "mocktail", "non-alcoholic"],
    description: "Layered orange juice and grenadine over ice."
  },
  {
    name: "Lemonade",
    tags: ["easy", "drink", "super-fast", "mocktail", "non-alcoholic", "healthy"],
    description: "Fresh lemon juice, water and sugar to taste."
  },
  {
    name: "Steak",
    tags: ["medium", "main", "fast", "showstopper"],
    description: "Pan-seared steak with butter baste and rest."
  },
  {
    name: "Ayran",
    tags: ["easy", "drink", "super-fast", "non-alcoholic", "vegeterian", "healthy"],
    description: "Yoghurt blended with cold water and a pinch of salt."
  },
  {
    name: "Okra",
    tags: ["medium", "side", "slow", "healthy", "vegan", "vegeterian"],
    description: "Stewed or sautéed okra with aromatics."
  },
  {
    name: "Cordial",
    tags: ["easy", "drink", "very-slow", "non-alcoholic"],
    description: "Homemade fruit syrup concentrate for mixing."
  },
  {
    name: "Crepes",
    tags: ["easy", "dessert", "slow", "breakfast", "vegeterian"],
    description: "Thin pancakes with sweet or savoury fillings."
  },
  {
    name: "Lasagna",
    tags: ["medium", "main", "very-slow", "showstopper"],
    description: "Layered pasta bake with sauce and cheese."
  },
  {
    name: "Giga platter (chicken, potatoes, veggies)",
    tags: ["medium", "main", "slow", "showstopper", "healthy"],
    description: "Big roasting tray with chicken, potatoes and mixed veg."
  },
  {
    name: "Dumplings",
    tags: ["medium", "main", "slow"],
    description: "Boiled or pan-fried dumplings with dipping sauce."
  },
  {
    name: "Pain au chocolat",
    tags: ["easy", "snack", "slow", "breakfast"],
    description: "Flaky pastry with a rich chocolate bar inside."
  },
  {
    name: "Schnitzel",
    tags: ["medium", "main", "fast", "showstopper"],
    description: "Breaded, shallow-fried cutlet (chicken, pork or veal)."
  },
  {
    name: "Pea soup",
    tags: ["easy", "main", "side", "slow", "healthy", "vegeterian"],
    description: "Smooth or chunky pea soup with herbs."
  },
  {
    name: "Garlic bread",
    tags: ["easy", "main", "fast", "healthy", "vegeterian"],
    description: "Delicious side for soup or indian kitchen."
  },
  {
    name: "Stuffed pepper or other veg",
    tags: ["???", "main", "side", "???"],
    description: "A lot of mince disguised as a vegetable"
  },
  {
    name: "Beef stir fry",
    tags: ["easy", "main", "fast"],
    description: "Pan + beef + spices"
  },
  {
    name: "Crispy potato cubes",
    tags: ["medium", "side", "slow"],
    description: "crunchy (hopefully)"
  },
  {
    name: "Crispy duck salad",
    tags: ["???", "main", "side", "???"],
    description: "Inspired by the Ivy restaurant."
  },
];
