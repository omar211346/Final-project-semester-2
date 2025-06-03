
import { useEffect, useState } from "react";
import ExternalRecipeCard from "../components/recipe/ExternalRecipeCard";

function ExternalRecipes() {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchExternalRecipes() {
      try {
        const res = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=");
        const data = await res.json();
        setRecipes(data.meals || []);
      } catch (err) {
        console.error("API fetch error:", err);
        setError("Failed to load external recipes.");
      } finally {
        setIsLoading(false);
      }
    }

    fetchExternalRecipes();
  }, []);

  if (isLoading) return <p>Loading recipes...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="external-recipes-page">
      <h2>Browse Public Recipes</h2>
      <div className="external-recipe-list">
        {recipes.map((meal) => (
          <ExternalRecipeCard key={meal.idMeal} meal={meal} />
        ))}
      </div>
    </div>
  );
}

export default ExternalRecipes;
