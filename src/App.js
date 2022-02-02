import React, { useState } from "react";
import Board from "./components/Board";

const App = () => {
  const [inGame, setInGame] = useState(false);

  const [playerOne, setPlayerOne] = useState("");
  const [playerTwo, setPlayerTwo] = useState("");
  const [colorOne, setColorOne] = useState("#fff");
  const [colorTwo, setColorTwo] = useState("#fff");

  const [playerOneError, setPlayerOneError] = useState(" ");
  const [playerTwoError, setPlayerTwoError] = useState(" ");

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = { playerOne, playerTwo, colorOne, colorTwo };
    console.log(user);
    setInGame(true);
  };

  const handlePlayerOne = (e) => {
    setPlayerOne(e.target.value);
    if (e.target.value.length < 1) {
      setPlayerOneError(" ");
    } else if (e.target.value.length < 3) {
      setPlayerOneError("The nickname must be at least 3 characters or more");
    } else {
      setPlayerOneError("");
    }
  };

  const handlePlayerTwo = (e) => {
    setPlayerTwo(e.target.value);
    if (e.target.value.length < 1) {
      setPlayerTwoError(" ");
    } else if (e.target.value.length >= 3) {
      setPlayerTwoError("");
    } else if (e.target.value.length > 0 || e.target.value.length < 3) {
      setPlayerTwoError("The nickname must be at least 3 characters or more");
    }
  };
  return (
    <div className="App">
      <h1 className="header" onClick={() => setInGame(false)}>
        TIC TAC TOE
      </h1>
      {inGame ? (
        <Board playerOne={playerOne} playerTwo={playerTwo} playerOneColor={colorOne} playerTwoColor={colorTwo}/>
      ) : (
        <div className="menu">
          <>
            <form style={{ margin: "32px" }} onSubmit={handleSubmit}>
              <>
                <div className="input-container">
                  <input
                    placeholder="Player 1"
                    value={playerOne}
                    onChange={handlePlayerOne}
                    name="Player1"
                    className="my-input"
                    required
                  />
                  <input
                    type="color"
                    className="color"
                    value={colorOne}
                    onChange={(e) => setColorOne(e.target.value)}
                    required
                  />
                  <br />
                  {playerOneError ? (
                    <label className="error">{playerOneError}</label>
                  ) : (
                    ""
                  )}
                </div>
                <input
                  placeholder="Player 2"
                  value={playerTwo}
                  onChange={handlePlayerTwo}
                  name="player 2"
                  className="my-input"
                  required
                />
                <input
                  type="color"
                  className="color"
                  value={colorTwo}
                  onChange={(e) => setColorTwo(e.target.value)}
                  required
                />
                <br />
                {playerTwoError ? (
                  <label className="error">{playerTwoError}</label>
                ) : (
                  ""
                )}
                <br />
                {!playerOneError && !playerTwoError ? (
                  <button type="submit" className="enabled">
                    Start
                  </button>
                ) : (
                  <button type="submit" className="disabled" disabled={true}>
                    Start
                  </button>
                )}
              </>
            </form>
          </>
        </div>
      )}
    </div>
  );
};

export default App;
