const ResartButton = ({setBoard, setPlayer,setWinner,gameRestart}) => {
    const restartGame = () => {
        setBoard(Array(9).fill(null));
        setPlayer(null);
        setWinner(null);
        gameRestart();
    };

  return (
    <div>
        <button className="select-btn rs-btn" onClick={restartGame}>Restart</button>
    </div>
  )
}
export default ResartButton