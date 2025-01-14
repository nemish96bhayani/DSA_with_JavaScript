// Factorial of a Number

/**
 * 5! = 5 * 4 * 3 * 2 * 1 = 120
 * 0! = 1
 *
 */

function factorial(n) {
  if (n < 2) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(8));

//sum of  a array: Given an array, return sum of it's all elements

// function sumOfArray(arr) {
//   if (arr.length === 0) {
//     return 0;
//   }
//   const lastElement = arr.pop();
//   return lastElement + sumOfArray(arr);
// }

function sumOfArray(arr, n) {
  if (n === 0) {
    return 0;
  }
  return arr[n - 1] + sumOfArray(arr, n - 1);
}

console.log(sumOfArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10));

// Home Work Questions: Find the product of elements of an array

// fibbonacci Number

/**
 * Fibonacci: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
 *
 * F(0) = 0, F(1) = 1, F(n) = F(n - 1) + F(n - 2)
 *
 */

function fibbo(n) {
  if (n < 2) {
    return n;
  }
  return fibbo(n - 1) + fibbo(n - 2);
}

console.log(fibbo(10));

