/**
 * https://leetcode.com/problems/power-of-three/description/
 * Difficulty:Easy
 *
Given an integer n, return true if it is a power of three. Otherwise, return false.
An integer n is a power of three, if there exists an integer x such that n == 3x.

    Example 1:
    Input: n = 27
    Output: true

    Example 2:
    Input: n = 9
    Output: true
 */

/**
 * @param {number} n
 * @return {boolean}
 */
 var isPowerOfThree_loops = function(n) {
    while(n>2){
      if ((n % 3) !== 0) {
        return false;
      } else {
        n = parseInt(n/3);
      }
    }

    return n === 1;
};

// https://zh.wikipedia.org/wiki/%E5%AF%B9%E6%95%B0#%E8%BF%90%E7%AE%97%E5%85%AC%E5%BC%8F
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  return Number.isInteger(Math.log10(n) / Math.log10(3));
};