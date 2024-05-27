"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

// This function should only be run on the server, 
// so we use the "use server" pragma at the top of the file. 
// The shareMeal function is exported from the file and is used in the ShareMeal component to handle form submissions. 
// The shareMeal function takes two arguments: prevState and formData. 
// The prevState argument is the previous state of the form, and the formData argument is the form data submitted by the user.
export const shareMeal = async (prevState, formData) => {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  // Validate the meal
  const isValidText = (text) => {
    return !text || text.trim() === "";
  };

  if (
    isValidText(meal.title) ||
    isValidText(meal.summary) ||
    isValidText(meal.instructions) ||
    isValidText(meal.creator) ||
    isValidText(meal.creator_email) ||
    !meal.creator_email.includes("@") ||
    !meal.image ||
    meal.image.size === 0
  ) {
    return {
      message: "Please fill out all fields",
    };
  }

  // Save the meal to the database
  await saveMeal(meal);

  // Prevent aggreessive caching
  revalidatePath("/meals");

  // Redirect the user to the meals page
  redirect("/meals");
};
