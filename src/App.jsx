import { useState } from "react";

function App() {
  //let Counter = 0;
  const [Counter, setCounter] = useState(0)

  return (
   <div>
    <h3>Counter</h3>
    <hr/>
    <h1>{Counter}</h1>
    <button
    onClick={()=> {
      setCounter(Counter +1);
      console.log(Counter)
    }} 
    type="button" 
    className="btn btn-primary"
    >+1</button>


<button
    onClick={()=> {
      setCounter(Counter -1);
      console.log(Counter)
    }} 
    type="button" 
    className="btn btn-warning"
    >-1</button>


<button
    onClick={()=> {
      setCounter(0);
      console.log(0)
    }} 
    type="button" 
    className="btn btn-danger"
    >0</button>
  </div> 
  )

  
}

export default App
