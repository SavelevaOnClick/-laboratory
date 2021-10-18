function fastSort(array) {
  if (array.length <= 1) {
    return array;
  }
  let centerElementIndex = Math.floor(array.length / 2);
  let centerElement = array[centerElementIndex];
  let minArray = [];
  let maxArray = [];
  for (let i = 0; i < array.length; i++) {
    if (i === centerElementIndex) {
      continue;
    }
    if (array[i] < centerElement) {
      minArray.push(array[i]);
    } else {
      maxArray.push(array[i]);
    }
  }
  return [...fastSort(minArray), centerElement, ...fastSort(maxArray)];
}

function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        let buffer = array[j];
        array[j] = array[j + 1];
        array[j + 1] = buffer;
      }
    }
  }
  return array;
}
