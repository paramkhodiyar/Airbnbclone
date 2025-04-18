import React from "react";
import { useState } from "react";
import "./navbar.css";
import logo from "/logo.png"
import { FaSearch, FaCalendar } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import { BsSuitcase2Fill } from "react-icons/bs";
function Navbar() {
    const [inputText, setInputText] = useState('');
    const handleInputChange = (e) => {
        setInputText(e.target.value);
    };
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
                        <div className="searchbox desktop-search">
                            <div className="input where">
                                <label><FaSearch style={{ fontSize: "13px", marginRight: "5px" }} />Where</label>
                                <input className="homes" placeholder="Search Destination" onChange={handleInputChange}></input>
                            </div>
                            <div className="input in">
                                <label><FaCalendar style={{ fontSize: "13px", marginRight: "5px" }} />Check-In</label>
                                <input className="dates" placeholder="Add Dates..."></input>
                            </div>
                            <div className="input out">
                                <label><FaCalendar style={{ fontSize: "13px", marginRight: "5px" }} />Check-Out</label>
                                <input className="dates" placeholder="Add Dates..."></input>
                            </div>
                            <div className="inputguest">
                                <label><BsSuitcase2Fill style={{ fontSize: "13px", marginRight: "5px" }} />Who</label>
                                <input className="guests" placeholder="Add Guest..."></input>
                            </div>
                            <button className="searchbutton"><FaSearch color="white" /></button>
                        </div>
                        <div className="searchbox mobile-search">
                            <FaSearch color="black" style={{ marginRight: "10px" }} />
                            <span className="search-placeholder">Search Places...</span>
                        </div>
                    </div>
                </div>
                <div className="yourhome">
                    <p>Airbnb your home</p>
                    {/* <h6> 🌐 </h6> */}
                    <button className="userprofile"><FiMenu /><FaUserCircle style={{ marginLeft: "5px" }} /></button>
                </div>

            </nav>
        </>

    );
}

export default Navbar;
