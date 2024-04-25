import React from 'react';
import './Password.css'; // Import the CSS file
import Navbar from './NavBar';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';

const Password = () => {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [newPasswordConfirm, setNewPasswordConfirm] = useState('');
    const [error, seterror] = useState('');
    const nav = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (newPassword !== newPasswordConfirm) {
            seterror("New passwords don't match.")
        }
        const payload = {
            payload: {
                "oldPassword": oldPassword,
                "newPassword": newPassword,
                "newPasswordConfirm": newPasswordConfirm
            }
        };
        const accessToken = localStorage.getItem("accessToken");
        const instance = axios.create({
            baseURL: "https://bbcf-76-142-23-132.ngrok-free.app/",
            headers: {
                "ngrok-skip-browser-warning": "69420",
                "Content-Type": "application/json",
                authentication: accessToken,
            },
        });
        const response = await instance.patch("api/auth/change-password", payload);
        console.log(response.data);
        window.alert("Password changed successfully!");
        nav("/view_profile");
        window.location.reload();

    };

    return (
        <div>
            <Navbar />
            <div className="Password">
                <h1>Change Password: </h1>
                <form onSubmit={handleSubmit}>
                    <label>Enter Old Password</label>
                    <input
                        type="password"
                        id="oldPassword"
                        name="oldPassword"
                        value={oldPassword}
                        onChange={(e) => setOldPassword(e.target.value)}
                        required
                    />
                    <label>Enter New Password</label>
                    <input
                        type="password"
                        id="newPassword"
                        name="newPassword"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        required
                    />
                    <label>Confirm New Password</label>
                    <input
                        type="password"
                        id="newPasswordConfirm"
                        name="newPasswordConfirm"
                        value={newPasswordConfirm}
                        onChange={(e) => setNewPasswordConfirm(e.target.value)}
                        required
                    />

                    <button type='submit'>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Password;