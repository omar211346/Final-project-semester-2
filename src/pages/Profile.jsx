function Profile() {
    const user = {
      username: "dev",
      email: "dev@example.com",
      createdAt: new Date("2024-09-01"),
    };
  
    const handleLogout = () => {
      alert("You have been logged out."); 
    };
  
    return (
      <div className="profile-page">
        <h2>My Profile</h2>
        <p><strong>Username:</strong> {user.username}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Member since:</strong> {user.createdAt.toDateString()}</p>
  
        <button onClick={handleLogout}>Log out</button>
      </div>
    );
  }
  
  export default Profile;
  