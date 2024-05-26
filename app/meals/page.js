import { Suspense } from "react";
import Link from "next/link";

import styles from "./page.module.css";
import loadingStyles from "./loading.module.css";
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";

const MealsData = async () => {
  const meals = await getMeals(); // Fetch meals from the database

  return <MealsGrid meals={meals} />; // Render the meals
};

const Meals = () => {
  return (
    <>
      <header className={styles.header}>
        <h1>
          Delicious Meals, created{" "}
          <span className={styles.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It is easy and fun.
        </p>
        <p className={styles.cta}>
          <Link href="/meals/share">Share your own recipe</Link>
        </p>
      </header>
      <main className={styles.main}>
        <Suspense fallback={<p className={loadingStyles.loading}>Loading...</p>}>
          <MealsData />
        </Suspense>
      </main>
    </>
  );
};

export default Meals;
