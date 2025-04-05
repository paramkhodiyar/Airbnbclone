import React from 'react';
import './map.css'; 
import { FaMap } from 'react-icons/fa';
function MapButton({ onClick }) {
  return (
    <div className="mapcontainer">
      <button className="mapbutton" onClick={onClick}>
        Show map
        <FaMap className="mapicon" />
      </button>
    </div>
  );
}
export default MapButton;