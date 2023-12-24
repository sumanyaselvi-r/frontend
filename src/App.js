import React from 'react';
import './App.css';
import Navbar from "./Nav"
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Product from './Product';
import Contact from './Contact';
import Footer from './Footer';
import { DataProvider } from './context/DataContext';


function App() {



 
  return (
    <>
    <DataProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product' element={ 
          <>
            <h2 style={{textalign:"center", paddingtop:"80px"}}>Our Product</h2>
           <div id="card">
      <div className="wrapper">
        <div  className="box-area">
       <Product/>

        </div>
        </div>
        </div>
        </>
        }/>
        <Route path='/contact' element={<>
        <section className="csection">
        <div className="cbg">
          <h2>Contact Us</h2>
        </div>


        <Contact/>
        </section>
        </>
        }/>
        

      
      </Routes>
      <Footer/>
    

    
      </DataProvider>
      
    </>
  );
}

export default App;
