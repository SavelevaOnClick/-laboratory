function checkingWhetherItIsAnagram(strouk1, strouk2) {
  if (strouk1.length !== strouk2.length) return "не анаграмма";
  for (let i = 0; i < strouk1.length; i++) {
    if (!test2(strouk1[i], strouk2)) return "не анаграмма";
  }
  return "анаграмма";
}

function checkingLetterForOccurrence(letter, strouk2) {
  for (let i = 0; i < strouk2.length; i++) {
    if (strouk2[i].toLowerCase() === letter.toLowerCase()) return true;
  }
  return false;
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
