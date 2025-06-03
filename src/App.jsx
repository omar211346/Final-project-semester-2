import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RecipeDetails from "./pages/RecipeDetails";
import ExternalRecipes from "./pages/ExternalRecipes";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipe/:id" element={<RecipeDetails />} />
      <Route path="/external-recipes" element={<ExternalRecipes />} />
    </Routes>
  );
}

export default App;

