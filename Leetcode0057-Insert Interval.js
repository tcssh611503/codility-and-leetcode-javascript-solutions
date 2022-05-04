/**
 * https://leetcode.com/problems/insert-interval/description/
 * Difficulty:Medium
Given a set of non-overlapping intervals, insert a new interval into the intervals (merge if necessary).
You may assume that the intervals were initially sorted according to their start times.


Example 1:

Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
Output: [[1,5],[6,9]]
Example 2:

Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
Output: [[1,2],[3,10],[12,16]]
Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].
Example 3:

Input: intervals = [], newInterval = [5,7]
Output: [[5,7]]
Example 4:

Input: intervals = [[1,5]], newInterval = [2,3]
Output: [[1,5]]
Example 5:

Input: intervals = [[1,5]], newInterval = [2,7]
Output: [[1,7]]

 */


/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    
  //沒有區間時return[];
  if (!intervals || intervals.length === 0) return [newInterval]
  let result = [];
  var i = 0;
  // 原本區間的最大值大於新區間
  for ( null; i < intervals.length; i++) {
    if (intervals[i][1] >= newInterval[0]) break;
    else result.push(intervals[i]);
  }
  
  // 新區間大於原本區間，新區間的第一個元素取代第一個元素
  if (i < intervals.length && newInterval[0] > intervals[i][0]) {
    newInterval[0] = intervals[i][0]
  }
   // 新區間大於原本區間，新區間的最大元素取代第二個元素
  for ( null ; i < intervals.length; i++) {
    if (newInterval[1] < intervals[i][0]) break;
    newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
  }
  result.push(newInterval);
  
  for (null ; i < intervals.length; i++) {
    result.push(intervals[i]);
  }
  
  return result;
  
  
};
 