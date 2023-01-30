import DeckApi from "./deckApiConfig.js";

const getNewDeck = function fetchADeckOfCardsFromAPI() {
  const url = DeckApi.getNewDeckEndpoint();
  return fetch(url);
};

const getDeckId = function getTheIdOfTheDeck(json) {
  return json.deck_id;
};

const getCards = function getCardsFromTheDeck(deck, numberOfCards) {
  const deckId = getDeckId(deck);
  const cards = numberOfCards;
  return fetch(DeckApi.getDrawCardsEndpoint(deckId, cards));
};

export { getNewDeck, getCards, getDeckId };
