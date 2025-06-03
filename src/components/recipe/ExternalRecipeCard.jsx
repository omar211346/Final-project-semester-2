function ExternalRecipeCard({ meal }) {
    return (
      <div className="external-recipe-card">
        <h3>{meal.strMeal}</h3>
        <img src={meal.strMealThumb} alt={meal.strMeal} style={{ width: "200px" }} />
        <p><strong>Category:</strong> {meal.strCategory}</p>
        <p><strong>Origin:</strong> {meal.strArea}</p>
        <p><strong>Instructions:</strong> {meal.strInstructions?.slice(0, 100)}...</p>
      </div>
    );
  }
  
  export default ExternalRecipeCard;
  