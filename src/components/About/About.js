import React from 'react';
import './About.scss';
import bus from '../../images/bus.png';
import notification from '../../images/notification.png';
import car from '../../images/car.png';
import arrow from '../../images/arrow.svg';

const About = () => {
    return (
        <div className="container about-area">
            <h2>Why you choose us</h2>
            <div className="col-md-6">
                <p>Barton waited twenty always repair in within we do. An delighted offending curiosity my is dashwoods at. Boy prosperous increasing surrounded.</p>
            </div>
            <div className="row about">
                <div className="col-md-4 content">
                    <img src="https://i.ibb.co/pKqtsT6/adult-blur-blurred-background-687824.png" alt="fat" />
                    <div className="intro">
                        <div className="small-img">
                            <img src={bus} alt="bus" />
                        </div>
                        <div className="details">
                            <h6>Fast Delivery</h6>
                            <p>Keep your systems in sync with automated web hook based notifications each time link is paid and how we dream about our future.</p>
                            <p className="seeBtn">See more<img src={arrow} alt="arrow" /></p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 content">
                    <img src="https://i.ibb.co/LZNSBXZ/chef-cook-food-33614.png" alt="chef" />
                    <div className="intro">
                        <div className="small-img mid-img">
                            <img src={notification} alt="notification" />
                        </div>
                        <div className="details">
                            <h6>A Good Auto Responder</h6>
                            <p>Keep your systems in sync with automated web hook based notifications each time link is paid and how we dream about our future.</p>
                            <p className="seeBtn midBtn">See more<img src={arrow} alt="arrow" /></p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 content">
                    <img src="https://i.ibb.co/wMYMkpf/architecture-building-city-2047397.png" alt="buliding" />
                    <div className="intro">
                        <div className="small-img">
                            <img src={car} alt="car" />
                        </div>
                        <div className="details">
                            <h6>Home Delivery</h6>
                            <p>Keep your systems in sync with automated web hook based notifications each time link is paid and how we dream about our future.</p>
                            <p className="seeBtn">See more<img src={arrow} alt="arrow" /></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;