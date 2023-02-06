function RandomColorBoxes(props){
  const { randomColors, checkAnswer } = props;

  return (
    <div className="boxes">
      {randomColors.map((color) => {
        return  (
          <div
            key={color}
            style={{ backgroundColor: color }}
            onClick={() => checkAnswer(color)}
          />
        )
      })}
    </div>
  )
}

export default RandomColorBoxes;
