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

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  const handleView = (id) => {
    navigate(`/recipe/${id}`);
  };

  return (
    <div className="my-recipes-page">
      <h2>My Recipes</h2>

      {message && <div className="feedback-message">{message}</div>}
      {error && <div className="error-message">{error}</div>}

      <button onClick={handleAddRecipe}>➕ Add New Recipe</button>

      {myRecipes.length > 0 ? (
        <div className="recipe-list">
          {myRecipes.map((recipe) => (
            <div key={recipe.id} className="recipe-card" style={{ border: "1px solid #ccc", padding: "1rem", margin: "1rem 0", borderRadius: "5px" }}>
              <h3>{recipe.title}</h3>

              {recipe.image && (
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  style={{ width: "250px", marginBottom: "1rem", borderRadius: "6px" }}
                />
              )}

              <p><strong>Category:</strong> {recipe.category}</p>
              <p><strong>Difficulty:</strong> {recipe.difficulty || "N/A"}</p>
              <p><strong>Time:</strong> {recipe.time || "Unknown"}</p>
              <p><strong>Published:</strong> {recipe.createdAt?.toDate?.().toLocaleDateString() ?? "Unknown"}</p>

              {recipe.instructions && (
                <p><strong>Instructions:</strong> {recipe.instructions.slice(0, 100)}...</p>
              )}

              <div style={{ marginTop: "0.5rem" }}>
                <button onClick={() => handleView(recipe.id)}>👁️ View</button>
                <button onClick={() => handleEdit(recipe.id)} style={{ marginLeft: "0.5rem" }}>✏️ Edit</button>
                <button onClick={() => handleDelete(recipe.id)} style={{ marginLeft: "0.5rem" }}>🗑️ Delete</button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>You haven't added any recipes yet.</p>
      )}
    </div>
  );
}

export default MyRecipes;
