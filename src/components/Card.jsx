import PropTypes from "prop-types";
import "./Card.css";

function Card(props) {
  return (
    <div className="recipe-card">
      <span>{props.children}</span>
    </div>
  );
}

export default Card;

Card.propTypes = {
  children: PropTypes.object,
  recipeDetail: PropTypes.string,
};
