import React from "react";
import logo from "../assets/logoimg.png"
import Hometext from "./Hometext";

const Header = () => {
  return (
    
    <div>
    <div className="headerwrapper">
      <div className= "header">
        <div className="logo-box">
          <img className="logo" src={logo} alt="" />
        </div>
      </div>
    
      <Hometext />
    </div>
      </div>
    );
};



export default Header;
