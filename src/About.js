import React from 'react'
import { Link } from 'react-router-dom'

import aboutimg from "./images/im7.jpg"
import aboutimg2 from "./images/im9.jpg"
function About() {
  const style1 = {
    backgroundImage: `url(${aboutimg})`,
 
   
  };
  const style2 = {
    backgroundImage: `url(${aboutimg2})`,
 
   
  };
  return (
    <>
             <div className="section-container" id="sec-2" >
    <div className="columns image" style={style1} >
       &nbsp;
    </div>
    <div className="columns content" >
       <div className="content-container" >
         
          <h5>Our Company</h5>
         
          <p>
          
Founded in 2010, Galaxy BioTech has emerged as a trusted leader in the field of agricultural biotechnology. We are driven by a passionate team of scientists, agronomists, and agricultural experts who are dedicated to creating products that address the challenges faced by farmers around the world.

          </p>
          
          <h2><Link to={'/about'} style={{textDecoration: "none"}}> </Link></h2>
       </div>
    </div>
 </div>
<section className="section-container" style={{backgroundColor: "bisque"}}>
  <div className="columns content" >
    <div className="content-container" >
      
  <p style={{paddingTop: "50px",textAlign:"justify"}}>At Galaxy BioTech, we're on a mission to revolutionize agriculture by providing innovative and sustainable fertilizer solutions that empower farmers to grow healthier crops, increase yields, and protect our planet. With a deep commitment to science, sustainability, and the well-being of our global community, we've been at the forefront of agricultural innovation for years.
  </p>
  </div>
  </div>
  <div className="columns image" style={style2} >
    &nbsp;
 </div>
</section>

    </>
  )
}

export default About