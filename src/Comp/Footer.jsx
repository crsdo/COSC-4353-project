import React from 'react';
import './Footer.css'; // Import CSS file for styling

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <h4>Site Map</h4>
                        <ul className="list-unstyled">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Products</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h4>Company</h4>
                        <ul className="list-unstyled">
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Press</a></li>
                            <li><a href="#">Investor Relations</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h4>Community</h4>
                        <ul className="list-unstyled">
                            <li><a href="#">For Developers</a></li>
                            <li><a href="#">For Merchants</a></li>
                            <li><a href="#">For Partners</a></li>
                            <li><a href="#">For Charities</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h4>Legal</h4>
                        <ul className="list-unstyled">
                            <li><a href="#">Privacy</a></li>
                            <li><a href="#">Legal Agreements</a></li>
                            <li><a href="#">User Agreement</a></li>
                            <li><a href="#">Cookies</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <p className="text-center">© {new Date().getFullYear()} Your Company. All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
