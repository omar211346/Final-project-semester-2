import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getRecipeById } from "../lib/firestore";

function RecipeDetails() {
  const { id } = useParams();

  const [isFavorite, setIsFavorite] = useState(false);
  const [isPinned, setIsPinned] = useState(false);
  const [showPrintMessage, setShowPrintMessage] = useState(false);

  const [recipe, setRecipe] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const toggleFavorite = () => setIsFavorite(!isFavorite);
  const togglePinned = () => setIsPinned(!isPinned);
  const togglePrintHint = () => setShowPrintMessage(!showPrintMessage);

  useEffect(() => {
    async function fetchRecipe() {
      try {
        const data = await getRecipeById(id);
        setRecipe(data);
      } catch (err) {
        setError("Recipe not found or failed to load.");
      } finally {
        setIsLoading(false);
      }
    }

    fetchRecipe();
  }, [id]);

  if (isLoading) return <p>Loading recipe...</p>;
  if (error) return <p>{error}</p>;
  if (!recipe) return <p>No recipe found.</p>;

  const displayDate = recipe.createdAt?.toDate?.() || new Date(recipe.createdAt);

  return (
    <div className="recipe-details-page">
      <h2>{recipe.title}</h2>
      {recipe.image && (
        <img
          src={recipe.image}
          alt={recipe.title}
          style={{ maxWidth: "300px" }}
        />
      )}
      <p><strong>Category:</strong> {recipe.category}</p>
      <p><strong>Time:</strong> {recipe.time} minutes</p>
      <p><strong>Difficulty:</strong> {recipe.difficulty}</p>
      <h3>Ingredients</h3>
      <p>{recipe.ingredients}</p>
      <h3>Instructions</h3>
      <p>{recipe.instructions}</p>
      <p>
        <em>Published: {displayDate.toLocaleDateString()}</em>
      </p>

      <button onClick={toggleFavorite}>
        {isFavorite ? "❤️ Favorited" : "🤍 Add to Favorites"}
      </button>

      <button onClick={togglePinned}>
        {isPinned ? "📌 Pinned to Home" : "📍 Pin this Recipe"}
      </button>

      <button onClick={togglePrintHint}>🖨️ How to print</button>

      {showPrintMessage && (
        <div className="print-hint-box">
          <p>
            To print this recipe, press <strong>Ctrl+P</strong> (Windows) or{" "}
            <strong>⌘+P</strong> (Mac).
          </p>
          <button onClick={() => setShowPrintMessage(false)}>Close</button>
        </div>
      )}
    </div>
  );
}

export default RecipeDetails;
