import React from "react";
import styled from "styled-components";
import Input from "./Input";
import  "./styles/main.css";
import logo from "../assets/logo.svg";
import logoimg from "../assets/logoimg.png"

//<img src={logo}></img>

export const Navbar = () => {
  return (
  <div>
  
  <div className="logoimg">
  <a href= "#"><img className="logoimg" src={logoimg} alt="" /></a>
  </div>
  
  <div className="containernavbar">
  <nav className="navbar">
  <ul>
  
  <li><a href= "#">Início</a></li> 
  <li><a href="#">Sobre</a></li>
  <li><a href="#">Portfólio</a></li>
  <li><a href="#">Planos</a></li>
  <li><a href="#">Contato</a></li>
  </ul>
  
  </nav>
  
  </div>
  </div>
  )
}




export default Navbar;