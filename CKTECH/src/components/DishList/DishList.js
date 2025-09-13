import DishCard from "./DishCard";

function DishList({ dishes, selected, toggleSelect }) {
  return (
    <div className="dish-list">
      {dishes.map(dish => (
        <DishCard
          key={dish.id}
          dish={dish}
          isSelected={selected.includes(dish.id)}
          toggleSelect={toggleSelect}
        />
      ))}
    </div>
  );
}

export default DishList;
