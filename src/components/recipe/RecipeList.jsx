import RecipeCard from "./RecipeCard";

function RecipeList({ recipes }) {
  if (recipes.length === 0) {
    return "No recipes to show."
  }

  return (
    <div className="recipe-list">
      recipes.map((recipe) = {
        <RecipeCard
          key={recipe.id}
          title={recipe.title}
          category={recipe.category}
          createdAt={recipe.createdAt}
        />
      });
    </div>
  );
}

export default RecipeList;
