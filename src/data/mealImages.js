import { MEALS } from "./meals";

const mealPlaceholder = `${process.env.PUBLIC_URL}/images/meals/placeholder.svg`;

// Attach an image field to every meal while keeping the existing meal data intact.
MEALS.forEach((meal) => {
  if (!meal.image) {
    meal.image = mealPlaceholder;
  }
});
