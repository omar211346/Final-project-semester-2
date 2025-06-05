import { useEffect, useState } from "react";
import ExternalRecipeCard from "../components/recipe/ExternalRecipeCard";
import SearchBar from "../components/ui/SearchBar";
import CategoryFilter from "../components/ui/CategoryFilter";
import SortDropdown from "../components/ui/SortDropdown";
import RandomRecipeButton from "../components/ui/RandomRecipeButton";
import "../styles/ExternalRecipes.css";


function ExternalRecipes() {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("newest");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [allCategories, setAllCategories] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchExternalRecipes() {
      try {
        const res = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=");
        const data = await res.json();
        const meals = data.meals || [];
        setRecipes(meals);

        const categories = [...new Set(meals.map((m) => m.strCategory))];
        setAllCategories(categories.sort());
      } catch (err) {
        console.error("API fetch error:", err);
        setError("Failed to load external recipes.");
      } finally {
        setIsLoading(false);
      }
    }

    fetchExternalRecipes();
  }, []);

  const filteredRecipes = recipes
    .filter((meal) =>
      meal.strMeal.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === "" || meal.strCategory === selectedCategory)
    )
    .sort((a, b) =>
      sortOrder === "newest" ? b.idMeal - a.idMeal : a.idMeal - b.idMeal
    );

  if (isLoading) return <p>Loading recipes...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="external-recipes-page">
      <h2>Explore Recipes from Around the World</h2>

      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <CategoryFilter
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        categories={allCategories}
      />
      <SortDropdown sortOrder={sortOrder} onSortChange={setSortOrder} />
      <RandomRecipeButton recipes={filteredRecipes} />

      <div className="external-recipe-list">
        {filteredRecipes.map((meal) => (
          <ExternalRecipeCard key={meal.idMeal} meal={meal} />
        ))}
      </div>
    </div>
  );
}

export default ExternalRecipes;
