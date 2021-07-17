import React from "react";
import "./styles/styles.sass";
import Nav from "./components/Nav";
import Content from "./components/Content";
import Footer from "./components/Footer";
import CoinflipModal from "./components/modals/CoinflipModal";
import EndgameModal from "./components/modals/EndgameModal";
import RulesModal from "./components/modals/RulesModal";
import WinnerModal from "./components/modals/WinnerModal";

export default function App() {
  const deck = [
    {
      id: 1,
      name: "Ace",
      img: "https://i.imgur.com/PeZh1Bn.png"
    },
    {
      id: 2,
      name: "King",
      img: "https://i.imgur.com/z3jeQyB.png"
    },
    {
      id: 3,
      name: "Queen",
      img: "https://i.imgur.com/zS6C4wB.png"
    },
    {
      id: 4,
      name: "Jack",
      img: "https://i.imgur.com/Q95bAr6.png"
    },
    {
      id: 5,
      name: "Joker",
      img: "https://i.imgur.com/Y8DVYe6.png"
    },
    {
      id: 6,
      name: "Ace",
      img: "https://i.imgur.com/KEHzRYN.png"
    },
    {
      id: 7,
      name: "King",
      img: "https://i.imgur.com/BNWeHzU.png"
    },
    {
      id: 8,
      name: "Queen",
      img: "https://i.imgur.com/Y8ErS8Z.png"
    },
    {
      id: 9,
      name: "Jack",
      img: "https://i.imgur.com/CH7Crmf.png"
    }
  ];
  let ranDeck = deck.sort((a,b)=>0.5-Math.random());
  const rootEl = document.querySelector("#root");
  let clickedCards = [];
  let initBoardCount = deck.length;
  let currentTurn = "";
  let points = {
    "p1":0,
    "p2":0
  }
  rootEl.addEventListener("click", e => {
    switch(currentTurn){
      case "p1":
        document.querySelector("#display--one").style.color = "green"
        document.querySelector("#display--one").style.borderBottom = "1px solid green"
        break;
      case "p2":
        document.querySelector("#display--two").style.color = "green"
        document.querySelector("#display--two").style.borderBottom = "1px solid green"
        break;
      default:
        break;
    }
    // NAVBAR
    // gametype
    switch(e.target.value){
      case "vs--player":
        document.getElementById("coinflip--modal").style.display = "grid"
        break;
      default:
        break;
    }
    // rules+end game
    switch(e.target.id){
      case "rules--btn":
        document.getElementById("rules--modal").style.display = "grid"
        break;
      case "endgame--btn":
        document.getElementById("endgame--modal").style.display = "grid"
        break;
      // MODALS
      case "coinflip--btn":
        if(Math.floor(Math.random()*2) == 0){
          document.querySelector("#coinflip--result--display").innerHTML = "HEADS";
        }else{
          document.querySelector("#coinflip--result--display").innerHTML = "TAILS";
        }
        currentTurn = "p1"
        document.querySelector("#display--one").style.color = "green"
        document.querySelector("#display--one").style.borderBottom = "1px solid green"
        setTimeout(()=>{document.getElementById("coinflip--modal").style.display = "none"},1000)
        break;
      default:
        break;
    }

    // JOKER
    switch(e.target.name){
      case "Joker":
        if(currentTurn != ""){
          if(clickedCards == 0){
            e.target.src = "https://i.imgur.com/Y8DVYe6.png";
            initBoardCount -= 1;
            console.log(initBoardCount)
            if(initBoardCount == 0){
              document.querySelector("#winner--modal").style.display = "grid";
              if(points.p1>points.p2){
                document.querySelector("#winner--result--display").innerHTML = "player 1 wins!"
              }else if(points.p1<points.p2){
                document.querySelector("#winner--result--display").innerHTML = "player 2 wins!"
              }else{
                document.querySelector("#winner--result--display").innerHTML = "tie game!"
              }
            }
            setTimeout(() => {
              e.target.style.visibility = "hidden";
            }, 1500);
            if(currentTurn == "p1"){
              points.p1 -= 5;
              document.querySelector("#player--one--score--display").innerHTML = points.p1;
            }else{
              points.p2 -= 5;
              document.querySelector("#player--two--score--display").innerHTML = points.p2;
            };
          }else{
            console.log(clickedCards)
            e.target.src = "https://i.imgur.com/Y8DVYe6.png";
            clickedCards = [];
            setTimeout(() => {
              Array.from(document.querySelectorAll(".content--card")).forEach(content_card=>{
                content_card.src = "https://i.imgur.com/Ib4BQ6K.png";
                e.target.style.visibility = "hidden";
                console.log(clickedCards)
              });          
            }, 1500);
            initBoardCount -= 1;
            console.log(initBoardCount)
            if(initBoardCount == 0){
              document.querySelector("#winner--modal").style.display = "grid";
              if(points.p1>points.p2){
                document.querySelector("#winner--result--display").innerHTML = "player 1 wins!"
              }else if(points.p1<points.p2){
                document.querySelector("#winner--result--display").innerHTML = "player 2 wins!"
              }else{
                document.querySelector("#winner--result--display").innerHTML = "tie game!"
              }
            }
            if(currentTurn == "p1"){
              points.p1 -= 5;
              document.querySelector("#player--one--score--display").innerHTML = points.p1;
            }else{
              points.p2 -= 5;
              document.querySelector("#player--two--score--display").innerHTML = points.p2;
            }
          }
        }else{
          alert("Select Game Type.");
        }
        break;
      default:
        break;
    }
    // CONTENT
    switch(e.target.className || e.target.class){
      case "content--card":
        if(currentTurn != ""){
          deck.forEach(card=>{
            if(e.target.id == card.id && e.target.name != "Joker"){
              e.target.src = card.img;
              if(clickedCards.length < 2){
                clickedCards.push(e.target.name);
                if(clickedCards.length == 2){
                  if(clickedCards[0] != clickedCards[1]){
                    setTimeout(()=>{
                      e.target.src = "https://i.imgur.com/Ib4BQ6K.png";
                      Array.from(document.querySelectorAll(".content--card")).forEach(content_card=>{
                        if(clickedCards[0] == content_card.name){
                          content_card.src = "https://i.imgur.com/Ib4BQ6K.png";
                        };
                      });
                      switch(currentTurn){
                        case "p1":
                          currentTurn = "p2"
                          document.querySelector("#display--two").style.color = "green"
                          document.querySelector("#display--two").style.borderBottom = "1px solid green"
                          document.querySelector("#display--one").style.color = "#dfdedb"
                          document.querySelector("#display--one").style.borderBottom = "none"
                          break;
                        case "p2":
                          currentTurn = "p1"
                          document.querySelector("#display--one").style.color = "green"
                          document.querySelector("#display--one").style.borderBottom = "1px solid green"
                          document.querySelector("#display--two").style.color = "#dfdedb"
                          document.querySelector("#display--two").style.borderBottom = "none"
                          break;
                        default:
                          break;
                      }
                    },1500);
                  }else{
                    initBoardCount -= 2;
                    console.log(initBoardCount)
                    if(initBoardCount == 0){
                      document.querySelector("#winner--modal").style.display = "grid";
                      if(points.p1>points.p2){
                        document.querySelector("#winner--result--display").innerHTML = "player 1 wins!"
                      }else if(points.p1<points.p2){
                        document.querySelector("#winner--result--display").innerHTML = "player 2 wins!"
                      }else{
                        document.querySelector("#winner--result--display").innerHTML = "tie game!"
                      }
                    }
                    if(currentTurn == "p1"){
                      points.p1 += 5;
                      document.querySelector("#player--one--score--display").innerHTML = points.p1;
                    }else{
                      points.p2 += 5;
                      document.querySelector("#player--two--score--display").innerHTML = points.p2;
                    }
                    setTimeout(()=>{
                      Array.from(document.querySelectorAll(".content--card")).forEach(content_card=>{
                        if(clickedCards[0] == content_card.name){
                          content_card.style.visibility = "hidden";
                        };
                      });
                    },1500);
                  }
                }
              }else{
                clickedCards = [];
                clickedCards.push(e.target.name);
              }
            };
          });
        }else{
          alert("Select Game Type.");
        }
        break;
      case "close--btn":
        document.getElementById("rules--modal").style.display = "none"
        document.getElementById("endgame--modal").style.display = "none"
        document.getElementById("winner--modal").style.display = "none"
        break;
      case "reload--btn":
        window.location.reload(true)
        break;
      default:
        break;
    }
  })
  return (
    <div className="App">
      <Nav/>
      <CoinflipModal/>
      <EndgameModal/>
      <RulesModal/>
      <WinnerModal/>
      <Content ranDeck={ranDeck}/>
      <Footer/>
    </div>
  );
}