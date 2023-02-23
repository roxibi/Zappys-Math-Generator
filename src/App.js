
import React, {useState} from 'react';
import Randomnum from './components/Randomnum';
import './App.css';

function App (){

  return (
    <div className="App">
       {/* <button placeholder='Set first number' type='number' onClick={nums}>generate two numbers</button>
               
               <select onChange={(e) => setSign(e.target.value)}>
                   <option value='+'>+</option>
                   <option value='*'>*</option>
                 
               </select> */}
     <Randomnum />
    
    </div>
  );
}

export default App;
