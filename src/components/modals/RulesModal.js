import React from "react";

export default function RulesModal() {
  return (
    <div id="rules--modal" className="modal">
      <div className="modal--title">
        <h3>RULES</h3>
      </div>
      <p id="rules--txt">
        OBJECTIVE: Score more points than your opponent by matching cards <br />
        -A coin flip determines who goes first <br />
        -Matched cards = +5 points<br/>
        -Joker card = -5 points (do not lose turn)<br/>
        -Game is over once all cards are matched or game is ended manually
      </p>
      <button className="close--btn">close</button>
    </div>
  );
}