import MealItem from "./meal-item";
import styles from "./meals-grid.module.css";

const MealsGrid = ({ meals }) => {
  return (
    <>
      {meals.length === 0 && <p className={styles['no-meals']}>No meals found. Maybe add one?</p>}
      {meals && (
        <ul className={styles.meals}>
          {meals.map((meal) => (
            <li key={meal.id}>
              <MealItem {...meal} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default MealsGrid;
