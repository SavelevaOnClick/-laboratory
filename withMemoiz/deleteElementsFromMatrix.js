function creationOfMemorization() {
  let memo = {};
  return function deleteStringOfMatrix(matrix, matrixResult, index1, index2) {
    if (memo[matrix] !== undefined) {
      return memo[matrix];
    }

    index1 = index1 || 0;
    index2 = index2 || 0;
    matrixResult = matrixResult || JSON.parse(JSON.stringify(matrix));
    let length = matrixResult[index1].length;

    if (matrixResult[index1][index2] === 0) {
      matrixResult.splice(index1, 1);
      --length;
    }

    if (++index2 < length) {
      deleteStringOfMatrix(matrix, matrixResult, index1, index2);
    } else if (++index1 < matrixResult.length) {
      index2 = 0;
      deleteStringOfMatrix(matrix, matrixResult, index1, index2);
    }

    memo[matrix] = matrixResult;
    return matrixResult;
  };
}

function creationOfMemorization() {
  let memo = {};
  return function deleteColumnOfMatrix(matrix, index1, index2, matrixKey) {
    if (memo[matrix] !== undefined) {
      return memo[matrix];
    }

    matrixKey = matrixKey || JSON.parse(JSON.stringify(matrix));
    index1 = index1 || 0;
    index2 = index2 || 0;

    if (matrix[index1][index2] === 0) {
      for (let index1 = 0; index1 < matrix.length; index1++) {
        matrix[index1].splice(index2, 1);
      }
    }

    if (++index2 < matrix[index1].length) {
      deleteColumnOfMatrix(matrix, index1, index2, matrixKey);
    } else if (++index1 < matrix.length) {
      index2 = 0;
      deleteColumnOfMatrix(matrix, index1, index2, matrixKey);
    }

    memo[matrixKey] = matrix;
    return matrix;
  };
}
