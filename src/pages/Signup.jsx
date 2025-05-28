import { useState } from "react";

function Signup() {
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const username = form.username.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log("Signing up with:", username, email, password);
    setSuccess(true); 
  };
  return (
    <div className="signup-page">
      <h2>Signup</h2>
      {success && <p>✅ Account created successfully!</p>}
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Username" required />
        <input type="email" name="email" placeholder="Email" required />
        <input type="password" name="password" placeholder="Password" required />
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
}

export default Signup;
