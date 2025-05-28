import { useState } from "react";

function Login() {
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log("Logging in with:", email, password);
    setSuccess(true); // Vis bekreftelse
  };

  return (
    <div className="login-page">
      <h2>Login</h2>

      {success && <p>✅ Logged in successfully!</p>}

      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" required />
        <input type="password" name="password" placeholder="Password" required />
        <button type="submit">Log in</button>
      </form>
    </div>
  );
}

export default Login;
