// LoginForm.js
import React from 'react';
import { Link } from 'react-router-dom';

const LoginForm = () => {
    return (
        <div className="form-container">
            <h2>Fuel Management System</h2>
            <form>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" required placeholder='Username:' />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" placeholder='Password:' />
                <div>
                </div>
                <label htmlFor="remember-me">
                    <input type="checkbox" id="remember-me" name="remember-me" /> Remember me
                </label>
                <button type="submit">Login</button>
                <p>Not a client? <Link to="/register">Register Here</Link></p>

            </form>
        </div>
    );
};

export default LoginForm;
