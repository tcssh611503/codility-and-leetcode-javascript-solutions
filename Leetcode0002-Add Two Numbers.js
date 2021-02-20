/**
 * https://leetcode.com/problems/add-two-numbers/description/
 * Difficulty:Medium
 *
 * You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 * Example
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
 * Explanation: 342 + 465 = 807.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function(l1, l2) {
    var list3 = new ListNode(0); 
    var result = list3; // 使用一個新ListNode來儲存相加的結果

    var carry = 0; // 處理進位
    //當 list1, list2 都沒有值，而且carry也為0的時候才結束迴圈
    while(l1 || l2 || carry > 0){
        sum = 0;

        // list1與list2長度可能不同，分開處理
        if(l1!== null){
            sum += l1.val;
            l1 = l1.next;
        }

        if(l2!==null){
            sum += l2.val;
            l2 = l2.next;
        }
        
        // 如果之前有進位，carry = 1；沒有的話carry = 0
        sum += carry;
        list3.next = new ListNode(sum%10); 
        carry = parseInt(sum/10);

        // list指標向後
        list3 = list3.next;
    }
    // 因為第一個節點為假節點，跳過
    return result.next;
};