import PropTypes from "prop-types";
import styles from "./Card.module.css";

function Card(props) {
  return (
    <div className={styles.recipeCard}>
      <span>{props.children}</span>
    </div>
  );
}

export default Card;

Card.propTypes = {
  children: PropTypes.object,
  recipeDetail: PropTypes.string,
};
