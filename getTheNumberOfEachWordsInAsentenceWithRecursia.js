function getTheNumberOfEachWordsInAsentenceWithRecursia(
  sentence,
  arraySentences,
  arrayOfUniqueValues,
  index,
  resultObject
) {
  resultObject = resultObject || {};
  index = index || 0;
  arraySentences = arraySentences || cleaningSentences(sentence).split(" ");
  arrayOfUniqueValues =
    arrayOfUniqueValues || sortingUniqueArray(arraySentences);

  Object.assign(resultObject, {
    [arrayOfUniqueValues[index]]: getCounter(
      arrayOfUniqueValues[index],
      arraySentences
    ),
  });
  ++index < arrayOfUniqueValues.length &&
    getTheNumberOfEachWordsInAsentenceWithRecursia(
      sentence,
      arraySentences,
      arrayOfUniqueValues,
      index,
      resultObject
    );

  return resultObject;
}

function getCounter(element, array, index) {
  index = index || 0;
  let counter = 0;
  element === array[index] && counter++;

  if (++index < array.length) {
    counter += getCounter(element, array, index);
  }

  return counter;
}

function sortingUniqueArray(array, index, arrayOfUniqueValues) {
  arrayOfUniqueValues = arrayOfUniqueValues || [];
  index = index || 0;

  !isElement(array[index], arrayOfUniqueValues) &&
    arrayOfUniqueValues.push(array[index]);
  ++index < array.length &&
    sortingUniqueArray(array, index, arrayOfUniqueValues);

  return arrayOfUniqueValues;
}

function isElement(element, array, index) {
  index = index || 0;
  let boolean = element === array[index] || false;

  if (++index < array.length && !boolean) {
    boolean = isElement(element, array, index);
  }

  return boolean;
}

function cleaningSentences(sentences) {
  return sentences.replace(/[,.]/g, "");
}
