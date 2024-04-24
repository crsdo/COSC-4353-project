import React from 'react';
import './ForgetPass.css'; // Import the CSS file
import Navbar from './NavBar';

const ForgetPass = () => {
    return (
        <div>
            <Navbar />
            
            <div className="forget-pass">
                <h1>Forget Password</h1>
                <form>
                    <label>Email</label>
                    <input type="email" placeholder="Enter your email" />
                    <button>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default ForgetPass;
