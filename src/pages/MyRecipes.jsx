import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
  const [message, setMessage] = useState(null); 

  const handleAddRecipe = () => {
    navigate("/add-recipe");
  };

  const handleDelete = (id) => {
    const updatedRecipes = myRecipes.filter((recipe) => recipe.id !== id);
    setMyRecipes(updatedRecipes);
    setMessage("Recipe deleted!"); 
  };

  return (
    <div className="my-recipes-page">
      <h2>My Recipes</h2>

      {message && <div className="feedback-message">{message}</div>} 

      <button onClick={handleAddRecipe}>➕ Add New Recipe</button>

      {myRecipes.length > 0 ? (
        <ul className="recipe-list">
          {myRecipes.map((recipe) => (
            <li key={recipe.id}>
              <strong>{recipe.title}</strong> ({recipe.category}) -{" "}
              {new Date(recipe.createdAt).toLocaleDateString()}
              <button onClick={() => handleDelete(recipe.id)}>🗑️ Delete</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>You haven't added any recipes yet.</p>
      )}
    </div>
  );
}

export default MyRecipes;
