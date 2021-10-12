const getAmounOfLetter = (function () {
  let memo = {};
  return function getCounterLetter(letter, string, index) {
    if (memo[`${letter}: ${string}`] !== undefined) {
      return memo[`${letter}: ${string}`];
    }
    index = index || 0;
    let counter = 0;
    letter === string[index] && counter++;

    if (++index < string.length) {
      counter += getCounterLetter(letter, string, index);
    }
    memo[`${letter}: ${string}`] = counter;
    return counter;
  };
})();

function creationOfMemorization() {
  let memo = {};
  return function isAnagramWidthRecursion(word1, word2, index) {
    if (memo[`${word1}:${word2}`] !== undefined) {
      return memo[`${word1}:${word2}`];
    }

    index = index || 0;
    let boolean =
      getAmounOfLetter(word1[index], word1) ===
        getAmounOfLetter(word1[index], word2) || false;

    if (++index < word1.length && boolean) {
      boolean = isAnagramWidthRecursion(word1, word2, index);
    }

    memo[`${word1}:${word2}`] = boolean;
    return boolean;
  };
}
