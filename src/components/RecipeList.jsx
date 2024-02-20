import RecipeCard from "./RecipeCard";
import { recipeData } from "../recipeData.js";
import "./RecipeList.css";

function RecipeList() {
  return (
    <div className="recipes-wrapper">
      <h1>Recipe List</h1>
      <div className="recipes">
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
