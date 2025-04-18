import React from "react";
import "./card.css"
import hotels from "./hotels.json";
import { IoHeartSharp } from "react-icons/io5";

function Cards() {

    return (
        <div className="cardcontainer">
            {hotels.listings.map((hotel, index) => (
               <div className="card-wrapper">
               <div key={index} className="card">
                 <div className="imgbdgeholder">
                   <img
                     src={hotel.image_src}
                     alt={hotel.hotel_name}
                     className="hotel-image"
                   />
                   <div className="guestfav">
                        Guest Fav : 
                     <IoHeartSharp
                       className="heart-icon"
                       style={{
                         color: hotel.guest_favorite ? "#ff385c" : "white",
                       }}
                     />
                   </div>
                 </div>
                 <h3>{hotel.hotel_name}</h3>
                 <p>{hotel.date_available}</p>
                 <p className="price"><span>₹{hotel.price}</span> per nigh</p>
               </div>
             </div>
             
            ))}
        </div>
    );
}

export default Cards;