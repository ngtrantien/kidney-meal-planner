import mealContent from "../content/meals.json";

const mealPlaceholder = `${process.env.PUBLIC_URL}/images/meals/placeholder.svg`;

function resolveAssetUrl(value) {
  if (!value) return mealPlaceholder;
  if (/^(https?:)?\/\//.test(value) || value.startsWith("data:")) return value;

  const normalized = value.replace(/^\/+/, "");
  return `${process.env.PUBLIC_URL}/${normalized}`;
}

function normalizeMeal(meal) {
  return {
    ...meal,
    image: resolveAssetUrl(meal.image),
    tags: meal.tags || [],
    ingredients: meal.ingredients || [],
    steps: meal.steps || [],
  };
}

export const MEALS = (mealContent.meals || []).map(normalizeMeal);

function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

function buildMonthlySequence(meals, days = 30) {
  const extraCount = Math.max(0, days - meals.length);
  return [...shuffle(meals), ...shuffle(meals).slice(0, extraCount)];
}

export function generateMonthPlan() {
  const lunches = MEALS.filter((meal) => meal.session === "lunch");
  const dinners = MEALS.filter((meal) => meal.session === "dinner");
  const lunchSequence = buildMonthlySequence(lunches);
  const dinnerSequence = buildMonthlySequence(dinners);

  return Array.from({ length: 30 }, (_, i) => ({
    day: i + 1,
    lunch: lunchSequence[i],
    dinner: dinnerSequence[i],
  }));
}

export function getRandomMeal(session, excludeId) {
  const pool = MEALS.filter((meal) => meal.session === session && meal.id !== excludeId);
  return pool[Math.floor(Math.random() * pool.length)];
}
