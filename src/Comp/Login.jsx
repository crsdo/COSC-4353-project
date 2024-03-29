import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Login.css';
import NavBar from './NavBar';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:3000/api/auth/login', {
                username,
                password,
            });
            if (response.data === 'Login successful') {
                console.log('Login successful');
                // Redirect to profile page or another route on successful login
                window.location.href = '/ViewProfile';
            } else {
                console.error('Login failed: Invalid username or password');
                // Handle login failure (e.g., display error message to user)
            }
        } catch (error) {
            console.error('Login failed:', error.response.data);
            // Handle login failure (e.g., display error message to user)
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleLogin();
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
