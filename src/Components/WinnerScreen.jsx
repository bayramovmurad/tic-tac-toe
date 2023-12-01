import React from "react";
import ResartButton from "./ResartButton";

const WinnerScreen = ({ winner, setBoard, setWinner, setPlayer, gameRestart }) => {
    return (
        <div className="winner-screen">
            <p>{winner} wins!</p>
            <ResartButton setBoard={setBoard} setWinner={setWinner} setPlayer={setPlayer} gameRestart={gameRestart} />
        </div>
    );
};

export default WinnerScreen;
