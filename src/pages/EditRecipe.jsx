import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import RecipeForm from "../components/recipe/RecipeForm";
import { getRecipeById, updateRecipe } from "../lib/firestore";
import "../styles/editrecipe.css";

function EditRecipe() {
  const { id } = useParams();
  const navigate = useNavigate(); 

  const [recipe, setRecipe] = useState(null);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadRecipe() {
      try {
        const data = await getRecipeById(id);
        setRecipe(data);
      } catch (err) {
        console.error("Failed to load recipe:", err);
        setError("Failed to load recipe.");
      } finally {
        setIsLoading(false); 
      }
    }
    loadRecipe();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const title = form.title.value.trim();
    const category = form.category.value;
    const time = form.time.value;
    const difficulty = form.difficulty.value;
    const ingredients = form.ingredients.value.trim();
    const instructions = form.instructions.value.trim();
    const image = form.image.value;

    if (!title || !category || !time || !difficulty || !ingredients || !instructions) {
      setMessage("Please fill in all required fields.");
      return;
    }

    const updatedRecipe = {
      title,
      category,
      time,
      difficulty,
      ingredients,
      instructions,
      image,
      updatedAt: new Date(),
    };

    try {
      await updateRecipe(id, updatedRecipe);
      setMessage("Recipe updated successfully!");
      setTimeout(() => {
        navigate("/my-recipes");
      }, 1000);
    } catch (err) {
      console.error("Failed to update recipe:", err);
      setMessage("Failed to update recipe.");
    }
  };

  if (isLoading) return <p>Loading recipe...</p>;
  if (error) return <p>{error}</p>;
  if (!recipe) return <p>Recipe not found.</p>;

  return (
    <div className="edit-recipe-page">
      <h2>Edit Recipe</h2>
      {message && <div className="feedback-message">{message}</div>}
      <RecipeForm onSubmit={handleSubmit} initialData={recipe} />
    </div>
  );
}

export default EditRecipe;
