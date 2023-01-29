const getCardImageUrl = function getCardImageFromJson(card) {
  return card.image;
};

const getCardHtml = function getCardHtmlTemplateString(card) {
  const imageUrl = getCardImageUrl(card);
  const cardHtml = `<img src="${imageUrl}" alt="Drawn Card">`;
  return cardHtml;
};

const renderCards = function renderCardImageOnScreen(cardsArray, element) {
  console.log(cardsArray);
  cardsArray.forEach((card) => {
    element.innerHTML += getCardHtml(card);
  });
};

export { renderCards };
