function getTranspositionMatrix(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < i; j++) {
      let bufferVariable = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = bufferVariable;
    }
  }
  return matrix;
}
