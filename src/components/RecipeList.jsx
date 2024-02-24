import RecipeCard from "./RecipeCard";
import { recipeData } from "../recipeData.js";
import  styles from "./RecipeList.module.css";

function RecipeList() {
  return (
    <div className={styles.recipesWrapper}>
      <h1>Recipe List</h1>
      <div className={styles.recipes}>
        {recipeData.map((recipe) => (
          <RecipeCard
            key={recipe.title}
            recipeTitle={recipe.title}
            recipeImage={recipe.image}
            recipeDescription={recipe.description}
            recipeDetail={recipe.details}
            recipePrepTime={recipe.time}
            iconName1={"people-fill"}
            iconName2={"clock"}
          />
        ))}
      </div>
    </div>
  );
}

export default RecipeList;
