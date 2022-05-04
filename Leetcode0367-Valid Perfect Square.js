/**
 * https://leetcode.com/problems/valid-perfect-square/description/
 * Difficulty:Easy
 *
Given a positive integer num, write a function which returns True if num is a perfect square else False.
Follow up: Do not use any built-in library function such as sqrt.

Example 1:
Input: num = 16
Output: true
Example 2:
Input: num = 14
Output: false
 */

var isPerfectSquare = function(num) {
for(var i = 1; i <= num / i; i++) {
  if (i * i === num) {
    return true;
  }
}

return false;
};