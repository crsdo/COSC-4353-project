// FuelHistoryForm.jsx

import React from 'react';
import './FuelHistory.css'; // Import the CSS file
import Navbar from './NavBar';
import Sidebar from './Sidebar';

const dummyData = [
    {
        id: 1,
        gallonsRequested: 150,
        deliveryAddress: '123 Elm St, Springfield, IL 62701',
        deliveryDate: '2024-04-15',
        suggestedPricePerGallon: 2.45,
        totalAmountDue: 367.50,
        status: 'Past Order'
    },
    {
        id: 2,
        gallonsRequested: 200,
        deliveryAddress: '456 Oak St, Springfield, IL 62702',
        deliveryDate: '2024-05-01',
        suggestedPricePerGallon: 2.40,
        totalAmountDue: 480.00,
        status: 'Past Order'
    },
    {
        id: 3,
        gallonsRequested: 100,
        deliveryAddress: '789 Maple St, Springfield, IL 62703',
        deliveryDate: '2024-05-15',
        suggestedPricePerGallon: 2.55,
        totalAmountDue: 255.00,
        status: 'Current Order'
    }
];

const FuelHistoryForm = () => {
    return (
        <div>
            <Navbar />
            <Sidebar />
            <div className='pp-container'>
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
                        {dummyData.filter(quote => quote.status === 'Current Order').map((quote, index) => (
                            <tr key={index}>
                                <td>{quote.gallonsRequested}</td>
                                <td>{quote.deliveryAddress}</td>
                                <td>{quote.deliveryDate}</td>
                                <td>{quote.suggestedPricePerGallon}</td>
                                <td>{quote.totalAmountDue}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <h3>Past Orders</h3>
                <table className="past-orders-table">
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
                        {dummyData.filter(quote => quote.status === 'Past Order').map((quote, index) => (
                            <tr key={index}>
                                <td>{quote.gallonsRequested}</td>
                                <td>{quote.deliveryAddress}</td>
                                <td>{quote.deliveryDate}</td>
                                <td>{quote.suggestedPricePerGallon}</td>
                                <td>{quote.totalAmountDue}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            </div>
        </div>
    );
};

export default FuelHistoryForm;
