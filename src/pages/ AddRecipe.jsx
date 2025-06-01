import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import RecipeForm from "../components/recipe/RecipeForm";

function AddRecipe() {
  const [message, setMessage] = useState(null);
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
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

    console.log("Recipe submitted:", newRecipe);
    setMessage("Recipe saved successfully!");
    form.reset(); 

    
    setTimeout(() => {
      navigate("/my-recipes");
    }, 1000);
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
