const DeckApi = {
  baseUrl: "https://apis.scrimba.com/deckofcards/api/deck",
  getNewDeckEndpoint: function () {
    return `${this.baseUrl}/new/shuffle/`;
  },
  getDrawCardsEndpoint: function (deckId, numberOfCards) {
    return `${this.baseUrl}/${deckId}/draw/?count=${numberOfCards}`;
  },
};

export default DeckApi;
