import { useEffect, useState } from "react";
import { getAllRecipes } from "../lib/firestore";
import RecipeCard from "../components/recipe/RecipeCard";
import '../css/home.css';



function Home() {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const firestoreData = await getAllRecipes();
        const formatted = firestoreData.map((r) => ({
          id: r.id,
          title: r.title,
          category: r.category,
          createdAt: r.createdAt?.toDate ? r.createdAt.toDate() : new Date(),
        }));
        setRecipes(formatted);
      } catch (err) {
        console.error(err);
        setError("Failed to load recipes.");
      }
    }

    fetchData();
  }, []);

  // Vis 3 tilfeldige oppskrifter
  const randomTeasers = [...recipes].sort(() => 0.5 - Math.random()).slice(0, 3);

  return (
    <div className="home-container">
      <h1>Welcome to OppskriftsHub!</h1>
      <p>Find, share, and save your favorite recipes from around the world.</p>

      {error && <p>{error}</p>}

      <h3>Featured Recipes</h3>
      <div className="teaser-list">
        {randomTeasers.map((recipe) => (
          <RecipeCard key={recipe.id} {...recipe} />
        ))}
      </div>
    </div>
  );
}

export default Home;
