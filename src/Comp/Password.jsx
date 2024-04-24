import React from 'react';
import './Password.css'; // Import the CSS file
import Navbar from './NavBar';
import { useState } from 'react';

const Password = () => {
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = { 
            payload: {
                "password" : password,
            }
          }
        };

    return (
        <div>
            <Navbar />
            
            <div className="Password">
                <h1>Change Password: </h1>
                <form>
                    <label>Enter Old Password</label>
                    <input type="password" />
                    <label>Enter New Password</label>
                    <input type="password" />
                    <label>Confirm New Password</label>
                    <input type="password" />
                    <button>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Password;