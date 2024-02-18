import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Perform validation
    if (password.length < 6) {
      setError('Invalid username or password.');
      return;
    }

    // Login logic...
  
    navigate('/buy'); // Replace '/dashboard' with your desired page route
  };

  return (
    <div>
      <h1>Log In</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="username">username:</label>
          <input
            type="username"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p>{error}</p>}
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default Login;
