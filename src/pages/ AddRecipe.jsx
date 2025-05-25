import RecipeForm from "../components/recipe/RecipeForm";

function AddRecipe() {
  const handleSubmit = () => {
    const form = document.getElementById("recipe-form");

    const newRecipe = {
      title: form.title,
      category: form.category,
      time: form.time,
      difficulty: form.difficulty,
      ingredients: form.ingredients,
      instructions: form.instructions,
      image: form.image,
      createdAt: Date.now,
    };

    console.log("Recipe submitted:", newRecipe);
  };

  return (
    <div className="add-recipe-page">
      <h2>Add New Recipe</h2>
      <RecipeForm onSubmit={handleSubmit} />
    </div>
  );
}

export default AddRecipe;
