import Card from "./Card";
import PropTypes from "prop-types";
import styles from "./Recipe.module.css";

function Recipe(props) {
  const { recipeDetail, detailTitle } = props;

  return (
    <div className={styles.recipeDetail}>
      <strong>{detailTitle}</strong> 
      <Card>{recipeDetail}</Card>
    </div>
  );
}

export default Recipe;

Recipe.propTypes = {
  recipeDetail: PropTypes.object,
  detailTitle: PropTypes.string,
};
