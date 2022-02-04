import React, { useState } from "react";
import Board from "./components/Board";

const App = () => {
  document.body.style.background =
    "linear-gradient(90deg,rgb(231, 225, 115),rgb(96, 199, 218))";
  document.body.style.color = "#000";
  const [inGame, setInGame] = useState(false);
  const [round, setRound] = useState(1);

  const [playerOne, setPlayerOne] = useState("");
  const [playerTwo, setPlayerTwo] = useState("");
  const [colorOne, setColorOne] = useState("#32fc41");
  const [colorTwo, setColorTwo] = useState("#326ffc");

  const [colorRound, setColorRound] = useState("#000")

  const [playerOneError, setPlayerOneError] = useState(" ");
  const [playerTwoError, setPlayerTwoError] = useState(" ");

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = { playerOne, playerTwo, colorOne, colorTwo, round };
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

  const renderRounds = (round) => {
    var options = [];
    for (let i = 0; i < round; i++) {
      options.push(i + 1);
    }
    return options;
  };
  return (
    <div className="App">
      <h1 className="header" onClick={() => setInGame(false)}>
        TIC TAC TOE
      </h1>
      {inGame ? (
        <Board
          playerOne={playerOne}
          playerTwo={playerTwo}
          playerOneColor={colorOne}
          playerTwoColor={colorTwo}
          round={round}
          color={colorRound}
        />
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
                <label style={{ color: "#fff" }}>Background Color</label>
                <br/>
                <input
                  type="color"
                  className="color"
                  value={colorRound}
                  onChange={(e) => setColorRound(e.target.value)}
                  required
                />
                <br />
                <label style={{ color: "#fff" }}>Rounds</label>
                <br />
                <select
                  value={round}
                  onChange={(e) => setRound(e.target.value)}
                >
                  {renderRounds(10).map((e) => (
                    <option value={e} className="rounds">
                      {e}
                    </option>
                  ))}
                </select>
                <br />
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
