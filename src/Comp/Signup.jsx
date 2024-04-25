import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { createAPIEndpoint, ENDPOINTS } from '../API';
import './Signup.css';
import NavBar from './NavBar';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [signupSuccess, setSignupSuccess] = useState(false);
    const nav = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

            const payload = { 
                payload: {
                    "username" : username,
                    "password" : password,
                    "name" : fullName,
                    "email" : email,
                    "phoneNumber": phoneNumber,
                    address : {
                        "street" : address,
                        "city" : city,
                        "state" : state,
                        "zipcode" : zipcode,
                    }
                }};
                
            const response = await createAPIEndpoint(ENDPOINTS.UserRegister).post(payload);
            alert("Account Successfully Created");
            nav("/login");
            setSignupSuccess(true); // Update state to indicate successful signup
        }

        catch (error) {

            alert(error);
            return
        }

    };

    // Function to redirect to the login page
    const redirectToLogin = () => {
        window.location.href = '/login';
    };

    // Render the success message and redirect button if signup was successful
    if (signupSuccess) {
        return (
            <div>
                <h2>Signup successful!</h2>
                <button onClick={redirectToLogin}>Go to Login</button>
            </div>
        );
    }

    // Render the signup form if signup is not yet successful
    return (
        <div>
            <NavBar />
            <div className="signup-container">
                <div className="signup-form">
                    <h2>Sign up for an account</h2>
                    <form onSubmit={handleSubmit}>

                        <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            required
                            placeholder='Full Name*'
                        />
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            placeholder='Username*'
                        />
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            placeholder='Password*'
                        />
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder='Email*'
                        />

                        <input
                            type="tel"
                            id="phoneNumber"
                            name="phoneNumber"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            placeholder='Phone Number*'
                            required
                        />

                        <input
                            type="text"
                            id="address"
                            name="address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            required
                            placeholder='Address*'
                        />

                        <input
                            type="text"
                            id="city"
                            name="city"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            required
                            placeholder='City*'
                        />
                        <input
                            type="text"
                            id="zipcode"
                            name="zipcode"
                            value={zipcode}
                            onChange={(e) => setZipcode(e.target.value)}
                            required
                            placeholder='Zip Code*'
                        />

                        <select
                            id="state"
                            name="state"
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                            required

                        >
                            <option value="">Select State</option>
                            <option value="AL">Alabama</option>
                            <option value="AK">Alaska</option>
                            <option value="AZ">Arizona</option>
                            <option value="AR">Arkansas</option>
                            <option value="CA">California</option>
                            <option value="CO">Colorado</option>
                            <option value="CT">Connecticut</option>
                            <option value="DE">Delaware</option>
                            <option value="FL">Florida</option>
                            <option value="GA">Georgia</option>
                            <option value="HI">Hawaii</option>
                            <option value="ID">Idaho</option>
                            <option value="IL">Illinois</option>
                            <option value="IN">Indiana</option>
                            <option value="IA">Iowa</option>
                            <option value="KS">Kansas</option>
                            <option value="KY">Kentucky</option>
                            <option value="LA">Louisiana</option>
                            <option value="ME">Maine</option>
                            <option value="MD">Maryland</option>
                            <option value="MA">Massachusetts</option>
                            <option value="MI">Michigan</option>
                            <option value="MN">Minnesota</option>
                            <option value="MS">Mississippi</option>
                            <option value="MO">Missouri</option>
                            <option value="MT">Montana</option>
                            <option value="NE">Nebraska</option>
                            <option value="NV">Nevada</option>
                            <option value="NH">New Hampshire</option>
                            <option value="NJ">New Jersey</option>
                            <option value="NM">New Mexico</option>
                            <option value="NY">New York</option>
                            <option value="NC">North Carolina</option>
                            <option value="ND">North Dakota</option>
                            <option value="OH">Ohio</option>
                            <option value="OK">Oklahoma</option>
                            <option value="OR">Oregon</option>
                            <option value="PA">Pennsylvania</option>
                            <option value="RI">Rhode Island</option>
                            <option value="SC">South Carolina</option>
                            <option value="SD">South Dakota</option>
                            <option value="TN">Tennessee</option>
                            <option value="TX">Texas</option>
                            <option value="UT">Utah</option>
                            <option value="VT">Vermont</option>
                            <option value="VA">Virginia</option>
                            <option value="WA">Washington</option>
                            <option value="WV">West Virginia</option>
                            <option value="WI">Wisconsin</option>
                            <option value="WY">Wyoming</option>
                        </select>
                        <button type="submit">Sign up</button>
                    </form>
                    <div className="login-link">
                        Already have an account? <Link to="/login">Log in</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
