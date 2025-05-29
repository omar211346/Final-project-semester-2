function Home() {
    const [searchTerm, setSearchTerm] = useState("");
    const [sortOrder, setSortOrder] = useState("newest");
    const [selectedCategory, setSelectedCategory] = useState(""); 
  
    const recipes = [
      { id: "1", title: "Vegetarian Pasta", category: "Dinner", createdAt: new Date("2024-10-01") },
      { id: "2", title: "Chocolate Cake", category: "Dessert", createdAt: new Date("2025-03-15") },
    ];
  
    const sortedRecipes = [...recipes].sort((a, b) =>
      sortOrder === "newest" ? b.createdAt - a.createdAt : a.createdAt - b.createdAt
    );
  
    const filteredRecipes = sortedRecipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
    ); 
  
    return (
      <div className="home-container">
        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        <CategoryFilter selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />
        <SortDropdown sortOrder={sortOrder} onSortChange={setSortOrder} />
        <RandomRecipeButton recipes={filteredRecipes} />
        <RecipeList recipes={filteredRecipes} />
      </div>
    );
  }
  