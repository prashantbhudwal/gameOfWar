import DeckApi from "./DeckApi.js";
import { getCards, getNewDeck, getDeckId } from "./deckLogic.js";
import { logIt, getJson } from "./utils.js";

const numberOfCards = 2;

getNewDeck()
  .then(getJson)
  .then((deck) => getCards(deck, numberOfCards))
  .then(getJson)
  .then(logIt);

const clickHandler = () => getNewDeck().then(getJson).then(logIt);

document
  .getElementById("fetch-cards-btn")
  .addEventListener("click", clickHandler);
