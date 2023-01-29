const logIt = function logAnything(prompt) {
  console.log(prompt);
};

const getJson = function (data) {
  return data.json();
};

export { logIt, getJson };
