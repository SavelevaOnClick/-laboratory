function deleteStringOfMatrix(matrix, index1, index2) {
  index1 = index1 || 0;
  index2 = index2 || 0;
  let length = matrix[index1].length;
  if (matrix[index1][index2] === 0) {
    matrix.splice(index1, 1);
    --length;
  }

  if (++index2 < length) {
    deleteStringOfMatrix(matrix, index1, index2);
  } else if (++index1 < matrix.length) {
    index2 = 0;
    deleteStringOfMatrix(matrix, index1, index2);
  }

  return matrix;
}
function deleteColumnOfMatrix(matrix, index1, index2) {
  index1 = index1 || 0;
  index2 = index2 || 0;
  if (matrix[index1][index2] === 0) {
    for (let index1 = 0; index1 < matrix.length; index1++) {
      matrix[index1].splice(index2, 1);
    }
  }
  if (++index2 < matrix[index1].length) {
    deleteColumnOfMatrix(matrix, index1, index2);
  } else if (++index1 < matrix.length) {
    index2 = 0;
    deleteColumnOfMatrix(matrix, index1, index2);
  }
  return matrix;
}
