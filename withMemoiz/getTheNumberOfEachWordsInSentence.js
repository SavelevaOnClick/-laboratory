const isElement = (function () {
  let memo = {};
  return function getBoolean(element, array, index) {
    if (memo[`${element}:${array}`] !== undefined) {
      return memo[`${element}:${array}`];
    }

    index = index || 0;
    let boolean = element === array[index] || false;

    if (++index < array.length && !boolean) {
      boolean = getBoolean(element, array, index);
    }

    memo[`${element}:${array}`] = boolean;
    return boolean;
  };
})();

const sortingUniqueArray = (function () {
  let memo = {};
  return function sortingUnique(array, index, arrayOfUniqueValues) {
    if (memo[array] !== undefined) {
      return memo[array];
    }

    arrayOfUniqueValues = arrayOfUniqueValues || [];
    index = index || 0;

    !isElement(array[index], arrayOfUniqueValues) &&
      arrayOfUniqueValues.push(array[index]);

    ++index < array.length && sortingUnique(array, index, arrayOfUniqueValues);
    memo[array] = arrayOfUniqueValues;
    return arrayOfUniqueValues;
  };
})();

const getCounterOElement = (function () {
  let memo = {};
  return function getCounter(element, array, index) {
    if (memo[`${array}: ${element}`] !== undefined) {
      return memo[`${array}: ${element}`];
    }

    index = index || 0;
    let counter = 0;
    element === array[index] && counter++;

    if (++index < array.length) {
      counter += getCounter(element, array, index);
    }
    memo[`${array}: ${element}`] = counter;
    return counter;
  };
})();

function creationOfMemorization() {
  let memo = {};
  return function getTheNumberOfEachWordsInAsentenceWithRecursia(
    sentence,
    arraySentences,
    arrayOfUniqueValues,
    index,
    resultObject
  ) {
    resultObject = resultObject || {};
    index = index || 0;
    arraySentences = arraySentences || cleaningSentences(sentence).split(" ");

    if (memo[arraySentences] !== undefined) {
      return memo[arraySentences];
    }

    arrayOfUniqueValues =
      arrayOfUniqueValues || sortingUniqueArray(arraySentences);

    Object.assign(resultObject, {
      [arrayOfUniqueValues[index]]: getCounterOElement(
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

    memo[arraySentences] = resultObject;
    return resultObject;
  };
}

function cleaningSentences(sentences) {
  return sentences.replace(/[,.]/g, "");
}
