import React from 'react';
import './Footer.scss';
import footerlogo from '../../images/footerlogo.png';

const Footer = () => {
    return (
        <div className="container-fluid footer">
            <div className="row footer-items">
                <div className="col-md-6">
                    <img src={footerlogo} alt="logo" />
                </div>
                <div className="col-md-3">
                    <p>About Online Food</p>
                    <p>Read our blog</p>
                    <p>Sign up to deliver</p>
                    <p>Add your restaurant</p>
                </div>
                <div className="col-md-3">
                    <p>Get help</p>
                    <p>Read FAQs</p>
                    <p>View all cities</p>
                    <p>Restaurants near me</p>
                </div>
            </div>
            <div className="row footer-end">
                <div className="col-md-6">
                    <p className="copy">Copyright &copy; 2021 Onlilne Food</p>
                </div>
                <div className="col-md-2">
                    <p>Privacy Policy</p>
                </div>
                <div className="col-md-2">
                    <p>Terms of Use</p>
                </div>
                <div className="col-md-2">
                    <p>Pricing</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;