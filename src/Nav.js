import React from 'react'
import {  Link } from 'react-router-dom';

import Logo from "./images/logo.jpg"


function Navbar({logo}) {
  const handleNavClick = () => {
    // Close the navbar when a link is clicked
    const navbarToggler = document.querySelector('.navbar-toggler');
    if (navbarToggler.classList.contains('collapsed')) {
      // The collapsed class indicates that the navbar is already collapsed
      return;
    }

    const navbarContent = document.querySelector('#navbarContent');
    if (navbarContent.classList.contains('show')) {
      navbarToggler.click(); // Simulate a click to close the navbar
    }
  };

 
 
  return (
    <>
         <header>
          <nav    className="navbar navbar-expand-lg navbar-light bg-green fixed-top" >
            <div className="container-fluid">
        <Link to={"/"} onClick={handleNavClick}><img className="logo" src={Logo} /></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarContent"  >
        <ul className="navbar-nav ms-auto h5">
          <li className="nav-item"><Link to={"/"} className="nav-link " onClick={handleNavClick}>Home</Link></li>
          
          <li className="nav-item"><Link to={"/Product"} className="nav-link " onClick={handleNavClick}>Product</Link></li>
          <li className="nav-item"><Link to={"/contact"} className="nav-link " onClick={handleNavClick}>Contact</Link></li>
          
        
        
          
        </ul>
        </div>
        </div>
      </nav>
      </header>
    </>
  )
}

export default Navbar
