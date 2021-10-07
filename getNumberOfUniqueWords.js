function getNumberOfUniqueWords(sentence) {
  const arrayOfSentences = cleaningSentences(sentence).split(" ");
  let counter = 0;
  for (let item of arrayOfSentences) {
    getCounterOfElements(item, arrayOfSentences) === 1 && counter++;
  }
  return counter;
}

function getCounterOfElements(element, arrayOfElements) {
  let counter = 0;
  for (let item of arrayOfElements) {
    element === item && counter++;
  }
  return counter;
}

function cleaningSentences(sentences) {
  return sentences.replace(/[,.]/g, "");
}
