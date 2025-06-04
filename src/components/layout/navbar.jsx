import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link> |{" "}
      <Link to="/add-recipe">Add Recipe</Link> |{" "}
      <Link to="/my-recipes">My Recipes</Link> |{" "}
      <Link to="/profile">Profile</Link> |{" "}
      <Link to="/login">Login</Link> |{" "}
      <Link to="/signup">Signup</Link>
      <Link to="/external-recipes">Explore</Link>

    </nav>
  );
}

export default Navbar;
