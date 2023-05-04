import { useState } from 'react'
import './App.css'

function App() { const [count, setCount] = useState(0); const [points, setPoints] = useState(0);

  const increment = () => { if (count < 10) { setCount((prev) => prev + 1); } if (count === 10) { setPoints((prev) => prev + 10); setCount(0); 
    setPoints(prev => prev + 0) } 
  };

  const decrement = () => { 
    if (count > 0) { setCount((prev) => prev - 1); 
    } };
  
  return ( <> 

  <div className='container'> 
    <button className="btn" onClick={increment}> Submit </button> 
  <button className="btn" onClick={decrement}> Teskari Submit </button>
  </div>

  <div className='count'>
    <button>{count}</button>
    <button>{points}</button>
   
   </div>
    
    
  
 
  </>
  ); }
  
  export default App;