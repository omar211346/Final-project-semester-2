function Profile() {
    const user = {
      username: "FarahDev",
      email: "farah@example.com",
      createdAt: new Date("2024-09-01"),
    };
  
    return (
      <div className="profile-page">
        <h2>My Profile</h2>
        <p><strong>Username:</strong> {user.username}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Member since:</strong> {user.createdAt.toDateString()}</p>
      </div>
    );
  }
  
  export default Profile;
  