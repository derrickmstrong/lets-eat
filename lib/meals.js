import fs from "fs";
import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";

const db = sql("meals.db"); // Open the database file

const getMeals = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate slow network
  // throw new Error("Unable to fetch meals"); // Simulate an error
  return db.prepare("SELECT * FROM meals").all(); // Get all meals from the database
};

const getMeal = (slug) => {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug); // Get a single meal by slug + protects against SQL injection
};

const saveMeal = async (meal) => {
  // Create a slug from the title
  const slug = slugify(meal.title, { lower: true });
  meal.slug = slug;

  // Protect against XSS attacks
  meal.instructions = xss(meal.instructions);

  // Save the image to the public folder
  const extension = meal.image.name.split(".").pop(); // Get the image extension
  const filename = `${meal.slug}.${extension}`; // Get filename
  const stream = fs.createWriteStream(`public/images/${filename}`); // Store the image in the public folder
  const bufferImage = await meal.image.arrayBuffer(); // Convert the image to a buffer
  // Write the buffer to the file
  stream.write(Buffer.from(bufferImage), (err) => {
    if (err) {
      throw new Error("Unable to save image");
    }
    console.log("Image saved");
  });

  meal.image = `/images/${filename}`; // Update the image property with the filename

  // Insert the meal into the database
  const stmt = db.prepare(
    "INSERT INTO meals (title, slug, summary, instructions, image, creator, creator_email) VALUES (@title, @slug, @summary, @instructions, @image, @creator, @creator_email)"
  );
  stmt.run(meal);
};

export { getMeals, getMeal, saveMeal };
