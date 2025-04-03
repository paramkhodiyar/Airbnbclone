import React from "react";
import "./navbar.css";
import logo from "/logo.png"
import { FaSearch } from "react-icons/fa";
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
                            <div className="input">
                                <label>Where</label>
                                <input className="homes" placeholder="Search Destination"></input>
                            </div>
                            <div className="input">
                                <label>Check-In</label>
                                <input className="dates" placeholder="Add Dates..."></input>
                            </div>
                            <div className="input">
                                <label>Check-Out</label>
                                <input className="dates" placeholder="Add Dates..."></input>
                            </div>
                            <div className="inputguest">
                                <label>Who</label>
                                <input className="guests" placeholder="Add Guest..."></input>
                            </div>
                            <button className="searchbutton"><FaSearch /></button>
                        </div>
                    </div>
                </div>
                <div className="yourhome">
                    <p>Airbnb your home</p>
                    {/* <h6> 🌐 </h6> */}
                </div>
                
            </nav>
        </>
        
    );
}

export default Navbar;
