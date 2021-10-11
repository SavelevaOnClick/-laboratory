function getTranspositionMatrix(matrix, index1, index2) {
  index1 = index1 || 0;
  index2 = index2 || 0;
  let bufferVariable = matrix[index1][index2];
  matrix[index1][index2] = matrix[index2][index1];
  matrix[index2][index1] = bufferVariable;
  if (++index2 < index1) {
    getTranspositionMatrix(matrix, index1, index2);
  } else if (++index1 < matrix.length) {
    index2 = 0;
    getTranspositionMatrix(matrix, index1, index2);
  }
  return matrix;
}
