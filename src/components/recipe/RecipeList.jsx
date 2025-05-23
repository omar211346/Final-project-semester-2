import RecipeCard from "./RecipeCard";

function RecipeList({ recipes }) {
  if (!recipes || recipes.length === 0) {
    return <div className="no-recipes">No recipes to show.</div>;
  }

  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          title={recipe.title}
          category={recipe.category}
          createdAt={recipe.createdAt}
        />
      ))}
    </div>
  );
}

export default RecipeList;
