"use server"; // This function should only be run on the server

  export const shareMeal = async (formData) => {
    const meal = {
      title: formData.get("title"),
      summary: formData.get("summary"),
      instructions: formData.get("instructions"),
      image: formData.get("image"),
      creator: formData.get("name"),
      creator_email: formData.get("email"),
    };
    console.log(meal);
    // Save the meal to the database
    // return { redirect: { destination: "/meals", permanent: false } };
  };


