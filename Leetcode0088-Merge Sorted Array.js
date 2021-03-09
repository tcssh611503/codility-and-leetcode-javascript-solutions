/**
 * https://leetcode.com/problems/merge-sorted-array/description/
 * Difficulty:Easy
Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

The number of elements initialized in nums1 and nums2 are m and n respectively. You may assume that nums1 has a size equal to m + n such that it has enough space to hold additional elements from nums2.

Example 1:

Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Example 2:

Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]


 */

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    
    let i = m -1;
    let j = n -1;
    let total = m + n -1 ;
    
    while (j >= 0) {
        nums1[total--] = i >= 0 && nums1[i] > nums2[j] ? nums1[i--] : nums2[j--];
    }
     
    return nums1;

};