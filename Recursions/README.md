# JavaScript Recursion Examples

This repository contains implementations of common recursive algorithms in JavaScript, including factorial calculation, array sum computation, and Fibonacci sequence generation.

## Table of Contents

1. [Factorial](#factorial)
2. [Array Sum](#array-sum)
3. [Fibonacci Sequence](#fibonacci-sequence)
4. [Problem-Solving Techniques](#problem-solving-techniques)

## Factorial

The factorial of a number n (written as n!) is the product of all positive integers less than or equal to n.

```javascript
function factorial(n) {
  if (n < 2) {
    return 1;
  }
  return n * factorial(n - 1);
}
```

### Example

```javascript
factorial(5) = 5 * 4 * 3 * 2 * 1 = 120
factorial(0) = 1
```

### How it works

1. Base case: If n < 2, return 1 (covers both 0! and 1!)
2. Recursive case: Multiply n by factorial of (n-1)
3. Time complexity: O(n)
4. Space complexity: O(n) due to recursive call stack

## Array Sum

Two different approaches to calculate the sum of array elements recursively.

### Approach 1: Using pop()

```javascript
function sumOfArray(arr) {
  if (arr.length === 0) {
    return 0;
  }
  const lastElement = arr.pop();
  return lastElement + sumOfArray(arr);
}
```

### Approach 2: Using index

```javascript
function sumOfArray(arr, n) {
  if (n === 0) {
    return 0;
  }
  return arr[n - 1] + sumOfArray(arr, n - 1);
}
```

### Comparison of Approaches

#### Approach 1 (pop method)

- Modifies the original array
- More space-efficient
- Simpler to understand
- Not suitable when array needs to be preserved

#### Approach 2 (index method)

- Preserves the original array
- Requires additional parameter (n)
- More flexible for different array portions
- Better for production code

### Example

```javascript
sumOfArray([1, 2, 3, 4, 5], 5) = 15
```

## Fibonacci Sequence

The Fibonacci sequence is a series where each number is the sum of the two preceding ones.

```javascript
function fibbo(n) {
  if (n < 2) {
    return n;
  }
  return fibbo(n - 1) + fibbo(n - 2);
}
```

### Sequence

```
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
```

### Mathematical Definition

- F(0) = 0
- F(1) = 1
- F(n) = F(n-1) + F(n-2) for n > 1

### How it works

1. Base cases:
   - If n = 0, return 0
   - If n = 1, return 1
2. Recursive case: Return sum of previous two numbers
3. Time complexity: O(2ⁿ) - exponential
4. Space complexity: O(n) due to recursive call stack

### Example

```javascript
fibbo(5) calculation:
                  fibbo(5)
                /          \
            fibbo(4)      fibbo(3)
           /      \       /      \
      fibbo(3)  fibbo(2) fibbo(2) fibbo(1)
      /     \    /    \   /    \
fibbo(2) fibbo(1) ... ... ...  ...

fibbo(5) = 5
```

## Problem-Solving Techniques

When solving recursive problems, follow these steps:

1. **Identify Base Case(s)**

   - Simplest possible input
   - Case where no recursion is needed
   - Usually returns a constant value

2. **Define Recursive Case**

   - Break problem into smaller subproblems
   - Ensure progression toward base case
   - Combine solutions of subproblems

3. **Verify Solution**
   - Test with base cases
   - Test with small inputs
   - Verify larger inputs
   - Check edge cases

### Common Pitfalls to Avoid

1. Missing base case
2. Base case unreachable
3. Stack overflow from excessive recursion
4. Inefficient recursive solutions (consider dynamic programming)
5. Modifying input data unintentionally

## Practice Exercise

Try implementing these recursive functions:

1. Calculate product of array elements
2. Find power of a number (x^n)
3. Calculate GCD of two numbers
4. Count digits in a number
5. Reverse a string

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is licensed under the MIT License - see the LICENSE file for details.
