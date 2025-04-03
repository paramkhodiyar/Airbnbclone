import React from "react";
import "./filters.css"; 
import { FaMountain, FaSwimmingPool, FaTree, FaHome, FaUmbrellaBeach, FaHotel, FaFortAwesome } from "react-icons/fa"; 
import { MdOutlineTune } from "react-icons/md";
import { MdNavigateNext } from "react-icons/md";

const filters = [
  { id: 1, icon: <FaMountain />, label: "Amazing views" },
  { id: 2, icon: <FaHotel />, label: "Icons" },
  { id: 3, icon: <FaHome />, label: "Rooms" },
  { id: 4, icon: <FaFortAwesome />, label: "Historical homes" },
  { id: 5, icon: <FaHotel />, label: "Mansions" },
  { id: 6, icon: <FaSwimmingPool />, label: "Amazing pools" },
  { id: 7, icon: <FaTree />, label: "Farms" },
  { id: 8, icon: <FaUmbrellaBeach />, label: "Beach" },
  { id: 9, icon: <FaTree />, label: "Treehouses" },
];

const Filter = () => {
  return (
    <div className="filtercontainer">
      {filters.map((filter) => (
        <div key={filter.id} className="filteritem">
          <span className="filtericon" >{filter.icon}</span>
          <span className="filterlabel">{filter.label}</span>
        </div>
      ))}
      <button className="nextbutton"><MdNavigateNext className="iconstyle" style={{display:"flex", justifyContent:"center", alignItems:"center"}}/></button>
      <button className="filterbutton"><MdOutlineTune  style={{display:"flex", justifyContent:"center", alignItems:"center", width:"auto", marginRight:"5px"}}/>   Filter</button>
    </div>
  );
};

export default Filter;
