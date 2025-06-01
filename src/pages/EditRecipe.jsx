import { useParams } from "react-router-dom";
import { useState } from "react";
import RecipeForm from "../components/recipe/RecipeForm";

function EditRecipe() {
  const { id } = useParams();
  const [message, setMessage] = useState(null); 

  const existingRecipe = {
    title: "Testoppskrift",
    category: "Dinner",
    time: "30",
    difficulty: "Easy",
    ingredients: "Pasta, Tomatoes",
    instructions: "Boil pasta. Make sauce. Mix.",
    image: "https://example.com/image.jpg",
  };

  const handleSubmit = (e) => {
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

    console.log("Edited recipe:", updatedRecipe);
    setMessage("Recipe updated successfully!"); // ✅ Trinn 3
  };

  return (
    <div className="edit-recipe-page">
      <h2>Edit Recipe {id}</h2>

      {message && <div className="feedback-message">{message}</div>}

      <RecipeForm onSubmit={handleSubmit} initialData={existingRecipe} />
    </div>
  );
}

export default EditRecipe;
