/**
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/
 * Difficulty:Easy
Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length.
Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  
    let result = 1
    const len = nums.length
    for(i=1 ; i<len; i++ ){
        if(nums[i] != nums[i-1] ){
            nums[result] = nums[i];
            result++
        }
        
    }
     
    nums = nums.slice(0, result)
    return result
 };
 