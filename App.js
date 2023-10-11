import './App.css';
import React from 'react';
import Home from './pages/home/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Fotos from './pages/Fotos/fotos';
import Contato from './pages/Contato/Contato';
import Comentarios from './pages/comentarios/comentarios';

function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path = '/' element = {<Home/>}/>
        <Route path = '/fotos' element = {<Fotos/>}/>
        <Route path = '/contato' element = {<Contato/>}/>
        <Route path = '/comentarios' element = {<Comentarios/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;