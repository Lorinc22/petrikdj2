import ReactDOM from 'react-dom';
import React from 'react'
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import IdopontFoglalas from './pages/Idopontfoglalas';
import SzakmaiTapasztalat from './pages/SzakmaiTapasztalat';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path='tapasztalat' element={<SzakmaiTapasztalat/>}/>
          <Route path='idopont' element={<IdopontFoglalas/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
