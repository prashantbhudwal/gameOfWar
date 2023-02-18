import playerState from "./playerState.js";

const getIntFromMatrix = function getValueFromConversionMatrix(value) {
  const conversionMatrix = {
    QUEEN: 12,
    KING: 13,
    JACK: 11,
    ACE: 14,
  };
  return conversionMatrix[value];
};

const convertValueToInt = function convertCardValueToIntegers(element) {
  return element > 0 || element < 11
    ? parseInt(element)
    : getIntFromMatrix(element);
};

const getIntegerArray = (cardsArray) => cardsArray.map(convertValueToInt);
const getValueArray = (cardsArray) => cardsArray.map((card) => card.value);

const compareCards = function (userCard, computerCard) {
  return userCard === computerCard
    ? "draw"
    : userCard > computerCard
    ? "user"
    : "computer";
};

const updatePlayersState = function (winner) {
  winner === "user"
    ? (playerState.user += 1)
    : winner === "computer"
    ? (playerState.computer += 1)
    : null;
};

const getWinner = function getWinningCard(cardsArray) {
  const [userCard, computerCard] = getIntegerArray(getValueArray(cardsArray));
  const winner = compareCards(userCard, computerCard);
  updatePlayersState(winner);
  console.log(playerState);
  return winner;
};

export { getWinner };
