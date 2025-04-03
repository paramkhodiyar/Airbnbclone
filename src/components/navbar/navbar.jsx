import React from "react";
import "./navbar.css";
import logo from "/logo.png"
import { FaSearch } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
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
                            <div className="input where">
                                <label>Where</label>
                                <input className="homes" placeholder="Search Destination"></input>
                            </div>
                            <div className="input in">
                                <label>Check-In</label>
                                <input className="dates" placeholder="Add Dates..."></input>
                            </div>
                            <div className="input out">
                                <label>Check-Out</label>
                                <input className="dates" placeholder="Add Dates..."></input>
                            </div>
                            <div className="inputguest">
                                <label>Who</label>
                                <input className="guests" placeholder="Add Guest..."></input>
                            </div>
                            <button className="searchbutton"><FaSearch color="white" /></button>
                        </div>
                    </div>
                </div>
                <div className="yourhome">
                    <p>Airbnb your home</p>
                    {/* <h6> 🌐 </h6> */}
                    <button className="userprofile"><FiMenu /><FaUserCircle style={{marginLeft:"5px"}}/></button>
                </div>
                
            </nav>
        </>
        
    );
}

export default Navbar;
