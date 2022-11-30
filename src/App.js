import logo from './logo.svg';
import './App.css';
import Textform from './Components/Textform';
import About from './Components/About';
import Navbar from './Components/Navbar';
import { useState } from 'react';
import React from 'react'
import {Routes, Route, BrowserRouter} from "react-router-dom";



function App() {

  const  [preBg, secBg]=useState('light')
  function changeMode(){
    if(preBg==='light'){
      secBg('dark')
      document.body.style.backgroundColor = '#3c1d5d'
    }else{secBg('light')
    document.body.style.backgroundColor='white'
    

  }
  };

  return (
   <>
   <BrowserRouter>
   <Navbar preBg={preBg} changeMode={changeMode} />
   <Routes>
   <Route exact path="/home" element={
          <div className="container">
   <Textform preBg={preBg} heading="Enter text to Analyze"/>
  </div> }/>
     
          <Route exact path="/About" element={<About preBg={preBg}/>}/>
   </Routes>
   </BrowserRouter>
   
</>
   
  );
}

export default App;
