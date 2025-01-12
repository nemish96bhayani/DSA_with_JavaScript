/*

Question 1: sum of all numbers from 1 to n

sum of 1 to 5: 15

*/

function sumOfNatureNumber(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
}

console.log(sumOfNatureNumber(5));
console.log(sumOfNatureNumber(15));
console.log(sumOfNatureNumber(10));

/*
  
  Question 2: Sum of digits of number
  
  1287: 1+2+8+7 = 18
  
  */

function sumOfDigits(num) {
  let sum = 0;
  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
}

console.log(sumOfDigits(1287));

/*
  
  Question: 3 Count the number of digits of a number
  
  */

function countDigits(num) {
  num = Math.abs(num);
  let count = 0;
  do {
    count++;
    num = Math.floor(num / 10);
  } while (num > 0);
  return count;
}

// console.log(countDigits(121));
console.log(countDigits(-1211413131));

/*

  Question: 4 Given an integer x, return true if x is palindrome and false otherwise.
  A palindrome is a number that remains the same when its digits are reversed.

  */

let isPalindrome = function (x) {
  let copyNum = x,
    reverseNum = 0;

  while (copyNum > 0) {
    const lastDigit = copyNum % 10;
    reverseNum = reverseNum * 10 + lastDigit;
    copyNum = parseInt(copyNum / 10);
  }

  return x === reverseNum;
};

console.log(isPalindrome(121));
console.log(isPalindrome(123));
console.log(isPalindrome(1221));

/*

Question: 5 find nth fibonacci number
The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1.  
*/

let fib = function (n) {
  if (n < 2) {
    return n;
  }

  let prev = 0,
    curr = 1,
    next;
  for (let i = 2; i <= n; i++) {
    next = prev + curr;
    prev = curr;
    curr = next;
  }
  return next;
};

// fibonacci series: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...
console.log(fib(5)); // 5
console.log(fib(6)); // 8
console.log(fib(7)); // 13
console.log(fib(8)); // 21
console.log(fib(9)); // 34

/*

Question: 6 Missing Number
Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

*/

let missingNumber = function (nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return (nums.length * (nums.length + 1)) / 2 - sum;
};

//One Line Solution:
let missingNumber = (nums) =>
  (nums.length * (nums.length + 1)) / 2 -
  nums.reduce((acc, curr) => acc + curr, 0);

console.log(missingNumber([3, 0, 1])); // 2
console.log(missingNumber([0, 1])); // 2
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])); // 8
