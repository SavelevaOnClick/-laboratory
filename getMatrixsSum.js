function getMatrixAddition(matrix1, matrix2) {
  const matrixResult = [];
  for (let i = 0; i < matrix1.length; i++) {
    matrixResult.push([]);
    for (let j = 0; j < matrix1[i].length; j++) {
      matrixResult[i][j] = matrix1[i][j] + matrix2[i][j];
    }
  }
  return matrixResult;
}
