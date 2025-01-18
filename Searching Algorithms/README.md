# JavaScript Searching Algorithms

This repository contains implementations of common searching algorithms in JavaScript, including Linear Search, Binary Search, and special variations like Floor/Ceiling value finding.

## Table of Contents

1. [Linear Search](#linear-search)
2. [Binary Search](#binary-search)
3. [Floor and Ceiling Values](#floor-and-ceiling-values)
4. [Built-in Search Methods](#built-in-search-methods)

## Linear Search

A simple searching algorithm that checks each element in sequence.

```javascript
const linearSearch = (arr, target) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
};
```

### Characteristics
- Time Complexity: O(n)
- Space Complexity: O(1)
- Works on both sorted and unsorted arrays
- Best for small arrays or unsorted data

### Example
```javascript
const arr = [1, 2, 6, 9, 0, -5];
console.log(linearSearch(arr, 9)); // Output: 3
```

## Binary Search

A more efficient search algorithm for sorted arrays that repeatedly divides the search interval in half.

### Iterative Implementation
```javascript
const binarySearch = (arr, target) => {
    let start = 0;
    let end = arr.length - 1;
    
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] > target) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return -1;
};
```

### Recursive Implementation
```javascript
const binarySearchRecursion = (arr, target) => {
    return binarySearchUtil(arr, target, 0, arr.length);
};

const binarySearchUtil = (arr, target, start, end) => {
    if (start > end) {
        return -1;
    }
    
    let mid = Math.floor((start + end) / 2);
    
    if (arr[mid] === target) {
        return mid;
    } else if (arr[mid] > target) {
        return binarySearchUtil(arr, target, start, mid - 1);
    } else {
        return binarySearchUtil(arr, target, mid + 1, end);
    }
};
```

### Characteristics
- Time Complexity: O(log n)
- Space Complexity: O(1) for iterative, O(log n) for recursive
- Requires sorted array
- More efficient for large datasets

### Example
```javascript
const sortedArr = [1, 4, 6, 9, 12, 15];
console.log(binarySearch(sortedArr, 9)); // Output: 3
```

## Floor and Ceiling Values

Finding the floor (largest number ≤ target) and ceiling (smallest number ≥ target) values in a sorted array.

```javascript
const floorCeil = (arr, target) => {
    let start = 0;
    let end = arr.length;
    let floor = -1;
    let ceil = -1;
    
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        
        if (arr[mid] === target) {
            floor = mid;
            ceil = mid;
            return [ceil, floor];
        } else if (arr[mid] > target) {
            ceil = mid;
            end = mid - 1;
        } else {
            floor = mid;
            start = mid + 1;
        }
    }
    
    return [ceil, floor];
};
```

### Example
```javascript
const arr = [1, 5, 8, 11, 12];
console.log(floorCeil(arr, 9));
// Floor value: 8 (largest number ≤ 9)
// Ceiling value: 11 (smallest number ≥ 9)
```

## Built-in Search Methods

JavaScript provides several built-in methods for searching:

### Array Methods
```javascript
const arr = [1, 2, 6, 9, 0, -5];

// Check if element exists
console.log(arr.includes(9));          // true

// Find index of element
console.log(arr.indexOf(9));           // 3

// Find first element matching condition
console.log(arr.find(num => num > 0)); // 1

// Find index of first matching element
console.log(arr.findIndex(num => num < 0)); // 5
```

### String Methods
- `match()`: Returns matches against a regular expression
- `search()`: Returns index of first match against a regular expression
- `indexOf()`: Returns index of first occurrence of substring
- `includes()`: Checks if string contains substring

## Best Practices

1. **Choose the Right Algorithm**
   - Use Linear Search for small or unsorted arrays
   - Use Binary Search for large sorted arrays
   - Use built-in methods for simple searches

2. **Consider the Data**
   - Is the data sorted?
   - How large is the dataset?
   - How frequent are the searches?

3. **Error Handling**
   - Check for empty arrays
   - Handle invalid inputs
   - Consider edge cases

## Common Interview Questions

1. When would you choose Linear Search over Binary Search?
2. How to handle duplicates in Binary Search?
3. How to find the first and last occurrence of an element?
4. Implement Binary Search with rotated sorted array
5. Find the peak element in a mountain array

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is licensed under the MIT License - see the LICENSE file for details.