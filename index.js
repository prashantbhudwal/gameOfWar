import { getCards, getNewDeck, getDeckId } from "./deckLogic.js";
import { logIt, getJson } from "./utils.js";

const elements = {
  getDeckBtn: document.getElementById("get-new-deck-btn"),
  drawCardsBtn: document.getElementById("draw-cards-btn"),
};

const numberOfCards = 2;

const drawCardsHandler = () =>
  getNewDeck()
    .then(getJson)
    .then((deck) => getCards(deck, numberOfCards))
    .then(getJson)
    .then(logIt);

const newDeckHandler = () => getNewDeck().then(getJson).then(logIt);

elements.getDeckBtn.addEventListener("click", newDeckHandler);

elements.drawCardsBtn.addEventListener("click", drawCardsHandler);
