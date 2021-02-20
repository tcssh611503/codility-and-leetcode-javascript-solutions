/**
 * https://leetcode.com/problems/roman-to-integer/description/
 * Difficulty:Easy
 *
 * Given a roman numeral, convert it to an integer.
 * Input is guaranteed to be within the range from 1 to 3999.
 */

/**
 *
 * I V  X  L  C   D   M
 * 1 5 10 50 100 500 1000
 * 相应的阿拉伯数字表示
 *
 *
 * @param {string} s
 * @return {number}
 */

var romanToInt = function(s) {
    //如果沒有字串回傳0
    if (!s) return 0;

    var map = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    
    var sum = map[s[s.length - 1]];
    for (var i = s.length - 2; i >= 0; i--) {
        if (map[s[i]] < map[s[i + 1]]) {
            sum -= map[s[i]];
        }
        else {
            sum += map[s[i]];
        }
    }
    return sum;
    
};