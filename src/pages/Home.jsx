import { useState, useEffect } from "react"; 
import SearchBar from "../components/ui/SearchBar";
import CategoryFilter from "../components/ui/CategoryFilter";
import SortDropdown from "../components/ui/SortDropdown";
import RandomRecipeButton from "../components/ui/RandomRecipeButton";
import RecipeList from "../components/recipe/RecipeList";
import { getAllRecipes } from "../lib/firestore";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("newest");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isLoading, setIsLoading] = useState(true); 
  const [recipes, setRecipes] = useState([]); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    async function fetchRecipes() {
      try {
        const data = await getAllRecipes();
        const formatted = data.map((r) => ({
          ...r,
          createdAt: r.createdAt?.toDate ? r.createdAt.toDate() : new Date(),
        }));
  
        setRecipes(formatted);
      } catch (err) {
        setError("Failed to load recipes.");
      } finally {
        setIsLoading(false);
      }
    }
    fetchRecipes();
  }, []);  

  const sortedRecipes = [...recipes].sort((a, b) =>
    sortOrder === "newest"
      ? b.createdAt - a.createdAt
      : a.createdAt - b.createdAt
  );

  const filteredRecipes = sortedRecipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategory === "" || recipe.category === selectedCategory)
  );

  if (isLoading) {
    return (
      <div className="home-container">
        <p>Loading recipes...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="home-container">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="home-container">
      <h1>Welcome to OppskriftsHub!</h1>
      <p>Find, share, and save your favorite recipes.</p>

      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <CategoryFilter
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      <SortDropdown sortOrder={sortOrder} onSortChange={setSortOrder} />
      <RandomRecipeButton recipes={filteredRecipes} />

      <h2>All Recipes</h2>
      <RecipeList recipes={filteredRecipes} />
    </div>
  );
}

export default Home;
