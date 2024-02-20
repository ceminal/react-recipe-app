import "./RecipeCard.css";
import PropTypes from "prop-types";
import { useState } from "react";
import Recipe from "./Recipe";

function RecipeCard(props) {
  const {
    recipeImage,
    recipeDescription,
    recipeTitle,
    iconName,
    iconName2,
    recipeDetail,
    recipePrepTime,
  } = props;

  const [detailInfo, setDetailInfo] = useState("");
  const [detailTitle, setDetailTitle] = useState("");

  function handleRecipeDetail() {
    if (detailInfo == "") {
      setDetailInfo(renderDetailsAsList());
      setDetailTitle("Tarif Detayları");
    } else {
      setDetailInfo("");
      setDetailTitle("");
    }
  }

  const renderDetailsAsList = () => {
    const detailsList = recipeDetail.split(",").map((detail) => detail.trim());
    return (
      <ul className="detailList">
        {detailsList.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
    );
  };

  return (
    <div onClick={handleRecipeDetail}>
      {detailInfo ? (
        <Recipe
          detailTitle={detailTitle}
          setDetailTitle={setDetailTitle}
          recipeDetail={detailInfo}
        />
      ) : (
        <div className="recipe-item">
          <div className="recipe-front">
            <div className="recipe-image">
              <img src={recipeImage} alt="Recipe" />
            </div>
            <div className="recipe-info">
              <strong className="recipe-title">{recipeTitle}</strong>
              <span className="recipe-description">
                {iconName && <i className={`bi bi-${iconName}`}></i>}{" "}
                {recipeDescription}
              </span>
              <span className="recipe-prepTime">
                {iconName2 && <i className={`bi bi-${iconName2}`}></i>}{" "}
                {recipePrepTime}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default RecipeCard;

RecipeCard.propTypes = {
  recipeTitle: PropTypes.string,
  recipeDescription: PropTypes.string,
  recipeImage: PropTypes.string,
  iconName: PropTypes.string,
  iconName2: PropTypes.string,
  onClick: PropTypes.func,
  recipeDetail: PropTypes.object,
  recipePrepTime: PropTypes.string,
};
