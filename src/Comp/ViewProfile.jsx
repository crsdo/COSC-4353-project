import React, { useState, useEffect } from 'react';
import './ViewProfile.css'; // Import your CSS file for styling
import NavBar from './NavBar'; // Import the NavBar component
import Sidebar from './Sidebar';
import { useNavigate } from 'react-router-dom';
import { ENDPOINTS, createAPIEndpoint } from '../API';

const Profile = () => {
    const [fullName, setFullName] = useState('');
    const [address1, setAddress1] = useState('');
    const [address2, setAddress2] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipcode, setZipcode] = useState('');
    const nav = useNavigate();

    useEffect(() => {
        // Fetch user profile data from the backend
        createAPIEndpoint(ENDPOINTS.GetProfile)

            .fetch()
            .then(response => {
                const userData = response.data;
                setFullName(userData.fullName);
                setAddress1(userData.address1);
                setAddress2(userData.address2);
                setCity(userData.city);
                setState(userData.state);
                setZipcode(userData.zipcode);
            })
            .catch(error => {
                console.error('Error fetching user profile:', error);
                // Handle error (e.g., show error message to user)
                alert(error);
            });
    }, []);


    return (
        <div>
            <NavBar />
            <Sidebar />
            <div className="profile-container">
                <h2>Profile Management</h2>
                <div className="profile-data">
                    <table>
                        <thead>
                            <tr>
                                <th>Field</th>
                                <th>Value</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Full Name:</td>
                                <td>{fullName}</td>
                            </tr>
                            <tr>
                                <td>Address 1:</td>
                                <td>{address1}</td>
                            </tr>
                            <tr>
                                <td>Address 2:</td>
                                <td>{address2}</td>
                            </tr>
                            <tr>
                                <td>City:</td>
                                <td>{city}</td>
                            </tr>
                            <tr>
                                <td>State:</td>
                                <td>{state}</td>
                            </tr>
                            <tr>
                                <td>Zipcode:</td>
                                <td>{zipcode}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Profile;
