import { useState } from "react";
import Tabs from "../components/Tabs";
import Filters from "../components/Filters";
import DishList from "../components/DishList";
import Summary from "../components/Summary";
import dishesData from "../data/dishes.json";

const categories = ["Starter", "Main Course", "Dessert", "Sides"];

function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("Main Course");
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("ALL"); // ALL, VEG, NON-VEG
  const [selectedDishes, setSelectedDishes] = useState([]);

  // Filter logic
  const filteredDishes = dishesData.filter(
    dish =>
      dish.mealType.toLowerCase() === activeCategory.toLowerCase() &&
      dish.name.toLowerCase().includes(search.toLowerCase()) &&
      (filter === "ALL" || dish.type === filter)
  );

  const toggleSelect = (dishId) => {
    setSelectedDishes(prev =>
      prev.includes(dishId)
        ? prev.filter(id => id !== dishId)
        : [...prev, dishId]
    );
  };

  return (
    <div>
      <h1>Party Menu</h1>
      <Tabs categories={categories} active={activeCategory} onChange={setActiveCategory} />
      <input
        type="text"
        placeholder="Search dish..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <Filters filter={filter} setFilter={setFilter} />
      <DishList
        dishes={filteredDishes}
        selected={selectedDishes}
        toggleSelect={toggleSelect}
      />
      <Summary selected={selectedDishes} dishes={dishesData} />
    </div>
  );
}

export default MenuPage;
