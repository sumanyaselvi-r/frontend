import React from 'react'
import { Link } from 'react-router-dom'
import { FaMapMarkerAlt,FaPhoneAlt ,FaLinkedin,FaInstagram,FaTwitter } from "react-icons/fa";



function Footer() {
  return (
    <>
       
 <div className="footer-distributed">

    <div className="footer-left">
        
      <h3 style={{fontFamily: 'PT Serif', color:'white'}}>Galaxy Bio Tech</h3>
  
      <p className="footer-links">
        <Link to={"/"}>Home</Link>
        |
       
        
        <Link to={"/product"}>Product</Link>
        |
        <Link to={"/contact"}>Contact</Link>
      </p>
  
      <p className="footer-company-name" style={{color:'white', fontSize:'12px'}}>COPYRIGHT © 2023 GALAXYBIOTECH - ALL RIGHTS RESERVED.</p>
    </div>
  
    <div className="footer-center">
      <div>
      <a href="https://www.google.com/maps/place/8%C2%B045'08.4%22N+77%C2%B041'20.2%22E/@8.752018,77.685888,17z/data=!4m4!3m3!8m2!3d8.7523333!4d77.6889444?hl=en&entry=ttu"  target='_blank'  style={{color:'black'}}><FaMapMarkerAlt style={{fontSize:'xx-large'}}  /></a>&nbsp;&nbsp;
          <p style={{fontFamily: 'PT Serif'}}>GALAXY BIO TECH,<br/>
            10/10H2,Sankarankoil Main Road,<br/>
            Ramayanpatti,Sankumuttammalpuram<br/>
          Tirunelveli,Tamilnadu-627358.<br/>
           
           </p>
      </div>
  
      <div><br/>
      
      <FaPhoneAlt style={{fontSize:'x-large'}}  />&nbsp;&nbsp;
        <p>
          1800 890 1275</p>
      </div>
      
    </div>
    <div className="footer-right">
      <p className="footer-company-about">
        <span>follow us</span>
        
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none',color:'black'}}>   <FaTwitter style={{fontSize:'x-large'}}  /></a>&nbsp;
        <a href="https://www.linkedin.com/company/galaxybiotech" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none',color:'black'}}>     <FaLinkedin style={{fontSize:'x-large'}}  /></a>&nbsp;
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none',color:'black'}}>    <FaInstagram style={{fontSize:'x-large'}} /></a> &nbsp;
        
      </p>
      
    </div>
    </div>
  
  
    </>
  )
}

export default Footer
