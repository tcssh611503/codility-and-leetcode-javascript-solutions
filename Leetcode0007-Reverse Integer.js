/**
 * https://leetcode.com/problems/reverse-integer/description/
 * Difficulty:Easy
 *
 * Given a 32-bit signed integer, reverse digits of an integer.
 *
 * Example 1:
 * Input: 123
 * Output:  321
 * Example 2:
 * Input: -123
 * Output: -321
 * Example 3:
 * Input: 120
 * Output: 21
 * Note:
 * Assume we are dealing with an environment which could only hold integers within the 32-bit signed integer range.
 * For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
 */

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    //  三元判斷式 
      let isNegative = x < 0 ? -1 : 1
    //  轉正整數，轉字串的方法 +""
      let str = Math.abs(x) +""
    //  轉數字的方法 -0
      let strArr = str.split("").reverse().join("")-0
      let returnInt = strArr = strArr * isNegative
      if(returnInt < -2147483648 || returnInt >2147483647)return 0
      return returnInt 
};