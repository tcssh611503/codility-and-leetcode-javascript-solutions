<?php
//Codility-Calculate-the-length-of-the-shortest-array-that-is-required-to-form-a-Binarian-of-an-input-array.php 

// A non-empty zero-indexed array A consisting of N non-negative integers is given. its binarian is defined as:
// binarian(A)=pow2(A[0])+pow2(A[1])+....+pow2(A[N-1])
// where pow2(K)=2^k

// For example, the binarian of array A such that:
// A[0]=1
// A[1]=5
// A[2]=4

// equals 50:

// Write a function:

// class Solution { public int solution(int[] A);}

// that, given an array A consisting of N non-negative integers, returns the length of the shortest array that has the same binarian as array A.

// For example, given an array A such that:
// A[0]=1
// A[1]=0
// A[2]=2
// A[3]=0
// A[4]=0
// A[5]=2

// the function should return 3 because:

// -the binarian of A is 13,
// -array B such that b[0]=3, b[1]=2 and b[2]=0 also has a binarian of 13,
// -there is no shorter array with a binarian of 13.
// Assume that:

// -N is an integer within the range `[1..100000]`;
// -each element of array A is an integer within the range `[0..10000]`.
// Complexity:

// -expected worst-case time complexity is O(N*log(N));
// -expected worst-case space complexity is O(N), beyond input storage (not counting the storage required for input arguments).
// Elements of input array can be modified.

// This question was asked in the coding round. I have solved it in java as given below, but I am not sure whether it is correct or not, so please suggest your solution. 


function solution($A) {
// 1.Calculate Binarian
$binA = 0; 

// Calculate the Binarian value
for ($i=0; $i<count($A); $i++) {
  $binA   = $binA + pow(2, $A[$i]);
}

//2.Calculate the length of the shortest array
$countArray = 0;
$lenA = count($A);

for ($i=$lenA-1 ; $i>=0 ; $i--) {
    $pow = pow(2, $i);

    if($pow == $binA ){
      $countArray ++;
      break;
    } else if ($pow < $binA) {
      $countArray ++;
      $binA =  $binA - $pow;
    }
}

return $countArray;
}

?>
