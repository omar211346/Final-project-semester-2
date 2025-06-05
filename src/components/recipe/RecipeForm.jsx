import "../../styles/recipeform.css";
function RecipeForm({ onSubmit, initialData = {} }) {
    return (
      <form className="recipe-form" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Title"
          name="title"
          defaultValue={initialData.title}
          required
        />
  
        <select name="category" defaultValue={initialData.category || ""} required>
          <option value="">Select category</option>
          <option value="Dinner">Dinner</option>
          <option value="Dessert">Dessert</option>
          <option value="Breakfast">Breakfast</option>
          <option value="Vegetarian">Vegetarian</option>
          <option value="Snack">Snack</option>
        </select>
  
        <input
          type="number"
          placeholder="Time (minutes)"
          name="time"
          defaultValue={initialData.time}
          required
        />
  
        <select name="difficulty" defaultValue={initialData.difficulty || ""} required>
          <option value="">Select difficulty</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
  
        <textarea
          placeholder="Ingredients"
          name="ingredients"
          defaultValue={initialData.ingredients}
          required
        />
        <textarea
          placeholder="Instructions"
          name="instructions"
          defaultValue={initialData.instructions}
          required
        />
  
        <input
          type="text"
          placeholder="Image URL (optional)"
          name="image"
          defaultValue={initialData.image}
        />
  
        <button type="submit">Update Recipe</button>
      </form>
    );
  }
  
  export default RecipeForm;
  