function creationOfMemorization() {
  let memo = {};
  return function getNumberOfUniqueWords(sentence, index, arraySentences) {
    arraySentences = arraySentences || cleaningSentences(sentence).split(" ");

    if (memo[arraySentences] !== undefined) {
      return memo[arraySentences];
    }

    index = index || 0;
    let counter = 0;
    getAmountElement(arraySentences[index], arraySentences) === 1 && counter++;

    if (++index < arraySentences.length) {
      counter += getNumberOfUniqueWords(sentence, index, arraySentences);
    }

    memo[arraySentences] = counter;
    return counter;
  };
}

function getAmountElement(element, array, index) {
  index = index || 0;
  let counter = 0;
  element === array[index] && counter++;

  if (++index < array.length) {
    counter += getAmountElement(element, array, index);
  }

  return counter;
}

function cleaningSentences(sentences) {
  return sentences.replace(/[,.]/g, "");
}
