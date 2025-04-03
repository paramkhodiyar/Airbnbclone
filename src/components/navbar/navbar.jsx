import React from "react";
import "./navbar.css";

function Navbar() {
    return (
        <>
            <nav className="navbar" aria-label="Main Navigation">
                <span>
                    <img src="/logo.png" alt="Airbnb Icon"></img>
                    <h2 className="logo">AirBnb</h2>
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
                            <input className="dates" placeholder="Dates..."></input>
                            <input className="guests" placeholder="No. Of Guests..."></input>
                            <button class="btn-search"><i class="fas fa-search">Hello</i></button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
        
    );
}

export default Navbar;
