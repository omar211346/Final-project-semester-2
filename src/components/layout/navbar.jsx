// src/components/layout/Navbar.jsx
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../lib/firebaseConfig";
import "../../styles/navbar.css";

function Navbar() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe(); // Rydd opp listener når komponent fjernes
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <Link to="/">Home</Link> |{" "}
      <Link to="/add-recipe">Add Recipe</Link> |{" "}
      <Link to="/my-recipes">My Recipes</Link> |{" "}
      <Link to="/external-recipes">Explore</Link> |{" "}
      <Link to="/profile">Profile</Link> |{" "}

      {user ? (
        <button onClick={handleLogout} style={{ border: "none", background: "none", cursor: "pointer", color: "blue", textDecoration: "underline" }}>
          Logout
        </button>
      ) : (
        <>
          <Link to="/login">Login</Link> |{" "}
        </>
      )}
    </nav>
  );
}

export default Navbar;
