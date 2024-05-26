import sql from "better-sqlite3";
const db = sql("meals.db"); // Open the database file

const getMeals = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate slow network
  return db.prepare("SELECT * FROM meals").all(); // Get all meals from the database
};

const getMeal = (slug) => {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug); // Get a single meal by slug
};

export { getMeals, getMeal };