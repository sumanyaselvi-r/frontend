import React from 'react'
import { Link } from 'react-router-dom';
import About from './About';
import Footer from './Footer';
import Logo from "./images/Test.png"
import Hcontact from './Hcontact';
import bgVideo from './video/wheat.mp4';

function Home() {
  return (
    <>
    
         <section className="banner">
      
        <div className="content">
        <img src={Logo}/ >
       
       
        <h5 style={{fontWeight:"bolder"}}>Galaxy Bio Tech</h5>
        <p>"Fertilizing Tomorrow's Harvests Today."</p><br/><br/><br/><br/><br/><br/>
     
        <video className="back-video"  loop muted playsInline autoPlay >
          <source src={bgVideo} type="video/mp4"/>
        </video>

         </div></section>
         <About/>
         <Hcontact/>
       
    
</>
   
  );
}

export default Home
