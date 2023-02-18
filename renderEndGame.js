import { elements } from "./DomElements.js";
import playerState from "./playerState.js";

const getGameWinner = () =>
  playerState.computer > playerState.user
    ? "computer"
    : playerState.computer < playerState.user
    ? "user"
    : "draw";

const getWinHTML = function (gameWinner) {
  return /*HTML*/ `
    <div style = 'color: white'>
    <h1>The ${gameWinner} wins!</h1>
    <h2> You: ${playerState.user} - Computer: ${playerState.computer}</h2>
    </div>
    `;
};

const renderEndGame = function () {
  const gameWinner = getGameWinner();
  const winHTML = getWinHTML(gameWinner);
  elements.body.innerHTML = winHTML;
};

export default renderEndGame;
