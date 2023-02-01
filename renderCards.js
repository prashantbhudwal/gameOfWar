const getCardImageUrl = function getCardImageFromJson(card) {
  return card.image;
};

const getCardHtml = function getCardHtmlTemplateString(card) {
  const imageUrl = getCardImageUrl(card);
  const cardHtml = `<img src="${imageUrl}" class="card" alt="Drawn Card">`;
  return cardHtml;
};

const renderCards = function renderCardImageOnScreen(cardsArray, element) {
  element.innerHTML = "";
  cardsArray.forEach((card) => {
    element.innerHTML += getCardHtml(card);
  });
};

const clearRenderedCards = function (element) {
  element.innerHTML = `<div class="placeholder-card card"></div>
      <div class="placeholder-card card"></div>`;
};

export { renderCards, clearRenderedCards };
