// Lesson 1 - Iterations
function BinaryGap(N) {
    // write your code in JavaScript (Node.js 8.9.4)
    // decimal to binary 
    const number = N.toString(2)
    //  split array 's by 1'
    return number.split("1")
    // calculate array's length by reduce
                 .reduce((answer,value,index,array)=>{
                     if (value 
                        && value.length>answer
                        && array[index -1] !== undefined 
                        && array[index +1] !== undefined
                        ) return value.length
                     return answer
                 }
                 ,0)
}

// Lesson 2 - Arrays
function CyclicRotation(A, K) {
    // write your code in JavaScript (Node.js 8.9.4)
    let result = []
    result = A
    // check []
    if (!result.length) return result
    // pop : take last element from array
    // unshift: add element to the beginning of array 
    for (i = 0 ; i < K ; i++){
        result.unshift(result.pop())
    }
    
    return result
}


// https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
function OddOccurrencesInArray1(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    var dict = {} ;
    for ( var i= 0 ; i< A.length ; i ++){
        if ( A[i] in dict ){
            delete dict[A[i]];
        }else{
            dict[A[i]] = 1 ;
        }
    }
    // parseInt 轉為數字
    //   dictOne   Object { 1: 1}
    //   Object.keys(dictOne)  ["1"]
    //   parseInt(Object.keys(dictOne)  1
    //   parseInt(Object.keys(dictOne)[0] 取物件第一個
    return parseInt(Object.keys(dict)[0])
}




function OddOccurrencesInArray2(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let count = 0
    for (i = 0 ; i < A.length ; i ++){
        for (j = 0 ; j < A.length ; j ++){
            // if paired , count is 2 
            if (A[i] == A[j])
                {count++}
        }
        // if unpaired ,count % 2 is 1 
        if (count % 2 != 0) return A[i]
        count = 0
    }
    return  OddOccurrencesInArray2(A)
    
}


function OddOccurrencesInArray3(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    
    let result = A
    return result.slice( 1 )
                 .reduce( 
                     ((odd , currentvalue )=>{
                        return odd ^ currentvalue}
                        ) ,result[0])

} 

// Lesson 3 - Time Complexity


// https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil
function FrogJmp(X, Y, D) {
    // write your code in JavaScript (Node.js 8.9.4)
    if (X == Y) {return 0}
    else if (D > (Y-X)) { return 1}
    else { 
        return Math.ceil((Y-X)/D)
    }
    
}

function PermMissingElem(A) {
    // write your code in JavaScript (Node.js 8.9.4)
     if (A.length === 0) return 1
     // find max number
     let Along = A.length + 1
     // total value use trapezoid formula
     let total = ( (1 + Along)*Along/2)
     // total value - all A[i] 
     for ( i = 0 ; i < A.length ; i++ )
     {
         total = total - A [i]
     }
   return total
 
}



function TapeEquilibrium(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let sum1 = 0
    let sum2 = A.reduce(( a , b ) => ( a + b )   )
    
    let mindiff = Infinity
    
    for (i = 0 ; i < (A.length-1) ; i++){
      sum1 += A[i]
      sum2 -= A[i]
      let diff = sum2 - sum1
      mindiff = Math.min(mindiff, Math.abs(diff))
  
    }
    return mindiff
  
}


function FrogRiverOne(X, A) {
    // write your code in JavaScript (Node.js 8.9.4)
    // 建立葉子集合
    let leaves = new Set()
    for ( i=0 ; i<A.length ; i++ ){
        //有跳到就放入葉子集合 
        leaves.add(A[i])
        if (leaves.size == X)return i
    } 
    
    return -1
}



// Leetcode

var twoSum = function(nums, target) {

    for(var i = 0 ; i < nums.length ; i++){
        var v = nums[i];

        for(var j = i+1 ; j < nums.length ; j++ ){
            if(  nums[i] + nums[j]  == target ){
                return [i,j];
            }
        }

    } 
};

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


var ReverseInteger = function(x) {
//  三元判斷式 
  let isNegative = x < 0 ? -1 : 1
//  轉正整數，轉字串的方法 +""
  let str = Math.abs(x) +""
//  轉數字的方法 -0
  let strArr = str.split("").reverse().join("")-0
  let returnInt = strArr = strArr * isNegative
  if(returnInt < -2147483648 || returnInt >2147483647)return 0
  return returnInt 
};


var ReverseString = function(s) {
    arr = s.reverse()
    return arr
}