import RecipeList from "../components/recipe/RecipeList";

function MyRecipes() {
  const myRecipes = [
    {
      id: "r1",
      title: "Homemade Pizza",
      category: "Dinner",
      createdAt: new Date("2025-01-10"),
    },
    {
      id: "r2",
      title: "Fruit Smoothie",
      category: "Snack",
      createdAt: new Date("2025-02-05"),
    },
  ];

  return (
    <div className="my-recipes-page">
      <h2>My Recipes</h2>

      {myRecipes.length > 0 ? (
        <RecipeList recipes={myRecipes} />
      ) : (
        <p>You haven't added any recipes yet.</p>
      )}
    </div>
  );
}

export default MyRecipes;
