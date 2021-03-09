/**
 * https://leetcode.com/problems/first-unique-character-in-a-string/description/
 * Difficulty:Easy
 *
Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode"
return 2.

 */


/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    // Convert String to Character Array
    let charArray = s.split("");
    //Create map object to check the first non-repeating character in the Array
       let map = {};
        for (let i =0; i < charArray.length ; i++){
           // to count the number of times each key appears in the array
          if(map[charArray[i]] == undefined  ){
             //value    key 
             map[charArray[i]] = 1;
          }else{
            map[charArray[i]] +=1;
          }
        }
      
      for (const key in map) {
          //first non-repeating in map 
          if( map[key] == 1) {
           //look up array
           let index = charArray.indexOf(key);
           return index;
           break;
          }
      }
  
      return -1;
  
  };