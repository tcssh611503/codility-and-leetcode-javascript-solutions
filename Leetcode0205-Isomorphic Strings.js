/**
 * https://leetcode.com/problems/isomorphic-strings/description/
 * Difficulty:Easy
 *
Given two strings s and t, determine if they are isomorphic.

Two strings are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character but a character may map to itself.

    Example 1:
    Input: s = "egg", t = "add"
    Output: true
    
    Example 2:
    Input: s = "foo", t = "bar"
    Output: false
    
    Example 3:
    Input: s = "paper", t = "title"
    Output: true
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isIsomorphic = function(s, t) {
  if (s.length !== t.length) {
    return false;
  }
  let map_s = {};
  let map_t = {};
  for (let i = 0; i < s.length; i++) {
    let s_value = s[i]; 
    let t_value = t[i];

    // if t_value is already mapped
    if ((t_value in map_t) && (map_t[t_value] !== s_value)) {
      return false
    }

    // if value is not mapped，map s_value with t_value
    if (!(s_value in map_s)) {
      map_s[s_value] = t_value 
      map_t[t_value] = s_value
    }
    
    // if s_value is mapped to something different than t_value, strings aren't isomorphic
    if (map_s[s_value] !== t_value) {
      return false
    }
  }
// console.log("map_s", map_s);
// console.log("map_t", map_t);

  return true;
};

// isIsomorphic("ABC", "DEF");
// isIsomorphic("badc", "baba");