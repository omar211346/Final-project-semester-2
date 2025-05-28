function Signup() {
    return (
      <div className="signup-page">
        <h2>Signup</h2>
        <form>
          <input type="text" name="username" placeholder="Username" required />
          <input type="email" name="email" placeholder="Email" required />
          <input type="password" name="password" placeholder="Password" required />
          <button type="submit">Sign up</button>
        </form>
      </div>
    );
  }
  
  export default Signup;
  