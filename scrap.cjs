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
    /* console.log(response.data); */
    const originalMeals = response.data.meals;

    for (const oneMeal of originalMeals) {
      const meal = {
        name: oneMeal.strMeal,
      };

      meal.idMeal = oneMeal.idMeal;
      meal.category = oneMeal.strCategory;
      meal.area = oneMeal.strArea;
      meal.instructions = oneMeal.strInstructions;
      meal.image = oneMeal.strMealThumb;
      meal.video = oneMeal.strYoutube;

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
        { ingredient: oneMeal.strIngredient13, quantity: oneMeal.strMeasure13 },
        { ingredient: oneMeal.strIngredient14, quantity: oneMeal.strMeasure14 },
        { ingredient: oneMeal.strIngredient15, quantity: oneMeal.strMeasure15 },
        { ingredient: oneMeal.strIngredient16, quantity: oneMeal.strMeasure16 },
        { ingredient: oneMeal.strIngredient17, quantity: oneMeal.strMeasure17 },
        { ingredient: oneMeal.strIngredient18, quantity: oneMeal.strMeasure18 },
        { ingredient: oneMeal.strIngredient19, quantity: oneMeal.strMeasure19 },
        { ingredient: oneMeal.strIngredient20, quantity: oneMeal.strMeasure20 },
      ];

      meals.push(meal);
    }
  }
  fs.writeFileSync("db.json", JSON.stringify({ meals: meals }));
}
seed();
