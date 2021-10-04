function task1(strouk1, strouk2) {
  if (strouk1.length !== strouk2.length) return "не анаграмма";
  for (let i = 0; i < strouk1.length; i++) {
    if (
      checkingLetter(strouk1[i], strouk1) !==
      checkingLetter(strouk1[i], strouk2)
    )
      return "не анаграмма";
  }
  return "анаграмма";
}
function checkingLetter(letter, strouk) {
  let counter = 0;
  for (let i = 0; i < strouk.length; i++) {
    if (strouk[i] === letter) {
      counter++;
    }
  }
  return counter;
}

// second

function secondTask(number) {
  const stringNumber = String(number);
  const arrayOfUniqueNumbers = set(number);
  for (let i = 0; i < arrayOfUniqueNumbers.length; i++) {
    console.log(
      `цифра ${
        arrayOfUniqueNumbers[i]
      } встречается в числе ${counterOfOccurrencesOfDigitsInAnumber(
        arrayOfUniqueNumbers[i],
        stringNumber
      )}`
    );
  }
}

function counterOfOccurrencesOfDigitsInAnumber(number, stringNumber) {
  let counter = 0;
  for (let i = 0; i < stringNumber.length; i++)
    if (number === stringNumber[i]) {
      counter++;
    }
  return counter;
}
function checkingForBeingInAnArray(element, arrayElementsForChecking) {
  if (arrayElementsForChecking.length === 0) return false;
  for (let i = 0; i < arrayElementsForChecking.length; i++) {
    if (element === arrayElementsForChecking[i]) return true;
  }
  return false;
}
function set(number) {
  const stringNumber = String(number);
  const arrayOfUniqueValues = [];
  for (let i = 0; i < stringNumber.length; i++) {
    if (!checkingForBeingInAnArray(stringNumber[i], arrayOfUniqueValues)) {
      arrayOfUniqueValues.push(stringNumber[i]);
    }
  }
  return arrayOfUniqueValues;
}

// task 3

function task3(sentence) {
  const arrayOfSentences = sentence.split(" ");
  sliceComma(arrayOfSentences);
  let counter = 0;
  for (let i = 0; i < arrayOfSentences.length; i++) {
    if (checking(arrayOfSentences[i], arrayOfSentences)) {
      counter++;
    }
  }
  console.log(counter);
}

function checking(element, arrayOfElements) {
  let counter = 0;
  for (let i = 0; i < arrayOfElements.length; i++) {
    if (element === arrayOfElements[i]) {
      if (++counter > 1) return false;
    }
  }
  return true;
}
function sliceComma(arraySentences) {
  for (let i = 0; i < arraySentences.length; i++) {
    if (arraySentences[i].indexOf(",") !== -1) {
      const index = arraySentences[i].indexOf(",");
      arraySentences[i] = arraySentences[i].split("").splice(0, index).join("");
    }
  }
}
