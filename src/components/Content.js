import React from "react";

export default function Content({ ranDeck }) {

  return (
    <div id="content">
      {ranDeck.map((card) => (
        <img
          className="content--card"
          id={card.id}
          key={card.id}
          src="https://i.imgur.com/Ib4BQ6K.png"
          name={card.name}
        />
      ))}
    </div>
  );
}