function CategoryFilter({ selectedCategory, onCategoryChange }) {
    const handleChange = (e) => {
      onCategoryChange(e.target.value); 
    };
  
    return (
      <div className="category-filter">
        <select value={selectedCategory} onChange={handleChange}>
          <option value="">All Categories</option>
          <option value="Dinner">Dinner</option>
          <option value="Dessert">Dessert</option>
          <option value="Breakfast">Breakfast</option>
          <option value="Vegetarian">Vegetarian</option>
          <option value="Snack">Snack</option>
        </select>
      </div>
    );
  }
  
  export default CategoryFilter;
  