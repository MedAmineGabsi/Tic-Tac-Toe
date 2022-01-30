import React, { useState } from "react";
import Square from "./Square";

const Board = () => {
  const [square, setSquare] = useState(Array(9).fill(null));
  const [X, setX] = useState(true);

  const renderSquare = (position) => {
    return (
      <Square value={square[position]} onClick={() => handleClick(position)} />
    );
  };

  const handleClick = (position) => {
    const squares = square.slice();

    squares[position] = X ? "X" : "O";
    setSquare(squares);
    setX(!X);
  };
  return (
    <div className="board">
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;
