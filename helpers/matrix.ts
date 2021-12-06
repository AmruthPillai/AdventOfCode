// Typings for 2-dimensional array/matrix data structure
export type Matrix<T> = Array<Array<T>>;

/**
 * Helper function to check if two matrices are identical
 *
 * @param  {Matrix<any>} matrix1
 * @param  {Matrix<any>} matrix2
 * @returns {boolean}
 */
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

/**
 * Helper function to calculate the sum of all numbers in a matrix
 *
 * @param  {Matrix<number>} matrix
 * @returns {number}
 */
export const calculateMatrixSum = (matrix: Matrix<number>): number =>
  matrix
    .flat()
    .filter((x) => x != null)
    .reduce((sum, item) => sum + item, 0);

/**
 * Helper function to generate a zero matrix of dimension `rows` x `columns`
 *
 * @param  {number} rows
 * @param  {number=rows} columns
 * @param  {any=0} fill
 * @returns {number}
 */
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
