const elements = {
  getDeckBtn: document.getElementById("get-new-deck-btn"),
  drawCardsBtn: document.getElementById("draw-cards-btn"),
  cardsContainer: document.getElementById("cards-container"),
  winContainer: document.getElementById("win-container"),
  remainingCardsContainer: document.getElementById("remaining-cards"),
  messageBanner: document.getElementById("message-banner"),
};

elements.remainingCardsContainer.style.display = "none";
elements.drawCardsBtn.style.display = "none";

const displayActionArea = function () {
  elements.remainingCardsContainer.style.display = "block";
  elements.drawCardsBtn.style.display = "block";
  elements.getDeckBtn.innerText = "Reshuffle";
  elements.messageBanner.innerText = "Draw your cards! Kill them all.";
  elements.messageBanner.classList.add("start");
  elements.cardsContainer.classList.add("drawn");
};

export { elements, displayActionArea };
