import React from "react";

export default function CoinflipModal() {
  return (
    <div id="coinflip--modal" className="modal">
      <div className="modal--title">
        <h3>Heads or Tails?</h3>
      </div>
      <span id="coinflip--result--display">RESULT</span>
      <button id="coinflip--btn">Flip</button>
    </div>
  );
}
