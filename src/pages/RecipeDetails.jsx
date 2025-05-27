import { useParams } from "react-router-dom";
import { useState } from "react";

function RecipeDetails() {
  const { id } = useParams();

  const [isFavorite, setIsFavorite] = useState(false);
  const [isPinned, setIsPinned] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const togglePinned = () => {
    setIsPinned(!isPinned);
  };

  const recipe = {
    title: "Vegetarian Lasagna",
    category: "Dinner",
    time: "45",
    difficulty: "Medium",
    ingredients: "Lasagna sheets, tomato sauce, cheese",
    instructions: "Layer everything. Bake in oven. Serve hot.",
    image: "https://example.com/lasagna.jpg",
  };

  return (
    <div className="recipe-details-page">
      <h2>{recipe.title}</h2>
      <img src={recipe.image} alt={recipe.title} style={{ maxWidth: "300px" }} />
      <p><strong>Category:</strong> {recipe.category}</p>
      <p><strong>Time:</strong> {recipe.time} minutes</p>
      <p><strong>Difficulty:</strong> {recipe.difficulty}</p>
      <h3>Ingredients</h3>
      <p>{recipe.ingredients}</p>
      <h3>Instructions</h3>
      <p>{recipe.instructions}</p>
      <p><em>Recipe ID: {id}</em></p>

      <button onClick={toggleFavorite}>
        {isFavorite ? "❤️ Favorited" : "🤍 Add to Favorites"}
      </button>

      <button onClick={togglePinned}>
        {isPinned ? "📌 Pinned to Home" : "📍 Pin this Recipe"}
      </button>
    </div>
  );
}

export default RecipeDetails;
