import { useState } from "react";
import "./App.css";
import Square from "./components/Square";

function App() {
  const [squares, setSquares] = useState(['','','','','','','','',''])
  const [player, setPlayer] = useState(true)
  return (
    <div>
      <Square 
        squares={squares}
        setSquares={setSquares}
        player={player}
        setPlayer={setPlayer}
      ></Square>
    </div>
  );
}

export default App;
