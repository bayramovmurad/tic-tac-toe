import React from "react";

const WinnerScreen = ({ winner, onRestart }) => {
    return (
        <div className="winner-screen">
            <p>{winner} wins!</p>
            <button onClick={onRestart}>Restart</button>
        </div>
    );
};

export default WinnerScreen;
