import { useState } from "react";
import "./App.css";
import Square from "./Square";

function App() {
  const [squares, setSquares] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState(true);

  const handleClick = (square) => {
    setSquares(["", "", "", "", "", "", "", "", '']);
    setPlayer(true);
  };
  return (
    <div className="App">
      <button onClick={handleClick}>Reset</button>
      <div className="container">
        {squares.map((val, index) => {
          // console.log('sending', <Square/>)
          return (
            <Square
              squares={squares}
              setSquares={setSquares}
              player={player}
              setPlayer={setPlayer}
              squareValue={val}
              index={index}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
