const Square = (props) => {
  // console.log(props.squares, props.player);
  

  const handleClick = () => {
    console.log('handling click')
    if (!props.squareValue) {
      if(props.player){
        props.squares.splice(props.index, 1 , 'X')
        props.setPlayer(!props.player)
      }else {
        props.squares.splice(props.index, 1, 'O')
        props.setPlayer(!props.player)
      }
    };
  }

  return <div className="square" onClick={handleClick}>
    {props.SquareValue === 'O'? 'O': props.squareValue}
    
  </div>;
};


export default Square;
