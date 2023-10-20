const axios = require("axios");
const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const fs = require("fs");
const meals = [];
async function seed() {
  for (const letter of alphabet) {
    const response = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`
    );
    if (!response.data.meals) {
      continue;
    }
    console.log(response.data);
    const originalMeals = response.data.meals;

    for (const oneMeal of originalMeals) {
      const meal = {
        name: oneMeal.strMeal,
      };
      meal.ingredients = [
        { ingredient: oneMeal.strIngredient1, quantity: oneMeal.strMeasure1 },
        { ingredient: oneMeal.strIngredient2, quantity: oneMeal.strMeasure2 },
        { ingredient: oneMeal.strIngredient3, quantity: oneMeal.strMeasure3 },
        { ingredient: oneMeal.strIngredient4, quantity: oneMeal.strMeasure4 },
        { ingredient: oneMeal.strIngredient5, quantity: oneMeal.strMeasure5 },
        { ingredient: oneMeal.strIngredient6, quantity: oneMeal.strMeasure6 },
        { ingredient: oneMeal.strIngredient7, quantity: oneMeal.strMeasure7 },
        { ingredient: oneMeal.strIngredient8, quantity: oneMeal.strMeasure8 },
        { ingredient: oneMeal.strIngredient9, quantity: oneMeal.strMeasure9 },
        { ingredient: oneMeal.strIngredient10, quantity: oneMeal.strMeasure10 },
        { ingredient: oneMeal.strIngredient11, quantity: oneMeal.strMeasure11 },
        { ingredient: oneMeal.strIngredient12, quantity: oneMeal.strMeasure12 },
      ];
      meals.push(meal);
    }
  }
  fs.writeFileSync("db.json", JSON.stringify({ meals: meals }));
}
seed();
