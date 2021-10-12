function creationOfMemorization() {
  let memo = {};
  return function getTranspositionMatrix(matrix, matrixClone, index1, index2) {
    if (memo[matrix] !== undefined) {
      return memo[matrix];
    }

    index1 = index1 || 0;
    index2 = index2 || 0;
    matrixClone = matrixClone || JSON.parse(JSON.stringify(matrix));
    let bufferVariable = matrixClone[index1][index2];
    matrixClone[index1][index2] = matrixClone[index2][index1];
    matrixClone[index2][index1] = bufferVariable;

    if (++index2 < index1) {
      getTranspositionMatrix(matrix, matrixClone, index1, index2);
    } else if (++index1 < matrixClone.length) {
      index2 = 0;
      getTranspositionMatrix(matrix, matrixClone, index1, index2);
    }

    memo[matrix] = matrixClone;
    return matrixClone;
  };
}
