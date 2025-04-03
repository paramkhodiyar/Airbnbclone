import React from "react";
import "./navbar.css";
import logo from "../../../public/logo.png"

function Navbar() {
    return (
        <>
            <nav className="navbar" aria-label="Main Navigation">
                <span>
                    <img src={logo} alt="Airbnb Icon"></img>
                    <h2 className="logo">airbnb</h2>
                </span>
                <div className="pages">
                    <ul>
                        <li><a href="#">Homes</a></li>
                        <li><a href="#">Experience</a></li>
                    </ul>
                </div>
                
                <div className="searchfunction">
                    <div className="searchContainer">
                        <div className="searchbox">
                            <input className="homes" placeholder="Search..."></input>
                            <input className="dates" placeholder="Check-In Dates..."></input>
                            <input className="dates" placeholder="Check-Out Dates..."></input>
                            <input className="guests" placeholder="No. Of Guests..."></input>
                            <button class="btn-search"><i class="fas fa-search">Hello</i></button>
                        </div>
                    </div>
                </div>
                <div className="yourhome">
                    <p>Airbnb your home</p>
                </div>
                
            </nav>
        </>
        
    );
}

export default Navbar;
