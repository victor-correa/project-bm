import React from "react";
import logo192 from "./logo192.png";


const PlanosTeste = () => {
  return (
    <div>
    
    <section className="planos">
    

    <div className="containerp">
    <div className="box-plano1">
    <img className="img-plano1" alt="" src={logo192}></img>
    <h1>Projeto 1</h1>
    <span>Descrição do plano 1</span>
    </div>
    
    
    <div className="box-plano2">
    <img className="img-plano2" alt="" src={logo192}></img>
    <h1>Projeto 2</h1>
    <span>Descrição do plano 2</span>
    </div>
    
    
    <div className="box-plano3">
    <img className="img-plano3" alt="" src={logo192}></img>
    <h1>Projeto 3</h1>
    <span>Descrição do projeto 3</span>
    </div>
    
    </div>


    </section>
    
    </div>
  );
};






export default PlanosTeste;
