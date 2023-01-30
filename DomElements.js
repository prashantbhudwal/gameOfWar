const elements = {
  getDeckBtn: document.getElementById("get-new-deck-btn"),
  drawCardsBtn: document.getElementById("draw-cards-btn"),
  cardsContainer: document.getElementById("cards-container"),
  winContainer: document.getElementById("win-container"),
};

const setDrawButton = function (status) {
  status === "enabled"
    ? (elements.drawCardsBtn.disabled = false)
    : status === "disabled"
    ? (elements.drawCardsBtn.disabled = true)
    : null;
};

export { elements, setDrawButton };
