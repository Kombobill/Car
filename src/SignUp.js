import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();

    // Perform validation
    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    try {
      // Send a POST request to your backend API with username and password
      const response = await fetch('/api/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username, // Fixed: use 'username' instead of 'email'
          password,
        }),
      });

      if (response.ok) {
        navigate('/buy'); // Replace with your desired page route
      } else {
        const data = await response.json();
        setError(data.errors.join(', '));
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSignUp}>
        <div>
          <label htmlFor="username">Username:</label> {/* Fixed: use 'username' instead of 'email' */}
          <input
            type="text" // Fixed: use 'text' instead of 'username'
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
        <button type="submit">Sign Up</button>
      </form>
      <Link to="/login">Log In</Link>
    </div>
  );
};

export default SignUp;
