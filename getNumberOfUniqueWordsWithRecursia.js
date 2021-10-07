function getNumberOfUniqueWordsWithRecursia(sentence, index, arraySentences) {
  const arrayOfSentences =
    arraySentences || cleaningSentences(sentence).split(" ");
  index = index || 0;
  let counter = 0;
  getAmountElement(arrayOfSentences[index], arrayOfSentences) === 1 &&
    counter++;

  if (++index < arrayOfSentences.length) {
    counter += getNumberOfUniqueWordsWithRecursia(
      sentence,
      index,
      arrayOfSentences
    );
  }

  return counter;
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
