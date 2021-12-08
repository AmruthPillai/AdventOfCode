/**
 * Helper function to memoize a function to perform better by caching it's results
 *
 * @param  {Function} fn
 * @returns {Function} Memoized Function
 */
export const memoize = (fn: Function): Function => {
  const cache = {};

  return (...args: any[]) => {
    const key = JSON.stringify(args);

    if (cache[key]) {
      return cache[key];
    }

    const result = fn(...args);

    cache[key] = result;

    return result;
  };
};
