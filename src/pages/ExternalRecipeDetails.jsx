import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function ExternalRecipeDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
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

  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];
    if (ingredient && ingredient.trim()) {
      ingredients.push(`${measure} ${ingredient}`);
    }
  }

  return (
    <div className="external-recipe-details-page">
      <h2>{meal.strMeal}</h2>

      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        style={{ maxWidth: "300px", marginBottom: "1rem" }}
      />

      <p><strong>Category:</strong> {meal.strCategory}</p>
      <p><strong>Origin:</strong> {meal.strArea}</p>

      <h3>Ingredients</h3>
      <ul>
        {ingredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h3>Instructions</h3>
      <p>{meal.strInstructions}</p>

      <button onClick={() => navigate(-1)} style={{ marginTop: "1rem" }}>
        ← Back to Explore
      </button>
    </div>
  );
}

export default ExternalRecipeDetails;
