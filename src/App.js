import Square from "./components/Square";
import {useState} from 'react'

function App() {
  let item = "This is my new prop!";
  return (
    <div>
      <Square propVar={item}></Square>
    </div>
  );
}

export default App;
