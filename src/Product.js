import React, { useContext } from 'react'

import DataContext from './context/DataContext'

function Product() {
  const {product}=useContext(DataContext)
  return (
    <>
    
    {product.map((card) => (
                
             <React.Fragment key={card.id}>
      <div className="box">
            <img src={card.image}/>
            <div className="overlay">
              <h1>{card.title}</h1>
            
              <p>{card.description}</p>
              
            </div>
          </div>
          </React.Fragment>

            ))}

         
          
    </>
  )
}

export default Product