// Typings for 2-dimensional array/matrix data structure
export type Matrix<T> = Array<Array<T>>;

// Return true if two matrices are identical, otherwise false
export const checkMatrixEquality = (
  matrix1: Matrix<any>,
  matrix2: Matrix<any>
): boolean => {
  if (
    matrix1.length !== matrix2.length ||
    matrix1[0].length !== matrix2[0].length
  ) {
    return false;
  }

  for (let i = 0; i < matrix1.length; i++) {
    for (let j = 0; j < matrix1[0].length; j++) {
      if (matrix1[i][j] !== matrix2[i][j]) {
        return false;
      }
    }
  }

  return true;
};

// Calculate the sum of all numbers in a matrix
export const calculateMatrixSum = (matrix: Matrix<number>): number =>
  matrix
    .flat()
    .filter((x) => x != null)
    .reduce((sum, item) => sum + item, 0);

// Generate a matrix, given it's size and default value
export const generateMatrix = (
  rows: number,
  columns: number = rows,
  fill: any = 0
): Matrix<any> => {
  const matrix: Matrix<any> = [];

  for (let i = 0; i <= rows; i++) {
    matrix[i] = [];
    for (let j = 0; j <= columns; j++) {
      matrix[i][j] = fill;
    }
  }

  return matrix;
};
