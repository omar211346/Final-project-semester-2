import { useState } from "react";
import { useNavigate } from "react-router-dom";
import RecipeForm from "../components/recipe/RecipeForm";
import { addRecipe } from "../lib/firestore"; 

function AddRecipe() {
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const newRecipe = {
      title: form.title.value,
      category: form.category.value,
      time: form.time.value,
      difficulty: form.difficulty.value,
      ingredients: form.ingredients.value,
      instructions: form.instructions.value,
      image: form.image.value,
      createdAt: new Date(),
    };

    try {
      const id = await addRecipe(newRecipe); 
      console.log("Recipe saved with ID:", id);
      setMessage("Recipe saved successfully!");
      form.reset();

      setTimeout(() => {
        navigate("/my-recipes");
      }, 1000);
    } catch (error) {
      console.error("Failed to save recipe:", error);
      setMessage("Failed to save recipe.");
    }
  };

  return (
    <div className="add-recipe-page">
      <h2>Add New Recipe</h2>
      {message && <div className="feedback-message">{message}</div>}

      <RecipeForm onSubmit={handleSubmit} />
    </div>
  );
}

export default AddRecipe;
