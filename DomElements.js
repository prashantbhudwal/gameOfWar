const elements = {
  getDeckBtn: document.getElementById("get-new-deck-btn"),
  drawCardsBtn: document.getElementById("draw-cards-btn"),
  cardsContainer: document.getElementById("cards-container"),
  winContainer: document.getElementById("win-container"),
  remainingCardsContainer: document.getElementById("remaining-cards"),
};

elements.remainingCardsContainer.style.display = "none";
elements.drawCardsBtn.style.display = "none";

const displayActionArea = function () {
  elements.remainingCardsContainer.style.display = "block";
  elements.drawCardsBtn.style.display = "block";
};

export { elements, displayActionArea };
