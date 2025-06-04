import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Profile() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const data = localStorage.getItem("loggedInUser");
    if (data) {
      setUser(JSON.parse(data));
    } else {
      navigate("/login");
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    navigate("/login");
  };

  if (!user) return <p>Loading profile...</p>;

  return (
    <div className="profile-page">
      <h2>Welcome, {user.username}!</h2>
      <p><strong>Username:</strong> {user.username}</p>
      <p><strong>Member since:</strong> {new Date(user.joined).toDateString()}</p>
      <button onClick={handleLogout}>Log out</button>
    </div>
  );
}

export default Profile;
