function RandomRecipeButton({ recipes }) {
  const handleClick = () => {
    if (!recipes || recipes.length === 0) {
      alert("No recipes available.");
      return;
    }

    const randomIndex = Math.floor(Math.random() * recipes.length);
    const randomRecipe = recipes[randomIndex];

    alert(`Try this recipe: ${randomRecipe.strMeal || randomRecipe.title || "Unknown"}`);
  };

  return (
    <div className="random-button">
      <button onClick={handleClick}>🎲 Random Recipe</button>
    </div>
  );
}

export default RandomRecipeButton;
