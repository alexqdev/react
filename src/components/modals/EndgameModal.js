import React from "react";

export default function EndgameModal() {
  return (
    <div id="endgame--modal" className="modal">
      <div className="modal--title">
        <h3>End Current Game?</h3>
      </div>
      <button className="reload--btn">Confirm</button>
      <button className="close--btn">Cancel</button>
    </div>
  );
}