/**
 * Helper function to peek into the last item of the array,
 * typically performed on a stack
 *
 * @param  {Array<T>} array
 * @returns {T}
 */
export const peek = <T>(array: Array<T>): T => array[array.length - 1];
