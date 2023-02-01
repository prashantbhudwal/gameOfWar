const logIt = function logAnything(prompt = "Works!!") {
  return console.log(prompt);
};

const getJson = function (data) {
  return data.json();
};

export { logIt, getJson };
