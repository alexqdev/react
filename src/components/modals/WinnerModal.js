import React from "react";

export default function WinnerModal() {
  return (
    <div id="winner--modal" className="modal">
      <div className="modal--title">
        <h3 id="winner--result--display">X IS THE WINNER!</h3>
      </div>
      <button className="reload--btn">Play</button>
      <button className="close--btn">Quit</button>
    </div>
  );
}
