import { useState } from "react";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() !== "") {
      setIsLoggedIn(true);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      {!isLoggedIn ? (
        <form onSubmit={handleSubmit}>
          <h2>Login Form</h2>
          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br /><br />
          <button type="submit">Login</button>
        </form>
      ) : (
        <h2>Welcome, {username}!</h2>
      )}
    </div>
  );
}

export default LoginForm;
