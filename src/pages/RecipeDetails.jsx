import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getRecipeById } from "../lib/firestore";


function RecipeDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isPinned, setIsPinned] = useState(false);
  const [showPrintMessage, setShowPrintMessage] = useState(false);

  useEffect(() => {
    async function fetchRecipe() {
      try {
        const data = await getRecipeById(id);
        setRecipe(data);
      } catch (err) {
        setError("Recipe not found.");
      } finally {
        setIsLoading(false);
      }
    }

    fetchRecipe();
  }, [id]);

  const toggleFavorite = () => setIsFavorite(!isFavorite);
  const togglePinned = () => setIsPinned(!isPinned);
  const togglePrintHint = () => setShowPrintMessage(!showPrintMessage);

  if (isLoading) return <p>Loading recipe...</p>;
  if (error) return <p>{error}</p>;
  if (!recipe) return <p>No recipe found.</p>;

  return (
    <div className="recipe-details-page" style={{ padding: "1rem", maxWidth: "600px", margin: "auto" }}>
      <h2>{recipe.title}</h2>

      {recipe.image && (
        <img
          src={recipe.image}
          alt={recipe.title}
          style={{ maxWidth: "100%", borderRadius: "6px", marginBottom: "1rem" }}
        />
      )}

      <div style={{ backgroundColor: "#f9f9f9", padding: "1rem", borderRadius: "5px", marginBottom: "1rem" }}>
        <p><strong>Category:</strong> {recipe.category}</p>
        <p><strong>Time:</strong> {recipe.time} minutes</p>
        <p><strong>Difficulty:</strong> {recipe.difficulty}</p>
        <p>
          <em>
            Published:{" "}
            {recipe.createdAt?.toDate?.().toLocaleDateString() ?? "Unknown"}
          </em>
        </p>
      </div>

      <div>
        <h3>Ingredients</h3>
        <p>{recipe.ingredients}</p>

        <h3>Instructions</h3>
        <p>{recipe.instructions}</p>
      </div>

      <div style={{ marginTop: "1rem" }}>
        <button onClick={toggleFavorite}>
          {isFavorite ? "❤️ Favorited" : "🤍 Add to Favorites"}
        </button>{" "}
        <button onClick={togglePinned}>
          {isPinned ? "📌 Pinned" : "📍 Pin this Recipe"}
        </button>{" "}
        <button onClick={togglePrintHint}>🖨️ How to Print</button>{" "}
        <button onClick={() => navigate(`/edit/${recipe.id}`)}>✏️ Edit</button>
      </div>

      {showPrintMessage && (
        <div style={{ backgroundColor: "#ffe", padding: "1rem", marginTop: "1rem" }}>
          <p>
            To print this recipe, press <strong>Ctrl + P</strong> (Windows) or{" "}
            <strong>⌘ + P</strong> (Mac).
          </p>
          <button onClick={() => setShowPrintMessage(false)}>Close</button>
        </div>
      )}
    </div>
  );
}

export default RecipeDetails;
