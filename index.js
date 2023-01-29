import { getCards, getNewDeck } from "./getNewDeck.js";
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

let newDeck;

const newDeckHandler = () =>
  getNewDeck()
    .then(getJson)
    .then((json) => (newDeck = json))
    .then(logIt)
    .then(enableButton());

const drawCardsHandler = () =>
  getCards(newDeck, numberOfCards)
    .then(getJson)
    .then((json) => renderCards(json.cards, elements.cardsContainer));

elements.getDeckBtn.addEventListener("click", newDeckHandler);

elements.drawCardsBtn.addEventListener("click", drawCardsHandler);

/**
 * Challenge:
 *
 * Display the images of the 2 cards you drew in the browser.
 * Probably best to use `innerHTML` to insert a couple <img> elements
 * on the page.
 */
