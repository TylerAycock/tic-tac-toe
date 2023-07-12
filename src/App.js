import { useState } from "react";
import "./App.css";
import Square from "./components/Square";

function App() {
  const [squares, setSquares] = useState(['','','','','','','','',''])
  const [player, setPlayer] = useState(true)
  return (
    <div className="app" >
      <div className="container" >
        {squares.map((val, index)=>{
          return <Square
          squares={squares}
          setSquares={setSquares}
          player={player}
          setPlayer={setPlayer}
          squareValue={val}
          index = {index}
          />
        })}
      </div>
    </div>
  );
}

export default App;
