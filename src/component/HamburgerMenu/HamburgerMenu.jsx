import "./HamburgerMenu.css";

import React, { Component, useEffect } from 'react';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import PolitiqueDeConfidentialité from "../RGPD/PolitiqueDeConfidentialité";

import {Twirl as Hamburger }from "hamburger-react";

import { useState } from "react";
import { useRef } from "react";





{/*class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: <a href="#" id="openBtn" className="actions">
        <span class="burger-icon">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </a>
    }
  }

  updateContent = () => {
    this.setState({
      message: <div>
        <h1>hello</h1>
        <button >x</button>
      </div>
    });
  }

  render() {
    return (
      <div>
        <div onClick={this.updateContent}>
          {this.state.message}
        </div>
      </div>
    );
  }
}}

--------------------------------

 const [isOpen, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleOpen}>Open</Button>
      <Button onClick={handleClose}>Close</Button>

      {isOpen && <div>Content</div>}
    </div>
  );
};

const Button = ({ onClick, children }) => {
  return (
    <button type="button" onClick={onClick}>
      {children}
    </button>
  );

*/ }


function HamburgerMenu() {

  const [isOpen, setOpen] = useState(false);

  



  return (
    <div className="hamburgerMenu">
      <Hamburger  color="black"  toggled={isOpen} toggle={setOpen} />
      {isOpen && 
        <div className="hamburgerMenuOpen">
        <ul  className="hamburgerList"> <br /> <br />        
            <li className="blop">
              <a className="menuActionLink" href="#A-propos">A propos</a>
            </li>
            <li>
              <a className="menuActionLink" href="#Mes-Services">Mes services</a>
            </li>
            <li>
              <a  className="menuActionLink" href="#Projets">Projets</a>
            </li>
            <li>
              <a className="menuActionLink" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      }
        </div>
  )
}




export default HamburgerMenu;






