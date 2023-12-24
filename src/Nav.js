import React from 'react'
import {  Link } from 'react-router-dom';
import Logo from "./images/logo.jpg"


function Navbar({logo}) {

 
 
  return (
    <>
         <header>
          <nav   className="navbar navbar-expand-lg navbar-light bg-green p-2 fixed-top" >
            <div className="container-fluid">
        <Link to={"/"}><img className="logo" src={Logo} /></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarContent"  >
        <ul className="navbar-nav ms-auto h5">
          <li className="nav-item"><Link to={"/"} className="nav-link ">Home</Link></li>
          
          <li className="nav-item"><Link to={"/Product"} className="nav-link ">Product</Link></li>
          <li className="nav-item"><Link to={"/contact"} className="nav-link ">Contact</Link></li>
          
        
        
          
        </ul>
        </div>
        </div>
      </nav>
      </header>
    </>
  )
}

export default Navbar