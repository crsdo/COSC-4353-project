import { useEffect, useState } from 'react';
import React from 'react';
import './FuelHistory.css'; // Import the CSS file
import Navbar from './NavBar';
import Sidebar from './Sidebar';
import axios from 'axios';

const FuelHistoryForm = () => {
    const [client, setClient] = useState([]);
    const [error, setError] = useState(null);
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zipcode, setZipcode] = useState("");


    useEffect(() => {
        async function fetchData() {
            try {
                const accessToken = localStorage.getItem("accessToken");
                const instance = axios.create({
                    baseURL: "https://bbcf-76-142-23-132.ngrok-free.app/",
                    headers: {
                        "ngrok-skip-browser-warning": "69420",
                        "Content-Type": "application/json",
                        authentication: accessToken
                    },
                });
                const response = await instance.get("api/history/oil/");
                const getAddress = await instance.get("api/user/profile/");
                setClient(response.data);
                setAddress(getAddress.data.address.street);
                setCity(getAddress.data.address.city);
                setState(getAddress.data.address.state);
                setZipcode(getAddress.data.address.zipcode);

            } catch (error) {
                console.error("Error fetching quote history:", error);
                setError(error);
            }
        }

        fetchData();
    }, []); // Empty dependency array to fetch data only once

    return (
        <div>
            <Navbar />
            <Sidebar />
            <div className='pp-container'>
                <div className="Myspace"></div>
            <div className="profile-container">
                <h2>Fuel Quote History</h2>
                <h3>Current Orders</h3>
                <table className="current-orders-table">
                    <thead>
                        <tr>
                            <th>Gallons Requested</th>
                            <th>Delivery Address</th>
                            <th>Delivery Date</th>
                            <th>Suggested Price per Gallon</th>
                            <th>Total Amount Due</th>
                        </tr>
                    </thead>
                    <tbody>
                        {client.map((client, index) => (
                            <tr key={index}>
                                <td>{client.gallons_requested}</td>
                                <td>{`${address}, ${state} ${zipcode}`}</td>
                                <td>{client.deliveryDate.split("T")[0]}</td>
                                <td>{1.50}</td>
                                <td>{client.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {error && <p>Error fetching data: {error.message}</p>}
            </div>
            </div>
        </div>
    );
};

export default FuelHistoryForm;
