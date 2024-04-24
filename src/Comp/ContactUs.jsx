import React from 'react';
import './ContactUs.css';
import Navbar from './NavBar';

const ContactUs = () => {
    return (
        <div>
            <Navbar />
            <div className='cc-container'>
            <div className='contact-container'> {/* Corrected class name */}
                <h1>Contact Us</h1>
                <div className="contact-card">
                    <h2>Khoi Vo</h2>
                    <p>Email: <a href="mailto:john.doe@example.com">john.doe@example.com</a></p>
                    <p>Phone: <a href="tel:+12345678901">+1 234-567-8901</a></p>
                </div>
                <div className="contact-card">
                    <h2>Christopher Do</h2>
                    <p>Email: <a href="mailto:jane.smith@example.com">jane.smith@example.com</a></p>
                    <p>Phone: <a href="tel:+12345678902">+1 234-567-8902</a></p>
                </div>
                <div className="contact-card">
                    <h2>Riches Dang</h2>
                    <p>Email: <a href="mailto:jane.smith@example.com">richesdang@gmail.com</a></p>
                    <p>Phone: <a href="tel:+12345678902">+1 713-851-7114</a></p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default ContactUs;
