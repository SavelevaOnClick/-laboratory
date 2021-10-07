function isAnagram(word1, word2) {
  if (word1.length !== word2.length) {
    return false;
  }

  for (let i = 0; i < word1.length; i++) {
    if (
      getAmounOfLetter(word1[i], word1) !== getAmounOfLetter(word1[i], word2)
    ) {
      return false;
    }
  }
  return true;
}

function getAmounOfLetter(letter, string) {
  let counter = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === letter) {
      counter++;
    }
  }
  return counter;
}
