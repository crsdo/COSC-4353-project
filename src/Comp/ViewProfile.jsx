// ViewProfile.js

import React from 'react';
import './Profile.css'; // Import the CSS file
import NavBar from './NavBar';
import Sidebar from './Sidebar';

const ViewProfile = () => {
    // Dummy profile data for testing
    const profileData = {
        name: 'John Doe',
        email: 'johndoe@example.com',
        location: 'New York, USA',
    };

    return (
        <div>
            <NavBar />
            <Sidebar />
            <div className="profile-container">
                <h2>User Profile</h2>
                <div className="profile-data">
                    <table>
                        <tbody>
                            <tr>
                                <td>Name:</td>
                                <td>{profileData.name}</td>
                            </tr>
                            <tr>
                                <td>Email:</td>
                                <td>{profileData.email}</td>
                            </tr>
                            <tr>
                                <td>Location:</td>
                                <td>{profileData.location}</td>
                            </tr>
                            {/* Add more rows as needed */}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ViewProfile;
