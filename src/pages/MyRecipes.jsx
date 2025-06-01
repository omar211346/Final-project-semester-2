import { useState } from "react";
import { useNavigate } from "react-router-dom";
import RecipeList from "../components/recipe/RecipeList";

function MyRecipes() {
  const navigate = useNavigate();

  const initialRecipes = [
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

  const [myRecipes, setMyRecipes] = useState(initialRecipes);

  const handleAddRecipe = () => {
    navigate("/add-recipe");
  };

  return (
    <div className="my-recipes-page">
      <h2>My Recipes</h2>
      <button onClick={handleAddRecipe}>➕ Add New Recipe</button>

      {myRecipes.length > 0 ? (
        <RecipeList recipes={myRecipes} />
      ) : (
        <p>You haven't added any recipes yet.</p>
      )}
    </div>
  );
}

export default MyRecipes;
