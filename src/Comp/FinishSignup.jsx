import React, { useState } from 'react';
import './FinishSignup.css';
import { Link } from 'react-router-dom';

const states = [
    { name: 'Alabama', abbreviation: 'AL' },
    { name: 'Alaska', abbreviation: 'AK' },
    { name: 'Arizona', abbreviation: 'AZ' },
    { name: 'Arkansas', abbreviation: 'AR' },
    { name: 'California', abbreviation: 'CA' },
    { name: 'Colorado', abbreviation: 'CO' },
    { name: 'Connecticut', abbreviation: 'CT' },
    { name: 'Delaware', abbreviation: 'DE' },
    { name: 'Florida', abbreviation: 'FL' },
    { name: 'Georgia', abbreviation: 'GA' },
    { name: 'Hawaii', abbreviation: 'HI' },
    { name: 'Idaho', abbreviation: 'ID' },
    { name: 'Illinois', abbreviation: 'IL' },
    { name: 'Indiana', abbreviation: 'IN' },
    { name: 'Iowa', abbreviation: 'IA' },
    { name: 'Kansas', abbreviation: 'KS' },
    { name: 'Kentucky', abbreviation: 'KY' },
    { name: 'Louisiana', abbreviation: 'LA' },
    { name: 'Maine', abbreviation: 'ME' },
    { name: 'Maryland', abbreviation: 'MD' },
    { name: 'Massachusetts', abbreviation: 'MA' },
    { name: 'Michigan', abbreviation: 'MI' },
    { name: 'Minnesota', abbreviation: 'MN' },
    { name: 'Mississippi', abbreviation: 'MS' },
    { name: 'Missouri', abbreviation: 'MO' },
    { name: 'Montana', abbreviation: 'MT' },
    { name: 'Nebraska', abbreviation: 'NE' },
    { name: 'Nevada', abbreviation: 'NV' },
    { name: 'New Hampshire', abbreviation: 'NH' },
    { name: 'New Jersey', abbreviation: 'NJ' },
    { name: 'New Mexico', abbreviation: 'NM' },
    { name: 'New York', abbreviation: 'NY' },
    { name: 'North Carolina', abbreviation: 'NC' },
    { name: 'North Dakota', abbreviation: 'ND' },
    { name: 'Ohio', abbreviation: 'OH' },
    { name: 'Oklahoma', abbreviation: 'OK' },
    { name: 'Oregon', abbreviation: 'OR' },
    { name: 'Pennsylvania', abbreviation: 'PA' },
    { name: 'Rhode Island', abbreviation: 'RI' },
    { name: 'South Carolina', abbreviation: 'SC' },
    { name: 'South Dakota', abbreviation: 'SD' },
    { name: 'Tennessee', abbreviation: 'TN' },
    { name: 'Texas', abbreviation: 'TX' },
    { name: 'Utah', abbreviation: 'UT' },
    { name: 'Vermont', abbreviation: 'VT' },
    { name: 'Virginia', abbreviation: 'VA' },
    { name: 'Washington', abbreviation: 'WA' },
    { name: 'West Virginia', abbreviation: 'WV' },
    { name: 'Wisconsin', abbreviation: 'WI' },
    { name: 'Wyoming', abbreviation: 'WY' }
];


const FinishSignup = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        address1: '',
        address2: '',
        city: '',
        state: '',
        zipcode: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can perform form validation and submission here
    };

    return (
        <div className='container'>
            <div className='headers'>
                <div className='text'>Complete Your Profile</div>
            </div>
            <form className='inputs' onSubmit={handleSubmit}>
                <div className='input'>
                    <input
                        type='text'
                        name='fullName'
                        placeholder='Full Name: *'
                        value={formData.fullName}
                        onChange={handleInputChange}
                        maxLength={50}
                        required
                    />
                </div>
                <div className='input'>
                    <input
                        type='text'
                        name='address1'
                        placeholder='Address 1: *'
                        value={formData.address1}
                        onChange={handleInputChange}
                        maxLength={100}
                        required
                    />
                </div>
                <div className='input'>
                    <input
                        type='text'
                        name='address2'
                        placeholder='Address 2:'
                        value={formData.address2}
                        onChange={handleInputChange}
                        maxLength={100}
                    />
                </div>
                <div className='input'>
                    <input
                        type='text'
                        name='city'
                        placeholder='City: *'
                        value={formData.city}
                        onChange={handleInputChange}
                        maxLength={100}
                        required
                    />
                </div>
                <div className='input'>
                    <input
                        type='text'
                        name='zipcode'
                        placeholder='Zipcode: *'
                        value={formData.zipcode}
                        onChange={handleInputChange}
                        minLength={5}
                        maxLength={9}
                        required
                    />
                </div>
                <div className='button'>
                    <select
                        name='state'
                        value={formData.state}
                        onChange={handleInputChange}
                        required
                    >
                        <option value='' disabled>Select State</option>
                        {states.map((state) => (
                            <option key={state.abbreviation} value={state.abbreviation}> {state.name} ({state.abbreviation})</option>
                        ))}
                    </select>
                </div>
                <button type='submit'><Link to="/Dashboard" className="my-link">Submit</Link></button>
            </form>
        </div>
    );
};

export default FinishSignup;
