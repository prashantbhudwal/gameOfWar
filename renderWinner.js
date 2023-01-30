const winningMessage = {
  user: "😀 You Win!",
  computer: "🙁 Computer Wins!",
  draw: "😱 It's a Draw!",
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
