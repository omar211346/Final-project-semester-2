function CategoryFilter() {
    const handleChange = (e) => {
      console.log(e.target.value)
    }
  
    <div class="category-filter">
      <select onchange="handleChange()">
        <option value="">All Categories</option>
        <option value="Dinner">Dinner</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  }
  
  export default CategoryFilter;