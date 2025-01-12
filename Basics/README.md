# JavaScript Coding Problems

A collection of common JavaScript coding problems and their solutions. Each problem includes a detailed explanation and implementation.

## Problems Included

1. [Sum of Natural Numbers](#1-sum-of-natural-numbers)
2. [Sum of Digits](#2-sum-of-digits)
3. [Count Digits](#3-count-digits)
4. [Palindrome Number](#4-palindrome-number)
5. [Fibonacci Number](#5-fibonacci-number)
6. [Missing Number](#6-missing-number)

## Problem Solutions

### 1. Sum of Natural Numbers

Calculates the sum of all numbers from 1 to n.

```javascript
function sumOfNatureNumber(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
}
```

**Example Usage:**

```javascript
console.log(sumOfNatureNumber(5)); // Output: 15
console.log(sumOfNatureNumber(15)); // Output: 120
console.log(sumOfNatureNumber(10)); // Output: 55
```

### 2. Sum of Digits

Calculates the sum of all digits in a given number.

```javascript
function sumOfDigits(num) {
  let sum = 0;
  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
}
```

**Example Usage:**

```javascript
console.log(sumOfDigits(1287)); // Output: 18 (1+2+8+7)
```

### 3. Count Digits

Counts the number of digits in a given number.

```javascript
function countDigits(num) {
  num = Math.abs(num);
  let count = 0;
  do {
    count++;
    num = Math.floor(num / 10);
  } while (num > 0);
  return count;
}
```

**Example Usage:**

```javascript
console.log(countDigits(-1211413131)); // Output: 10
```

### 4. Palindrome Number

Determines if a given number is a palindrome (reads the same forwards and backwards).

```javascript
function isPalindrome(x) {
  let copyNum = x,
    reverseNum = 0;
  while (copyNum > 0) {
    const lastDigit = copyNum % 10;
    reverseNum = reverseNum * 10 + lastDigit;
    copyNum = parseInt(copyNum / 10);
  }
  return x === reverseNum;
}
```

**Example Usage:**

```javascript
console.log(isPalindrome(121)); // Output: true
console.log(isPalindrome(123)); // Output: false
console.log(isPalindrome(1221)); // Output: true
```

### 5. Fibonacci Number

Finds the nth number in the Fibonacci sequence.

```javascript
function fib(n) {
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
}
```

**Example Usage:**

```javascript
console.log(fib(5)); // Output: 5
console.log(fib(6)); // Output: 8
console.log(fib(7)); // Output: 13
```

### 6. Missing Number

Finds the missing number in an array containing n distinct numbers in the range [0, n].

```javascript
// Solution 1: Using Loop
function missingNumber(nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return (nums.length * (nums.length + 1)) / 2 - sum;
}

// Solution 2: One-Line Solution using reduce
const missingNumberOneLine = (nums) =>
  (nums.length * (nums.length + 1)) / 2 -
  nums.reduce((acc, curr) => acc + curr, 0);
```

**Example Usage:**

```javascript
console.log(missingNumber([3, 0, 1])); // Output: 2
console.log(missingNumber([0, 1])); // Output: 2
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])); // Output: 8
```

## Contributing

Feel free to contribute to this repository by:

1. Forking the repository
2. Creating a new branch for your feature
3. Submitting a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
