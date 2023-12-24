import React, { useContext } from 'react'
import DataContext from './context/DataContext'
import { useState } from 'react'
import Form from './Form'


function Contact() {
 
  const {contactDetails}=useContext(DataContext)
 
   
  return (
    <>
        
      
        <div className="content">
          <div className="info">
          {contactDetails.map((data) => (
               
             
             <React.Fragment key={data.id}>
            <div className="information" >
              <img src={data.cimage} className="icon" alt="" />
              <div style={{fontFamily: 'PT Serif',color: 'black',fontSize: '20px',fontWeight: 'bold'}} dangerouslySetInnerHTML={{ __html: data.details }}>
               
              </div>
            </div>
            </React.Fragment>
            
          
                      ))}
          </div>
          </div>
          
           <div className='form-container' style={{backgroundColor:'whitesmoke'}}><br/>
           <h1 style={{textAlign:'center',fontFamily:'PT serif'}}>For any Queries</h1>
       <Form/>
       </div>
        <div className="map">
          <br/>
          <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3943.358018421373!2d77.68635557501558!3d8.752344891298351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOMKwNDUnMDguNCJOIDc3wrA0MScyMC4yIkU!5e0!3m2!1sen!2sin!4v1695542320907!5m2!1sen!2sin" width="100%" height="450" style={{border:'0'}} ></iframe>
    
        </div>
     
      
    </>
  )
}

export default Contact