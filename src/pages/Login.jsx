import { useState } from "react";

function Login() {
  const [success, setSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    // Simulert validering
    if (!email.includes("@")) {
      setErrorMessage("❌ Please enter a valid email.");
      setSuccess(false);
      return;
    }

    console.log("Logging in with:", email, password);
    setSuccess(true);
    setSuccessMessage("✅ Logged in successfully!");
    setErrorMessage(null);
    form.reset(); // tøm skjemaet
  };

  return (
    <div className="login-page">
      <h2>Login</h2>

      {success && <p className="success-message">{successMessage}</p>}
      {!success && errorMessage && <p className="error-message">{errorMessage}</p>}

      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" required />
        <input type="password" name="password" placeholder="Password" required />
        <button type="submit">Log in</button>
      </form>
    </div>
  );
}

export default Login;
