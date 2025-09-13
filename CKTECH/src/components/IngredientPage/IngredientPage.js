import { useParams, useNavigate } from "react-router-dom";
import dishesData from "../data/dishes.json";

function IngredientPage() {
    const { id } = useParams();
    const dish = dishesData.find(d => d.id === parseInt(id));
    const navigate = useNavigate();

    // Mock ingredients
    const ingredients = [
        { name: "Paneer", qty: "200g" },
        { name: "Onion", qty: "2 pcs" },
        { name: "Capsicum", qty: "1 pc" },
    ];

    if (!dish) return <p>Dish not found!</p>;

    return (
        <div>
            <button onClick={() => navigate(-1)}>← Back</button>
            <h2>{dish.name}</h2>
            <p>{dish.description}</p>
            <h3>Ingredients:</h3>
            <ul>
                {ingredients.map((ing, idx) => (
                    <li key={idx}>{ing.name} - {ing.qty}</li>
                ))}
            </ul>
        </div>
    );
}

export default IngredientPage;