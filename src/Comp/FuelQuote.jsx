import React, { useState } from 'react';
import { BsCalendar } from 'react-icons/bs'; // Assuming you have a calendar icon
import Sidebar from "./Sidebar";
import './FuelQuote.css'

const FuelQuote = () => {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const [gallonsRequested, setGallonsRequested] = useState('');
  const [deliveryDate, setDeliveryDate] = useState('');

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  // Placeholder values for non-editable fields (client profile)
  const deliveryAddress = '123 Main St'; // Example delivery address
  const suggestedPricePerGallon = 2.50; // Example suggested price
  const totalAmountDue = gallonsRequested * suggestedPricePerGallon; // Example total amount due

  const handleGallonsChange = (e) => {
    setGallonsRequested(e.target.value);
  };

  const handleDeliveryDateChange = (e) => {
    setDeliveryDate(e.target.value);
  };

  return (
    <div className='grid-container'>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      
      {/* Form */}
      <form className='fuel-quote-form'>
        <label htmlFor='gallonsRequested'>Gallons Requested:</label>
        <input
          type='number'
          id='gallonsRequested'
          name='gallonsRequested'
          value={gallonsRequested}
          onChange={handleGallonsChange}
          required
        />
        
        <label htmlFor='deliveryAddress'>Delivery Address:</label>
        <input
          type='text'
          id='deliveryAddress'
          name='deliveryAddress'
          value={deliveryAddress}
          disabled
        />
        
        <label htmlFor='deliveryDate'>Delivery Date:</label>
        <input
          type='date'
          id='deliveryDate'
          name='deliveryDate'
          value={deliveryDate}
          onChange={handleDeliveryDateChange}
          required
        />
        
        <label htmlFor='suggestedPricePerGallon'>Suggested Price / gallon:</label>
        <input
          type='number'
          id='suggestedPricePerGallon'
          name='suggestedPricePerGallon'
          value={suggestedPricePerGallon.toFixed(2)} // Display with 2 decimal places
          disabled
        />
        
        <label htmlFor='totalAmountDue'>Total Amount Due:</label>
        <input
          type='number'
          id='totalAmountDue'
          name='totalAmountDue'
          value={totalAmountDue.toFixed(2)} // Display with 2 decimal places
          disabled
        />
      </form>
    </div>
  );
};

export default FuelQuote;
