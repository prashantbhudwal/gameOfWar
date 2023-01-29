import { getCards, getNewDeck } from "./getNewDeck.js";
import { getWinner } from "./getWinner.js";
import { renderCards } from "./renderCards.js";
import { logIt, getJson } from "./utils.js";

const elements = {
  getDeckBtn: document.getElementById("get-new-deck-btn"),
  drawCardsBtn: document.getElementById("draw-cards-btn"),
  cardsContainer: document.getElementById("cards-container"),
};
elements.drawCardsBtn.disabled = true;
const enableButton = function () {
  return (elements.drawCardsBtn.disabled = false);
};
const numberOfCards = 2;

let deck;
let currentCardArray;

const newDeckHandler = () =>
  getNewDeck()
    .then(getJson)
    .then((json) => (deck = json))
    .then(logIt)
    .then(enableButton());

const drawCardsHandler = () =>
  getCards(deck, numberOfCards)
    .then(getJson)
    .then((json) => {
      renderCards(json.cards, elements.cardsContainer);
      return json.cards;
    })
    .then(getWinner);
elements.getDeckBtn.addEventListener("click", newDeckHandler);

elements.drawCardsBtn.addEventListener("click", drawCardsHandler);
