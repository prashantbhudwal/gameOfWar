import { elements } from "./DomElements.js";
import playerState from "./playerState.js";

const renderUpdatedPlayerScore = function () {
  elements.userScore.innerText = playerState.user;
  elements.computerScore.innerText = playerState.computer;
};

export default renderUpdatedPlayerScore;
