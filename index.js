import { elements, startGame } from "./DomElements.js";
import { getCards, getNewDeck } from "./getNewDeck.js";
import { getWinner } from "./getWinner.js";
import { renderCards, clearRenderedCards } from "./renderCards.js";
import { renderWinner } from "./renderWinner.js";
import { logIt, getJson } from "./utils.js";
import renderRemainingCards from "./renderRemainingCards.js";
import renderUpdatedPlayerScore from "./renderUpdatedPlayerScore.js";
import checkEndGame from "./checkEndGame.js";
const cardsToBeDrawn = 2;
let deck;

const newDeckHandler = () =>
  getNewDeck()
    .then(getJson)
    .then((jsonDeck) => (deck = jsonDeck))
    .then((drawnCardsJson) =>
      renderRemainingCards(drawnCardsJson, elements.remainingCardsContainer)
    )
    .then(startGame())
    .then(clearRenderedCards(elements.cardsContainer));

// TODO Refactor this monstrosity
const drawCardsHandler = () =>
  getCards(deck, cardsToBeDrawn)
    .then(getJson)
    .then((drawnCardsJson) => {
      renderCards(drawnCardsJson.cards, elements.cardsContainer);
      renderRemainingCards(drawnCardsJson, elements.remainingCardsContainer);
      const winner = getWinner(drawnCardsJson.cards);
      renderWinner(winner, elements.winContainer);
      renderUpdatedPlayerScore();
      checkEndGame(drawnCardsJson);
    });

elements.getDeckBtn.addEventListener("click", newDeckHandler);

elements.drawCardsBtn.addEventListener("click", drawCardsHandler);
