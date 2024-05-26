"use server";
import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

 // This function should only be run on the server

  export const shareMeal = async (formData) => {
    const meal = {
      title: formData.get("title"),
      summary: formData.get("summary"),
      instructions: formData.get("instructions"),
      image: formData.get("image"),
      creator: formData.get("name"),
      creator_email: formData.get("email"),
    };

    // Save the meal to the database
    await saveMeal(meal);

    // Redirect the user to the meals page
    redirect("/meals");
  };


