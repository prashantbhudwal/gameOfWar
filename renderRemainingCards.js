const getRemainingCardsHTML = (remainingCards) =>
  /*Html*/ `${remainingCards} Left`;

const getRemainingCards = (cards) => cards.remaining;

const renderRemainingCards = function (cards, container) {
  container.innerText = getRemainingCardsHTML(getRemainingCards(cards));
};

export default renderRemainingCards;
