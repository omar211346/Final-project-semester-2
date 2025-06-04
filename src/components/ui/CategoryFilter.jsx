function CategoryFilter({ selectedCategory, onCategoryChange, categories = [] }) {
  const handleChange = (e) => {
    onCategoryChange(e.target.value);
  };

  const defaultCategories = ["Dinner", "Dessert", "Breakfast", "Vegetarian", "Snack"];
  const allCategories = categories.length > 0 ? categories : defaultCategories;

  return (
    <div className="category-filter">
      <select value={selectedCategory} onChange={handleChange}>
        <option value="">All Categories</option>
        {allCategories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CategoryFilter;
