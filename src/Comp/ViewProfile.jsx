import React, { useState, useEffect } from "react";
import "./ViewProfile.css"; // Import your CSS file for styling
import NavBar from "./NavBar"; // Import the NavBar component
import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";
import { ENDPOINTS, createAPIEndpoint } from "../API";
import axios from "axios";

const ViewProfile = () => {
  const [fullName, setFullName] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [username, setUsername] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipcode, setZipcode] = useState("");
  const nav = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const accessToken = localStorage.getItem("accessToken");
      let data = "";

      const instance = axios.create({
        baseURL: "https://bbcf-76-142-23-132.ngrok-free.app/",
        headers: {
          "ngrok-skip-browser-warning": "69420",
          "Content-Type": "application/json",
          authentication: accessToken
        },
      });
      const response = await instance.get("api/user/profile/")
      setFullName(response.data.name);
      setAddress1(response.data.address.street);
      setUsername(response.data.username);
      setCity(response.data.address.city);
      setState(response.data.address.state);
      setZipcode(response.data.address.zipcode);
    }

    fetchData();
  }, []); // Empty

  const handleEditClick = () => {
    // Navigate to the edit profile page
    nav("/edit_profile");
  };
  const handlePassClick = () => {
    // Navigate to the edit profile page
    nav("/edit_password");
  };

  return (
    <div>
      <NavBar />
      <Sidebar />
      <div className="pp-container">
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
                  <td>Username:</td>
                  <td>{username}</td>
                </tr>
                <tr>
                  <td>Address 1:</td>
                  <td>{address1}</td>
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
              <button onClick={handleEditClick}>Edit Profile</button>
              <button onClick={handlePassClick}>Change Password</button>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProfile;
