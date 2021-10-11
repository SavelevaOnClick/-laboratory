function getMatrixAddition(matrix1, matrix2, index1, index2, matrixResult) {
  matrixResult = matrixResult || [];
  index1 = index1 || 0;
  index2 = index2 || 0;
  if (index2 === 0) {
    matrixResult.push([]);
  }
  matrixResult[index1][index2] =
    matrix1[index1][index2] + matrix2[index1][index2];
  if (++index2 < matrix1[index1].length) {
    getMatrixAddition(matrix1, matrix2, index1, index2, matrixResult);
  } else if (++index1 < matrix1.length) {
    index2 = 0;
    getMatrixAddition(matrix1, matrix2, index1, index2, matrixResult);
  }
  return matrixResult;
}
