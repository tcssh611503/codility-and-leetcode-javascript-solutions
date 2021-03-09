/**
 * https://leetcode.com/problems/remove-element/description/
 * Difficulty:Easy
Given an array nums and a value val, remove all instances of that value in-place and return the new length.
Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
The order of elements can be changed. It doesn't matter what you leave beyond the new length.
 */

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {

    var result = 0
    const max = nums.length
    for(var i = 0; i<max ; i++){
       if(nums[i] != val ){
          nums[result ++] = nums[i];
        } 
    }

        
  return result 
};
 