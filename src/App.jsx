import React, { useState, useEffect } from "react";
import Board from "./Components/Board";
import WinnerScreen from "./Components/WinnerScreen";
import clickSound from "./sound/click.mp3";
import winSound from "./sound/win.wav";
import restartSound from "./sound/restart.wav";
import ResartButton from "./Components/ResartButton";
import SelectPlayer from "./Components/SelectPlayer";

const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState(null);
  const [winner, setWinner] = useState(null);

  const clickSounds = new Audio(clickSound);
  const winnerSounds = new Audio(winSound);
  const restartSounds = new Audio(restartSound);

  const clickPlay = () => {
    clickSounds.play();
  };

  const gameWinner = () => {
    winnerSounds.play();
  };

  const gameRestart = () => {
    restartSounds.play();
  };

  const checkIfTie = () => {
    return board.every((square) => square !== null);
  };



  useEffect(() => {
    const winningPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const pattern of winningPatterns) {
      const [a, b, c] = pattern;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        setWinner(board[a]);
        gameWinner()
        break;
      }
    }

    if (!winner && checkIfTie()) {
      setWinner("Tie");
    }
  }, [board, winner]);

  const handleClick = (index) => {
    if (board[index] || winner) return;

    const newBoard = board.slice();
    newBoard[index] = player;
    setBoard(newBoard);
    setPlayer(player === "❌" ? "🟡" : "❌");
    clickPlay();
  };


  return (
    <div className="app">
      <h1>Tic Tac Toe</h1>
      {player ? (
        <>
          <Board board={board} onClick={handleClick} />
          {winner === "Tie" ? (
            <div className="tie-message">
              <p>No one wins, it's a tie!</p>
              <ResartButton setBoard={setBoard} setPlayer={setPlayer} setWinner={setWinner} gameRestart={gameRestart} />
            </div>
          ) : (
            winner && <WinnerScreen winner={winner} setBoard={setBoard} setPlayer={setPlayer} setWinner={setWinner} gameRestart={gameRestart} />
          )}
        </>
      ) : (
        <SelectPlayer player={player} setPlayer={setPlayer} />
      )}
    </div>
  );
};

export default App;
