import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', { username, password });
      setMessage(response.data.message);
    } catch (error) {
      console.error(error);
      setMessage('Invalid username or password');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input type="text" placeholder="Email" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <br/>
      <label>
        Password:
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br/>
        <button type="submit">Login</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};


export default Login;
