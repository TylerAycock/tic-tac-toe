const Square = (props) => {
  console.log(props.squares, props.player);

  const handleClick = () => {
    if (!props.squareValue) {
    }
  };

  return <div onClick={handleClick}></div>;
};

export default Square;
