# JavaScript Array Operations Guide

This repository contains examples of common array operations in JavaScript, demonstrating various methods to manipulate and work with arrays effectively.

## Table of Contents

1. [Array Creation](#array-creation)
2. [Accessing Elements](#accessing-elements)
3. [Adding and Removing Elements](#adding-and-removing-elements)
4. [Array Iteration](#array-iteration)
5. [Search Operations](#search-operations)
6. [Array Modification](#array-modification)
7. [Array Copying](#array-copying)
8. [Array Comparison](#array-comparison)
9. [Sorting and Reversing](#sorting-and-reversing)
10. [Array Methods](#array-methods)

## Array Creation

```javascript
// Creating an array with elements
const arr = [1, 2, 3, 4, "Hello", { name: "Nemish" }, [1, 2, 3]];

// Alternative method using Array constructor
const arr2 = new Array();
```

## Accessing Elements

```javascript
// Access first element (O(1) operation)
const firstElement = arr[0];

// Access last element
const lastElement = arr[arr.length - 1];
```

## Adding and Removing Elements

```javascript
// Remove last element (O(1) operation)
arr.pop();

// Add element to end (O(1) operation)
arr.push(5);

// Add element to start (O(N) operation)
arr.unshift(0);

// Remove first element (O(N) operation)
arr.shift();
```

## Array Iteration

Three common ways to iterate through arrays:

```javascript
// Traditional for loop
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// forEach method
arr.forEach((x, i) => {
  console.log(x);
});

// for...of loop
for (let x of arr) {
  console.log(x);
}
```

## Search Operations

```javascript
// Check if element exists (custom implementation)
const findElement = (arr, target) => {
  for (let x of arr) {
    if (x === target) return true;
  }
  return false;
};

// Find element index (custom implementation)
const findElementIndex = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
};

// Built-in method
arr.indexOf("Hello");
```

## Array Modification

Using splice for deletion, addition, and updating:

```javascript
// Delete elements
arr.splice(1, 3);

// Add elements at specific index
arr.splice(1, 0, 2, 3, 4);

// Update elements
arr.splice(1, 3, 6, 7, 8);

// Create sub-array (slice)
const subArr = arr.slice(1, 4);
```

## Array Copying

```javascript
// Shallow copy (reference copy)
const arrB = arr;

// Deep copy methods
const arrC = [...arr]; // Spread operator
const arrD = Array.from(arr); // Array.from()
const arrE = arr.concat(); // concat()
```

## Array Comparison

```javascript
const isArrayEqual = (arr1, arr2) => {
  return (
    arr1.length === arr2.length && arr1.every((ele, i) => arr1[i] === arr2[i])
  );
};
```

## Sorting and Reversing

```javascript
// Sorting
arr.sort(); // Default sort
arr.sort((a, b) => b - a); // Custom sort (descending)

// Reversing
arr.reverse();
```

## Array Methods

Advanced array operations:

```javascript
// Map: Transform elements
const squared = arr.map((ele) => ele ** 2);

// Filter: Get elements matching condition
const positiveNumbers = arr.filter((ele) => ele > 0);

// Reduce: Accumulate values
const sum = arr.reduce((acc, ele) => acc + ele, 0);

// Flat: Flatten nested arrays
const flatArray = arr.flat(depth);

// Find: Get first matching element
const firstPositive = arr.find((ele) => ele > 0);
```

## Time Complexity

- Accessing elements: O(1)
- Push/Pop operations: O(1)
- Unshift/Shift operations: O(N)
- Splice operations: O(N)
- Sorting: O(N log N)
- Search operations: O(N)

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is licensed under the MIT License - see the LICENSE file for details.
