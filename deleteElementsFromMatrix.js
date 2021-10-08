function deleteStringOfMatrix(matrix) {
  let counter = 0;
  let length = matrix.length;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        counter++;
      }
    }
    if (counter > 0) {
      matrix.splice(i, 1);
      length -= 1;
    }
  }
  return matrix;
}

function deleteColumnOfMatrix(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    let length = matrix[i].length;
    for (let j = 0; j < length; j++) {
      if (matrix[i][j] === 0) {
        let item = j;
        for (let i = 0; i < matrix.length; i++) {
          matrix[i].splice(item, 1);
        }
        length--;
      }
    }
  }
  return matrix;
}
