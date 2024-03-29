// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul>
                <li>
                    <Link to="/view_profile">Profile</Link>
                </li>
                <li>
                    <Link to="/fuel_quote_form">Fuel Quote Form</Link>
                </li>
                <li>
                    <Link to="/fuel_history">Fuel History</Link>
                </li>
                <li>
                    <Link to="/">Logout</Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
