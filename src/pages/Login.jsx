function Login() {
    return (
      <div className="login-page">
        <h2>Login</h2>
        <form>
          <input type="email" name="email" placeholder="Email" required />
          <input type="password" name="password" placeholder="Password" required />
          <button type="submit">Log in</button>
        </form>
      </div>
    );
  }
  
  export default Login;
  
  