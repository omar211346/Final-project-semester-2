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

  return (
    <div className="edit-recipe-page">
      <h2>Edit Recipe {id}</h2>
      <RecipeForm onSubmit={() => {}} initialData={existingRecipe} />
    </div>
  );
}

export default EditRecipe;
