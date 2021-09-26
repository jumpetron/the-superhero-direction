import logo from '../../logo.png'
import React from 'react';
import image from '../../Images/doctor.png'
import '../Header/Header.css'

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container header">
                    <img src={logo} alt="" />
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/team">Team</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/About-us">About us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/contact us">Contact us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div>
                <div className="hero-section">
                    <div className="hero-heading">
                    <h1>Frontline Army</h1>
                    <p>The city is infected with contagious disease <br/> and we have to fight with it.</p>
                    <p className="btn">Total Budget : $100 Million</p>
                    </div>
                    <div className="hero-img">
                    <img src={image} alt="doctor" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;