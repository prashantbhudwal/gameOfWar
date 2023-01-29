const fetchDeck = function fetchADeckOfCardsFromAPI() {
  const apiUrl = "https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/";
  return fetch(apiUrl).then((deck) => deck.json());
};

const getDeckId = function getTheIdOfTheDeck(json) {
  return json.deck_id;
};

const logIt = function logAnything(prompt) {
  console.log(prompt);
};

fetchDeck().then(getDeckId).then(logIt);

document.getElementById("fetch-cards-btn").addEventListener("click", fetchDeck);
