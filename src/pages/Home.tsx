import { Component } from 'react'
import React from 'react'
import Dj from './img/dj.jpg'
  import 'bootstrap/dist/css/bootstrap.css';
  import 'bootstrap/dist/js/bootstrap.bundle.js'
  

  function Home(){
    return(
      <div>
        <h2> Üdvözöllek DJ Petrik weboldalán!</h2>
        <br />
        <h2> Üdvözöllek DJ Petrik weboldalán!</h2>
         <p>
          <br />
          Válassz a fenti lehetőségek közül!</p>
          <img src={ Dj } alt="Fotó a főnökről" className='boss'/>
      </div>
    );
  }
  
  export default Home;
