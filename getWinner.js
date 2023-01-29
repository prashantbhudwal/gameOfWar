import { logIt } from "./utils.js";

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
  if (element.value > 0 || element.value < 11) {
    return parseInt(element.value);
  } else {
    return getIntFromMatrix(element.value);
  }
};

const getValueArray = function (cardsArray) {
  let ValueArray = cardsArray.map(convertValueToInt);
  return ValueArray;
};

const compareCards = function (userCard, computerCard) {
  return userCard === computerCard
    ? null
    : userCard > computerCard
    ? userCard
    : computerCard;
};
const getWinner = function getWinningCard(cardsArray) {
  let [userCardValue, computerCardValue] = getValueArray(cardsArray);
  let winner = compareCards(userCardValue, computerCardValue);
  winner === userCardValue ? logIt("userWins") : logIt("computerWins");
  return winner;
};

export { getWinner };
