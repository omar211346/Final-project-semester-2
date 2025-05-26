import { useParams } from "react-router-dom";
import RecipeForm from "../components/recipe/RecipeForm";

function EditRecipe() {
  const { id } = useParams();

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

    const updatedRecipe = {
      title: form.title.value,
      category: form.category.value,
      time: form.time.value,
      difficulty: form.difficulty.value,
      ingredients: form.ingredients.value,
      instructions: form.instructions.value,
      image: form.image.value,
      updatedAt: new Date(),
    };

    console.log("Edited recipe:", updatedRecipe);
    alert("Recipe updated (locally)!");
  };

  return (
    <div className="edit-recipe-page">
      <h2>Edit Recipe {id}</h2>
      <RecipeForm onSubmit={handleSubmit} initialData={existingRecipe} />
    </div>
  );
}

export default EditRecipe;
