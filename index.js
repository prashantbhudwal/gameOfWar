import { elements, setDrawButton } from "./DomElements.js";
import { getCards, getNewDeck } from "./getNewDeck.js";
import { getWinner } from "./getWinner.js";
import { renderCards } from "./renderCards.js";
import { renderWinner } from "./renderWinner.js";
import { logIt, getJson } from "./utils.js";
const cardsToBeDrawn = 2;
let deck;

setDrawButton("disabled");

const newDeckHandler = () =>
  getNewDeck()
    .then(getJson)
    .then((jsonDeck) => (deck = jsonDeck))
    .then(setDrawButton("enabled"));
// TODO Refactor this monstrosity
const drawCardsHandler = () =>
  getCards(deck, cardsToBeDrawn)
    .then(getJson)
    .then((json) => {
      renderCards(json.cards, elements.cardsContainer);
      return json.cards;
    })
    .then(getWinner)
    .then((winner) => renderWinner(winner, elements.winContainer));

elements.getDeckBtn.addEventListener("click", newDeckHandler);

elements.drawCardsBtn.addEventListener("click", drawCardsHandler);
