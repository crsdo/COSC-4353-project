// QuoteForm.js

import React, { useState } from 'react';
import './Profile.css'; // Import the Profile.css file
import Navbar from './NavBar';
import Sidebar from './Sidebar';

const QuoteForm = () => {
    const [gallonsRequested, setGallonsRequested] = useState('');
    const [deliveryDate, setDeliveryDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
    };

    // Dummy address data
    const address = {
        address1: '123 Main St',
        address2: 'Apt 1',
        city: 'Anytown',
        state: 'TX',
        zip: '12345',
    };

    // Dummy expected cost and total cost data
    const expectedCost = 2.50; // Example value, replace with actual calculation
    const totalCost = gallonsRequested * expectedCost; // Example calculation, replace with actual calculation

    return (
        <div>
            <Navbar />
            <Sidebar />
            <div className="profile-container">
                <h2>Fuel Quote Form</h2>
                <form onSubmit={handleSubmit}>
                    <div className="address-section">
                        <h3>Shipping Address</h3>
                        <p>{address.address1}</p>
                        <p>{address.address2}</p>
                        <p>{`${address.city}, ${address.state} ${address.zip}`}</p>
                    </div>
                    <div className="gallons-section">
                        <h3>Gallons Requested and Date</h3>
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
                    <div className="cost-section">
                        <h3>Expected Cost and Total Cost</h3>
                        <p>Expected Cost: ${expectedCost}</p>
                        <p>Total Cost: ${totalCost}</p>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default QuoteForm;
