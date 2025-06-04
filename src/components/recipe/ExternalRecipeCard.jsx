import { useNavigate } from "react-router-dom";
import { addRecipe } from "../../lib/firestore";

function ExternalRecipeCard({ meal }) {
  const navigate = useNavigate();

  const handleSave = async () => {
    const recipeToSave = {
      title: meal.strMeal,
      category: meal.strCategory || "Unknown",
      time: meal.strTags?.split(",")[0] || "Unknown",
      difficulty: "Medium",
      ingredients: meal.strIngredient1 + ", " + meal.strIngredient2,
      instructions: meal.strInstructions || "No instructions",
      image: meal.strMealThumb || "",
      createdAt: new Date(),
    };

    try {
      await addRecipe(recipeToSave);
      alert("Recipe saved to My Recipes!");
    } catch (err) {
      console.error("Save failed:", err);
      alert("Failed to save recipe.");
    }
  };

  const goToDetails = () => {
    navigate(`/external-recipe/${meal.idMeal}`);
  };

  return (
    <div
      className="external-recipe-card"
      style={{ border: "1px solid #ccc", padding: "1rem", margin: "1rem 0", cursor: "pointer" }}
      onClick={goToDetails}
    >
      <h3>{meal.strMeal}</h3>
      <img src={meal.strMealThumb} alt={meal.strMeal} style={{ width: "200px" }} />
      <p><strong>Category:</strong> {meal.strCategory}</p>
      <p><strong>Origin:</strong> {meal.strArea}</p>
      <p><strong>Instructions:</strong> {meal.strInstructions?.slice(0, 100)}...</p>

      <button
        onClick={(e) => {
          e.stopPropagation(); // 🔒 hindre klikk på kortet når man klikker på knapp
          handleSave();
        }}
      >
        ➕ Save to My Recipes
      </button>
    </div>
  );
}

export default ExternalRecipeCard;
