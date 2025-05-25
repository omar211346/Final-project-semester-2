import SearchBar from "../components/ui/SearchBar";
import CategoryFilter from "../components/ui/CategoryFilter";
import SortDropdown from "../components/ui/SortDropdown";
import RandomRecipeButton from "../components/ui/RandomRecipeButton";
import RecipeList from "../components/recipe/RecipeList";

function Home() {
  // Midlertidige testdata
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

  return (
    <div className="home-container">
      <h1>Welcome to OppskriftsHub!</h1>
      <p>Find, share, and save your favorite recipes.</p>

      <SearchBar />
      <CategoryFilter />
      <SortDropdown />
      <RandomRecipeButton />

      <h2>All Recipes</h2>
      <RecipeList recipes={recipes} />
    </div>
  );
}

export default Home;
