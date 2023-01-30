const winningMessage = {
  user: "😀 You Win!",
  computer: "🤖 ScrimBot Wins!",
  draw: "😱 Whoa! A RARE Draw!",
};

const getWinMessageHtml = function (winner) {
  const winMessage = winningMessage[winner];
  return `<p class="win-message ${winner}-wins">${winMessage}</p>`;
};

const renderWinner = function (winner, renderContainer) {
  console.log(winner, renderContainer);
  renderContainer.innerHTML = getWinMessageHtml(winner);
};

export { renderWinner };
