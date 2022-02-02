import React, { useState } from "react";
import Square from "./Square";
import swal from "sweetalert";
import sound from "./win.mp3";

const winSound = new Audio(sound);

const Board = (props) => {
  const [square, setSquare] = useState(Array(9).fill(null));
  const [X, setX] = useState(true);

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];

      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        winSound.play();
        return squares[a];
      }
    }
    return null;
  };
  var winner = calculateWinner(square);
  let status;
  if (winner) {
    status =
      "The Winner is " + (winner === "X" ? props.playerOne : props.playerTwo);
    swal({
      title:
        "Congrat " +
        (winner === "X" ? props.playerOne : props.playerTwo) +
        "🤯🥁",
      text: "Good Job you won the game",
      icon: "success",
      buttons: ["Restart the game", "Continue the round"],
      dangerMode: false,
    }).then((ok) => {
      if (ok) {
        reset();
      } else {
        reset();
      }
    });
  } else {
    status = "Turn of: " + (X ? props.playerOne : props.playerTwo);
  }

  const reset = () => {
    setSquare(Array(9).fill(null));
    winner = null;
    winSound.pause();
    winSound.currentTime = 0;
  };
  const renderSquare = (position) => {
    return (
      <Square
        value={square[position]}
        onClick={() => handleClick(position)}
        id={position}
      />
    );
  };

  const handleClick = (position) => {
    const squares = square.slice();
    if (squares[position] === null) {
      squares[position] = X
        ? (document.getElementById(position).style.color = props.playerOneColor)
        : (document.getElementById(position).style.color = props.playerTwoColor);
      squares[position] = X ? "X" : "O";
      setSquare(squares);
      setX(!X);
    } else {
      swal(
        "Oops 😶",
        "This case is already taken by the player: " +
          (squares[position] === "X" ? props.playerOne : props.playerTwo),
        "error"
      );
    }
  };

  return (
    <div className="board">
      <div className="board-row">{props.playerOne} = X</div>
      <div className="board-row">{props.playerTwo} = O</div>
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

      <h3 id="status">{status}</h3>
      <button
        style={{
          border: "none",
          padding: "10px",
          backgroundColor: "#caccc8",
          color: "red",
          borderRadius: "5px",
        }}
        onClick={() => reset()}
      >
        Restart
      </button>
    </div>
  );
};

export default Board;
