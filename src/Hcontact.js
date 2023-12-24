import React, { useContext } from 'react'
import hpro from "./images/pb.jpg"
import DataContext from './context/DataContext'

function Hcontact() {
    const { contactDetails } = useContext(DataContext)
    const styles={
        textalign: 'center',
    color:'rgb(7, 74, 7)',
   
    fontsize:'190px',
    marginbottom:'20px',
    fontfamily:'PT Serif',
    padding: '5px',
    fontweight:'bold'
    }
    return (
        <>
            <div className="section3">
                <br /><br />
                <h1>Our Products</h1>
                <img src={hpro} width="100%" />
        
            <br /><br /><br />
            <h1>Contact Us</h1>
            </div>
            <section className="section4">
                {contactDetails.map((data) => (
                    
                <React.Fragment key={data.id}>
                    <div className="icons">
                        <img src={data.cimage} className="icon" alt="" />
                        <div className="info">

                            <div style={{ fontFamily: 'PT Serif', color: 'black', fontSize: '17px', fontWeight: 'bold' }} dangerouslySetInnerHTML={{ __html: data.details }}>

                            </div>
                        </div>
                    </div>
                    </React.Fragment>
                    

                ))}






            </section>
        </>
    )
}

export default Hcontact