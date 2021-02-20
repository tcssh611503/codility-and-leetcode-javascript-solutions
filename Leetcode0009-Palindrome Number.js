/**
 * https://leetcode.com/problems/palindrome-number/description/
 * Difficulty:Easy
 *
 * Determine whether an integer is a palindrome. Do this without extra space.
 */

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    //如果是負數直接 flase
   if (x < 0 ) return false;
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