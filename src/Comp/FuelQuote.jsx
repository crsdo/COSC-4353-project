import React, { useState, useEffect} from 'react';
import './FuelQuote.css'; // Import the FuelQuote.css file
import Navbar from './NavBar';
import axios from 'axios';

import Sidebar from './Sidebar';

const QuoteForm = () => {
    const [gallonsRequested, setGallonsRequested] = useState('');
    const [deliveryDate, setDeliveryDate] = useState('');
    const [address, setAddress] = useState('');
    const [address1, setAddress1] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipcode, setZipcode] = useState('');
    

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
    };

    useEffect(() => {
        async function fetchData() {
          const accessToken = localStorage.getItem("accessToken");
          let data = "";
    
          const instance = axios.create({
            baseURL: "https://bbcf-76-142-23-132.ngrok-free.app/",
            headers: { 
              "ngrok-skip-browser-warning": "69420",
              "Content-Type": "application/json",
              authentication: accessToken },
          });
          const response = await instance.get("api/user/profile/")
          console.log(response);
          setAddress1(response.data.address.street);
          setCity(response.data.address.city);
          setState(response.data.address.state);
          setZipcode(response.data.address.zipcode);
        }
    
        fetchData();
      }, []); // Empty

    // Dummy expected cost and total cost data
    const expectedCost = 2.50; // Example value, replace with actual calculation
    const totalCost = gallonsRequested * expectedCost; // Example calculation, replace with actual calculation

    return (
        <div>
            <Navbar />
            <Sidebar />
            <div className='pp-container'>
            <div className="profile-container">
                <h2>Fuel Quote Form</h2>
                <form onSubmit={handleSubmit} className="checkout-form">
                    <div className="customer-info">
                        <h3>Delivery Address</h3>
                        <p>{address1}</p>
                        <p>{address.address2}</p>
                        <p>{`${city}, ${state} ${zipcode}`}</p>
                        <div>
                            <label htmlFor="gallonsRequested">Gallons Requested:</label>
                            <input
                                type="number"
                                id="gallonsRequested"
                                value={gallonsRequested}
                                onChange={(e) => setGallonsRequested(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="deliveryDate">Delivery Date:</label>
                            <input
                                type="date"
                                id="deliveryDate"
                                value={deliveryDate}
                                onChange={(e) => setDeliveryDate(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div className="order-summary">
                        <h3>Order Summary</h3>

                        <div className="cost-section">
                            <p>Expected Cost: ${expectedCost}</p>
                            <p>Total Cost: ${totalCost}</p>
                        </div>
                        <button type="submit">Submit</button>
                    </div>
                    
                </form>
            </div>
            </div>
        </div>
    );
};

export default QuoteForm;
