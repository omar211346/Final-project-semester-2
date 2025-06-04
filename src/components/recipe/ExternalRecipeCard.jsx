import { addRecipe } from "../../lib/firestore";

function ExternalRecipeCard({ meal }) {
  const handleSave = async () => {
    const recipeToSave = {
      title: meal.strMeal,
      category: meal.strCategory || "Unknown",
      time: meal.strTags?.split(",")[0] || "Unknown",
      difficulty: "Medium", // API gir ikke dette – vi setter en default
      ingredients: meal.strIngredient1 + ", " + meal.strIngredient2, // forenklet
      instructions: meal.strInstructions || "No instructions",
      image: meal.strMealThumb || "",
      createdAt: new Date(),
    };

    try {
      await addRecipe(recipeToSave);
      alert("Recipe saved to Myrecipes!");
    } catch (err) {
      console.error("Save failed:", err);
      alert("Failed to save recipe.");
    }
  };

  return (
    <div className="external-recipe-card">
      <h3>{meal.strMeal}</h3>
      <img src={meal.strMealThumb} alt={meal.strMeal} style={{ width: "200px" }} />
      <p><strong>Category:</strong> {meal.strCategory}</p>
      <p><strong>Origin:</strong> {meal.strArea}</p>
      <p><strong>Instructions:</strong> {meal.strInstructions?.slice(0, 100)}...</p>

      <button onClick={handleSave}>➕ Save to My Recipes</button>
    </div>
  );
}

export default ExternalRecipeCard;
