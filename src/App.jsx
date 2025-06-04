import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/navbar"; 
import Home from "./pages/Home";
import MyRecipes from "./pages/MyRecipes";
import AddRecipe from "./pages/AddRecipe";
import ExternalRecipes from "./pages/ExternalRecipes";
import RecipeDetails from "./pages/RecipeDetails";
import EditRecipe from "./pages/EditRecipe";
import ExternalRecipeDetails from "./pages/ExternalRecipeDetails";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-recipes" element={<MyRecipes />} />
        <Route path="/add-recipe" element={<AddRecipe />} />
        <Route path="/external-recipes" element={<ExternalRecipes />} />
        <Route path="/external-recipe/:id" element={<ExternalRecipeDetails />} /> 
        <Route path="/recipe/:id" element={<RecipeDetails />} />
        <Route path="/edit/:id" element={<EditRecipe />} />
        <Route path="/signup" element={<Signup />} />
        <Route path= "/login" element={<Login />} />
        <Route path= "/Profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
