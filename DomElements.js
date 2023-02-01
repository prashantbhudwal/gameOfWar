const elements = {
  getDeckBtn: document.getElementById("get-new-deck-btn"),
  drawCardsBtn: document.getElementById("draw-cards-btn"),
  cardsContainer: document.getElementById("cards-container"),
  winContainer: document.getElementById("win-container"),
  remainingCardsContainer: document.getElementById("remaining-cards"),
};

const setDrawButton = function (status) {
  status === "enabled"
    ? (elements.drawCardsBtn.disabled = false)
    : status === "disabled"
    ? (elements.drawCardsBtn.disabled = true)
    : null;
};
elements.remainingCardsContainer.style.display = "none";

const displayRemainingCards = function () {
  elements.remainingCardsContainer.style.display = "block";
};

export { elements, setDrawButton, displayRemainingCards };
