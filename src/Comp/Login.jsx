import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const [action, setAction] = useState('Login');


    const handleRegister = () => {
        alert('Registration complete! Continue to Login');
        setAction('Login')
    };


    return (
        <div className='container'>
            <div className='headers'>
                <div className='text'>{action}</div>
                <div className='underline'></div>
            </div>
            {action === 'Sign Up' ? (
                <div className='inputs'>
                    <div className='input'>
                        <input type='text' id='Username' placeholder='User Name:' />
                    </div>
                    <div className='input'>
                        <input type='text' id='Password' placeholder='Password:' />
                    </div>

                    <div className='complete-container'>
                        <div className='complete' onClick={handleRegister}>Register</div>
                    </div>
                </div>
            ) : (
                <div className='inputs'>
                    <div className='input'>
                        <input type='text' id='Username' placeholder='User Name:' />
                    </div>
                    <div className='input'>
                        <input type='text' id='Password' placeholder='Password:' />
                    </div>
                    <div className='p'>Not a client? <span className='hover' onClick={() => setAction('Sign Up')}>Click here</span></div>
                    <div className='complete-container'>
                        <div className='complete'>
                            <Link to={"/FinishSignup"} className='my-link'>Login</Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Login;
