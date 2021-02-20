/**
 * https://leetcode.com/problems/sum-of-two-integers/description/
 * Difficulty:Medium
 *
Calculate the sum of two integers a and b, but you are not allowed to use the operator + and -.

Example 1:

Input: a = 1, b = 2
Output: 3
Example 2:

Input: a = -2, b = 3
Output: 1

 //https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
  
    const sum = a ^ b; // XOR derives the sum bits, without carry
    const carry = (a & b) << 1; // AND derives the carry bits
  
    if (!carry) {
      return sum;
    }
  
    return getSum(sum, carry);
      
  }
  
  
  
  function getSum2(a, b) {
      var s1, s2;
      
      s1 = parseNumberToStringWithPN(num1);
      s2 = parseNumberToStringWithPN(num2);
  
      // Change number to the string whose length is same as the value. 'p' means positive and 'n' means negative.
      // EX. 2 => pp
      // EX. -4 => nnnn
      function parseNumberToStringWithPN(num) {
          if(num >= 0) {
              return 'p'.repeat(num);
          } else {
              return 'n'.repeat(num*-1);
          }
      }
  
      // If one number is positive and another is negative, using substr() to both strings until anyone's length to be 0
      if((num1 < 0 || num2 < 0) && !(num1 < 0 && num2 < 0)) {
          do {
              s1 = s1.substr(1);
              s2 = s2.substr(1);
          } while(s1.length > 0 && s2.length > 0);
      }
      
      // Use concat() for adding two variables
      var result = s1.concat(s2);
      
      if(result.indexOf('n') > -1) { 
          // Negative result
          return result.length * -1;
      } else { 
          // Positive result
          return result.length;
      }
  }