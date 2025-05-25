function RecipeForm({ onSubmit }) {
    return (
      <form className="recipe-form" onSubmit={onSubmit}>
            <input type="text" placeholder="Title" name="title" required />

         <select name="category" required>
             <option value="">Select category</option>
             <option value="Dinner">Dinner</option>
             <option value="Dessert">Dessert</option>
             <option value="Breakfast">Breakfast</option>
             <option value="Vegetarian">Vegetarian</option>
             <option value="Snack">Snack</option>
         </select>

            <input type="number" placeholder="Time (minutes)" name="time" required />
      </form>
    );
  }
  
  export default RecipeForm;
  