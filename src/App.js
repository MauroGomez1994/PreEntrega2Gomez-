import React from 'react';
import NavBar from './Components/NavBar/NavBar';

import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    
    <div className='App'>
      <BrowserRouter>
      <NavBar />
      
      
      
      <h1>Bienvenido a nuestra tienda online</h1>
      <p>¡Explora nuestros productos y realiza tus compras!</p>

      <hr />

     
      
    </BrowserRouter>
    </div>

    
  );
};

export default App;


