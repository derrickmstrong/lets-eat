"use client";

import { useFormStatus } from "react-dom";

const MealsFormSubmit = () => {
    const { pending } = useFormStatus(); // Get the form status

  return (
    <button type="submit" disabled={pending}>
        {pending ? "Submitting..." : "Share Meal"}
    </button>
  )
}

export default MealsFormSubmit