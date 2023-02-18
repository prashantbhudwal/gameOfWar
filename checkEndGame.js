import renderEndGame from "./renderEndGame.js";

const checkEndGame = function (cards) {
  console.log(cards);
  console.log(cards.remaining);
  cards.remaining === 0
    ? renderEndGame()
    : null;
};

export default checkEndGame;
