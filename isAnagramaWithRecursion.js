function isAnagramWidthRecursion(word1, word2, index) {
  index = index || 0;
  let boolean =
    getAmounOfLetter(word1[index], word1) ===
      getAmounOfLetter(word1[index], word2) || false;

  if (++index < word1.length && boolean) {
    boolean = isAnagramWidthRecursion(word1, word2, index);
  }

  return boolean;
}

function getAmounOfLetter(letter, string, index) {
  index = index || 0;
  let counter = 0;
  letter === string[index] && counter++;

  if (++index < string.length) {
    counter += getAmounOfLetter(letter, string, index);
  }

  return counter;
}
