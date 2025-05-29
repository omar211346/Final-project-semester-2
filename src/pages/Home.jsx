import { useState, useEffect } from "react"; // ✅ lagt til useEffect
import SearchBar from "../components/ui/SearchBar";
import CategoryFilter from "../components/ui/CategoryFilter";
import SortDropdown from "../components/ui/SortDropdown";
import RandomRecipeButton from "../components/ui/RandomRecipeButton";
import RecipeList from "../components/recipe/RecipeList";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("newest");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    setTimeout(() => {
      console.log("Data loaded... men glemte å sette isLoading = false");
    }, 1000);
  }, []);

  const recipes = [
    {
      id: "1",
      title: "Vegetarian Pasta",
      category: "Dinner",
      createdAt: new Date("2024-10-01"),
    },
    {
      id: "2",
      title: "Chocolate Cake",
      category: "Dessert",
      createdAt: new Date("2025-03-15"),
    },
  ];

  const sortedRecipes = [...recipes].sort((a, b) =>
    sortOrder === "newest"
      ? b.createdAt - a.createdAt
      : a.createdAt - b.createdAt
  );

  const filteredRecipes = sortedRecipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategory === "" || recipe.category === selectedCategory)
  );

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
