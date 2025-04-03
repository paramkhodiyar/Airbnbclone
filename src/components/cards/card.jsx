import React from "react";
import "./card.css"
import hotels from "./hotels.json";

function Cards(){

    return (
        <div className="cardcontainer">
            {hotels.listings.map((hotel, index) => (
                <div key={index} className="card">
                    <img src={hotel.image_src} alt={hotel.hotel_name} />
                    <h3>{hotel.hotel_name}</h3>
                    <p>Guest Favorite: {hotel.guest_favorite ? "Yes" : "No"}</p>
                    <p>{hotel.date_available}</p>
                    <p>₹{hotel.price} per night</p>
                </div>
            ))}
        </div>
    );
}

export default Cards;