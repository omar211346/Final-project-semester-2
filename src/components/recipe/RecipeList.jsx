import RecipeCard from "./RecipeCard";

function RecipeList({ recipes }) {
  if (!recipes || recipes.length === 0) {
    return <div className="no-recipes">No recipes to show.</div>;
  }

  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.id || recipe.idMeal}
          title={recipe.title || recipe.strMeal}
          category={recipe.category || recipe.strCategory}
          createdAt={recipe.createdAt || new Date()}
          image={recipe.image || recipe.strMealThumb}
          instructions={recipe.instructions || recipe.strInstructions}
        />
      ))}
    </div>
  );
}

export default RecipeList;
