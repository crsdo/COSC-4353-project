// RegistrationForm.js
import React, { useState } from 'react';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zipcode: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(formData);
  };

  return (
    <div className="container">
      <h1>Client Registration</h1>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <label htmlFor="firstName">First Name:</label>
          <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required maxLength="50" />

          <label htmlFor="lastName">Last Name:</label>
          <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required maxLength="50" />

          <label htmlFor="address1">Address 1:</label>
          <input type="text" id="address1" name="address1" value={formData.address1} onChange={handleChange} required maxLength="100" />

          <label htmlFor="address2">Address 2:</label>
          <input type="text" id="address2" name="address2" value={formData.address2} onChange={handleChange} maxLength="100" />

          <label htmlFor="city">City:</label>
          <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} required maxLength="100" />

          <label htmlFor="state">State:</label>
          <select id="state" name="state" value={formData.state} onChange={handleChange} required>
            <option value="">Select State</option>
            <option value="AL">Alabama</option>
            {/* Add other state options */}
          </select>

          <label htmlFor="zipcode">Zipcode:</label>
          <input type="text" id="zipcode" name="zipcode" value={formData.zipcode} onChange={handleChange} required minLength="5" maxLength="9" />

          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  );
}

export default RegistrationForm;
