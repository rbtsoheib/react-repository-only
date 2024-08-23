// import logo from './logo.svg';
// import './App.css';

import React, { useState } from 'react' ;
import randomColor from 'randomcolor' ;


function App() {

  const [click, setClick] = useState (0) ; 
  const [number, thisNumber] = useState (0) ; 
  const [color, changeColor] = useState ("");
  
  return (

    <><div>

      <p> you clicked me {click} times </p>

      <button onClick={() => setClick(click + 1)}> click me </button>


    </div><div>

        <p> and you clicked me {number} times !</p>
        <button onClick={() => thisNumber(number + 1)}> click me too</button>

      </div>
      
      <div className='app'>
        <h1 style={{ color }}> changing colors</h1>
        <button onClick={() => changeColor(randomColor())}>clikc me hehe </button>
      </div>

      </>
  )


}

export default App;


