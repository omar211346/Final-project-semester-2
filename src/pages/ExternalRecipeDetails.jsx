import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function ExternalRecipeDetails() {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchMeal() {
      try {
        const res = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        const data = await res.json();
        if (data.meals && data.meals.length > 0) {
          setMeal(data.meals[0]);
        } else {
          setError("Meal not found.");
        }
      } catch (err) {
        console.error("API error:", err);
        setError("Failed to load meal.");
      } finally {
        setIsLoading(false);
      }
    }

    fetchMeal();
  }, [id]);

  if (isLoading) return <p>Loading meal...</p>;
  if (error) return <p>{error}</p>;
  if (!meal) return <p>No meal data available.</p>;

  return (
    <div className="external-recipe-details-page">
      <h2>{meal.strMeal}</h2>
      <img src={meal.strMealThumb} alt={meal.strMeal} style={{ maxWidth: "300px" }} />
      <p><strong>Category:</strong> {meal.strCategory}</p>
      <p><strong>Area:</strong> {meal.strArea}</p>
      <h3>Ingredients</h3>
      <p>{meal.strIngredient1}, {meal.strIngredient2} ...</p>
      <h3>Instructions</h3>
      <p>{meal.strInstructions}</p>
    </div>
  );
}

export default ExternalRecipeDetails;
