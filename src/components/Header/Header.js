import React from 'react';
import navlogo from '../../images/navlogo.png';
import carticon from '../../images/shopping-cart.svg';
import './Header.scss';

const Header = () => {
    return (
        <header>
            <nav className="navbar">
                <a className="navbar-brand" href="default">
                    <img id="navlogo" src={navlogo} alt="navlogo" />
                </a>
                <div id="nav-toggle">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <form className="form-inline my-2 my-lg-0" id="navForm">
                    <a id="cartBtn" href="default"><img src={carticon} alt="cartiocn" /></a>
                    <input className="btn" type="submit" value="Login" id="loginBtn" />
                    <input className="btn" type="submit" value="Sign up" id="signupBtn" />
                </form>
            </nav>
            <div className="search-area">
                <div className="search-bar col-md-6 mx-auto">
                    <h1 className="text-center">Best food waiting for your belly</h1>
                    <div className="search-box my-5">
                        <input type="search" className="form-control" autoComplete="off" placeholder="Search food items" />
                        <button className="btn search-btn">Search</button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;