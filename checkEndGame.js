import playerState from "./playerState.js";
import { elements } from "./DomElements.js";

const checkEndGame = function (cards) {
  console.log(cards);
  console.log(cards.remaining);
  cards.remaining === 0
    ? (elements.winContainer.innerText = `EndGame You - ${playerState.user}`)
    : null;
};

export default checkEndGame;
