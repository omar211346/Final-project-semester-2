import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../lib/firebaseConfig";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("Signup success:", email);
      setSuccess(true);
      setMessage("✅ Account created!");
      setTimeout(() => navigate("/"), 1000); 
    } catch (err) {
      console.error("Signup failed:", err);
      setMessage("❌ Signup failed. Try again.");
    }
  };

  return (
    <div className="signup-page">
      <h2>Signup</h2>
      {success && <p>{message}</p>}
      {!success && message && <p>{message}</p>}

      <form onSubmit={handleSubmit}>
        
        <input type="text" name="username" placeholder="Username" required />
        <input type="email" name="email" placeholder="Email" required />
        <input type="password" name="password" placeholder="Password (min. 6 chars)" required />
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
}

export default Signup;
