/**
 * https://leetcode.com/problems/palindrome-number/description/
 * Difficulty:Easy
 *
 * Determine whether an integer is a palindrome. Do this without extra space.
  
  Example 1:
  Input: x = 121
  Output: true
  Explanation: 121 reads as 121 from left to right and from right to left.
  
  Example 2:
  Input: x = -121
  Output: false
  Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
  
  Example 3:
  Input: x = 10
  Output: false
  Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
*/



/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    
  //如果是負數直接 flase
  if (x < 0 ) {
    return false;
  }
  var raw = x;
  x = Math.abs(x);
  var p = 0;
  while (x) {
    p = p * 10 + x % 10;
    x = Math.floor(x / 10);
  }
  // console.log(x, p);
  return raw === p;
};