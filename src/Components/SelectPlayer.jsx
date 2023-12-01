const SelectPlayer = ({player,setPlayer}) => {

    const selectPlayer = (selectedPlayer) => {
        if (!player) {
            setPlayer(selectedPlayer);
        }
    };

  return (
    <div className="btn-container">
          <button
            //   className={player === "X" ? "selected" : ""}
            className="select-btn btn"
              onClick={() => selectPlayer("❌")}
          >
              <span>Click!</span>
              <span> Select ❌</span>
             
          </button>
          <button
            //   className={player === "O" ? "selected" : ""}
            className="select-btn btn"
              onClick={() => selectPlayer("🟡")}
          >
              <span>Click!</span>
              <span>Select 🟡</span>
             
          </button>
      </div>
  )
}
export default SelectPlayer