import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const username = form.username.value;
    const password = form.password.value;

    // Enkelt sjekk, her kan du legge inn flere brukere
    if (username === "dev" && password === "1234") {
      const userData = {
        username,
        joined: new Date().toISOString()
      };
      localStorage.setItem("loggedInUser", JSON.stringify(userData));
      navigate("/profile");
    } else {
      setMessage("❌ Invalid username or password");
    }
  };

  return (
    <div className="login-page">
      <h2>Login</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Username" required />
        <input type="password" name="password" placeholder="Password" required />
        <button type="submit">Log in</button>
      </form>
    </div>
  );
}

export default Login;
