function isAnagramWidthRecursion(word1, word2, index) {
  if (word1.length !== word2.length) {
    return false;
  }
  index = index || 0;
  while (index < word1.length) {
    if (
      getAmounOfLetter(word1[index], word1) !==
      getAmounOfLetter(word1[index], word2)
    ) {
      return false;
    } else {
      isAnagramWidthRecursion(word1, word2, ++index);
    }
  }

  return true;
}

function getAmounOfLetter(letter, string, length) {
  let counter = 0;
  length = length || 0;
  string[length] === letter && counter++;

  if (++length < string.length) {
    counter += getAmounOfLetter(letter, string, length);
  }

  return counter;
}
