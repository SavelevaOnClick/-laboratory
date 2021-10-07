function getTheNumberOfEachWordsInAsentence(sentence) {
  const resultObject = {};
  const arraySentences = cleaningSentences(sentence).split(" ");
  const arrayOfUniqueValues = sortingUniqueArray(arraySentences);

  for (let item of arrayOfUniqueValues) {
    Object.assign(resultObject, { [item]: getCounter(item, arraySentences) });
  }

  return resultObject;
}

function getCounter(element, array) {
  let counter = 0;

  for (let item of array) {
    element === item && counter++;
  }

  return counter;
}

function sortingUniqueArray(array) {
  const arrayOfUniqueValues = [];
  for (let item of array) {
    !isElement(item, arrayOfUniqueValues) && arrayOfUniqueValues.push(item);
  }
  return arrayOfUniqueValues;
}

function isElement(element, array) {
  for (let item of array) {
    if (element === item) {
      return true;
    }
  }
  return false;
}

function cleaningSentences(sentences) {
  return sentences.replace(/[,.]/g, "");
}
