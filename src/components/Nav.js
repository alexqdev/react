import React from "react";

export default function Nav() {
  return (
    <nav id="navbar" className="navbar fixed-top">
      <img id="logo" src="https://i.imgur.com/elWKbZe.png" alt="logo" />
      <select id="game--type">
        <option>GAME TYPE</option>
        <option value="vs--player">2 PLAYER</option>
        {/* <option id="vs--ai">VS AI</option> */}
      </select>
      <div id="score--display">
        <div id="display--one">
          <span>P1: </span>
          <span id="player--one--score--display">0</span>
        </div>
        <span> | </span>
        <div id="display--two">
          <span>P2: </span>
          <span id="player--two--score--display">0</span>
        </div>
      </div>
      <button id="rules--btn">RULES</button>
      <button id="endgame--btn">END</button>
    </nav>
  );
}