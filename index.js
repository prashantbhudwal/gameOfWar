const fetchCards = function fetchADeckOfCardsFromAPI() {
  const apiUrl = "https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/";
  fetch(apiUrl)
    .then((deck) => deck.json())
    .then((deckJson) => console.log(deckJson));
};

document
  .getElementById("fetch-cards-btn")
  .addEventListener("click", fetchCards);
