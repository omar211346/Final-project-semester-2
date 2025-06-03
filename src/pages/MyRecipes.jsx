import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllRecipes, deleteRecipe } from "../lib/firestore"; 

function MyRecipes() {
  const navigate = useNavigate();
  const [myRecipes, setMyRecipes] = useState([]);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  
  useEffect(() => {
    async function fetchRecipes() {
      try {
        const recipes = await getAllRecipes();
        setMyRecipes(recipes);
      } catch (err) {
        setError("Failed to load recipes.");
      }
    }

    fetchRecipes();
  }, []);

  const handleAddRecipe = () => {
    navigate("/add-recipe");
  };

 
  const handleDelete = async (id) => {
    try {
      await deleteRecipe(id);
      setMyRecipes((prev) => prev.filter((recipe) => recipe.id !== id));
      setMessage("Recipe deleted!");
    } catch {
      setError("Could not delete recipe.");
    }
  };

  return (
    <div className="my-recipes-page">
      <h2>My Recipes</h2>

      {message && <div className="feedback-message">{message}</div>}
      {error && <div className="error-message">{error}</div>} 

      <button onClick={handleAddRecipe}>➕ Add New Recipe</button>

      {myRecipes.length > 0 ? (
        <ul className="recipe-list">
          {myRecipes.map((recipe) => (
            <li key={recipe.id}>
              <strong>{recipe.title}</strong> ({recipe.category}) -{" "}
              {recipe.createdAt?.toDate?.().toLocaleDateString() ?? "Unknown"}
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
