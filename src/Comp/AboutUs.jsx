import React from 'react';
import './AboutUs.css'; // Link to the CSS file for styling
import Navbar from './NavBar';
// import CompanyImage from './company.jpg'; // Import image for the company

const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <div className='aa-container'>
      <div className='image-class'></div>
      <div className="about-container">
        <h1>About Our Company</h1>
        <p>
          We are a leading provider of oil and fuel quotes, dedicated to providing our customers with the best prices and services in the industry. Our team is composed of experienced professionals who are committed to delivering excellence in every aspect of our business.
        </p>
        <p>
          Our mission is to simplify the process of obtaining oil and fuel quotes, making it easy and convenient for our customers to get the products they need at competitive prices. We strive to build long-lasting relationships with our customers, based on trust, reliability, and exceptional service.
        </p>
        <h2>Our Services</h2>
        <ul>
          <li>Oil and Fuel Price Quoting</li>
          <li>Delivery Scheduling</li>
          <li>Customer Support</li>
          <li>Customized Pricing Options</li>
        </ul>
        <p>
          Whether you are a small business looking for regular fuel deliveries or a large corporation in need of bulk oil supplies, we have the expertise and resources to meet your needs. Contact us today to learn more about our services and how we can help you save time and money on your oil and fuel purchases.
        </p>
      </div>
      </div>
    </div>
  );
};

export default AboutUs;
