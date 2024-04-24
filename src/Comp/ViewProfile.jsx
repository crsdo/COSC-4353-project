// ViewProfile.js

import React from 'react';
import './ViewProfile.css'; // Import the CSS file
import NavBar from './NavBar';
import Sidebar from './Sidebar';

const ViewProfile = () => {
    // Dummy profile data for testing
    const profileData = {
        username: 'johndoe123',
        name: 'John Doe',
        email: 'johndoe@example.com',
        address: '123 AppleTown',
        city: 'New York',
        state: 'NY',
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
                                <td>Username:</td>
                                <td>{profileData.username}</td>
                            </tr>
                            <tr>
                                <td>Name:</td>
                                <td>{profileData.name}</td>
                            </tr>
                            <tr>
                                <td>Email:</td>
                                <td>{profileData.email}</td>
                            </tr>
                            <tr>
                                <td>Address:</td>
                                <td>{profileData.address}</td>
                            </tr>
                            <tr>
                                <td>City:</td>
                                <td>{profileData.city}</td>
                            </tr>
                            <tr>
                                <td>State:</td>
                                <td>{profileData.state}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ViewProfile;
