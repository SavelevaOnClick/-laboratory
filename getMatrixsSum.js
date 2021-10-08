function getMatrixAddition(matrix1, matrix2) {
  const matrixResult = [];
  for (let i = 0; i < matrix1.length; i++) {
    matrixResult.push([]);
    for (let j = 0; j < matrix1[i].length; j++) {
      let sum = matrix1[i][j] + matrix2[i][j];
      matrixResult[i][j] = sum;
    }
  }
  return matrixResult;
}
