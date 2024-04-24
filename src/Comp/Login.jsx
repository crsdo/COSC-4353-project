import React, { useState } from 'react';
import { Link , useNavigate} from 'react-router-dom';
import './Login.css';
import NavBar from './NavBar';

import { createAPIEndpoint, ENDPOINTS } from '../API';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const nav = useNavigate ();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await createAPIEndpoint(ENDPOINTS.UserLogin).post({
        username: username,
        password: password
      });

      if (!response || response.status !== 200) {
        throw new Error(response.error);
      }
      nav('/view_profile');
    } catch (error) {
      setError(error.message);
    }
    
  };

    return (
        <div>
            <NavBar />
            <div className="login-container">
                <div className="login-form">
                    <h2>Welcome back</h2>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <button type="submit">Sign in</button>
                    </form>
                    <div className="forgot-password">
                        <Link to="#">Forgot password?</Link>
                    </div>
                    <div className="signup-link">
                        Don't have an account? <Link to="/register">Sign up</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
