import IDishes from "../types/dishes.type";

const dishes: IDishes[] = [
  {
      name: "Poulet rôti",
      available: true,
      description: "Un poulet rôti tendre et juteux accompagné de légumes frais et de pommes de terre rôties.",
      createdAt: new Date(),
      price: 15.99,
      image: "https://www.example.com/roasted_chicken.jpg",
      category: "Viande",
      ingredients: ["poulet", "légumes", "pommes de terre"],
      allergens: ["gluten"],
      isAvailable: true,
      isVegan: false,
      isVegetarian: false,
      isGlutenFree: false,
      isSpicy: false
  },
  {
      name: "Lasagne végétarienne",
      available: true,
      description: "Une lasagne feuilletée remplie de légumes frais et de fromage ricotta.",
      createdAt: new Date(),
      price: 12.99,
      image: "https://www.example.com/vegetarian_lasagna.jpg",
      category: "Plat végétarien",
      ingredients: ["pâte à lasagne", "légumes", "fromage ricotta"],
      allergens: ["gluten", "lait"],
      isAvailable: true,
      isVegan: false,
      isVegetarian: true,
      isGlutenFree: false,
      isSpicy: false
  },
  {
      name: "Curry de légumes",
      available: true,
      description: "Un curry épicé aux légumes et à la noix de cajou, servi avec du riz brun.",
      createdAt: new Date(),
      price: 11.99,
      image: "https://www.example.com/vegetable_curry.jpg",
      category: "Plat végétalien",
      ingredients: ["légumes", "noix de cajou", "épices"],
      allergens: ["noix"],
      isAvailable: true,
      isVegan: true,
      isVegetarian: true,
      isGlutenFree: true,
      isSpicy: true
  }
];


export default dishes;