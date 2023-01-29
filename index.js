import DeckApi from "./DeckApi.js";

const getJson = function (data) {
  return data.json();
};

const getNewDeck = function fetchADeckOfCardsFromAPI() {
  const url = DeckApi.getNewDeckEndpoint();
  return fetch(url).then(getJson);
};

const getDeckId = function getTheIdOfTheDeck(json) {
  return json.deck_id;
};

const logIt = function logAnything(prompt) {
  console.log(prompt);
};

const getCards = function getCardsFromTheDeck(deck, numberOfCards) {
  const deckId = getDeckId(deck);
  const cards = numberOfCards;
  return fetch(DeckApi.getDrawCardsEndpoint(deckId, cards));
};
const numberOfCards = 2;

getNewDeck()
  .then((deck) => getCards(deck, numberOfCards))
  .then(getJson)
  .then(logIt);

const clickHandler = () =>
  getNewDeck().then(getJson).then(getDeckId).then(logIt);

document
  .getElementById("fetch-cards-btn")
  .addEventListener("click", clickHandler);
