import { Link } from "react-router-dom";

function DishCard({ dish, isSelected, toggleSelect }) {
  return (
    <div className={`dish-card ${isSelected ? "selected" : ""}`}>
      <h3>{dish.name}</h3>
      <p>{dish.description}</p>
      <button onClick={() => toggleSelect(dish.id)}>
        {isSelected ? "Remove" : "Add"}
      </button>
      <Link to={`/ingredient/${dish.id}`}>Ingredients</Link>
    </div>
  );
}

export default DishCard;
