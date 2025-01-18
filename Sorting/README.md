# JavaScript Sorting Algorithms

This repository contains implementations of common sorting algorithms in JavaScript, including built-in methods and custom implementations of Bubble Sort, Selection Sort, Insertion Sort, Merge Sort, and Quick Sort.

## Table of Contents

1. [Built-in Sorting](#built-in-sorting)
2. [Bubble Sort](#bubble-sort)
3. [Selection Sort](#selection-sort)
4. [Insertion Sort](#insertion-sort)
5. [Merge Sort](#merge-sort)
6. [Quick Sort](#quick-sort)
7. [Comparison](#comparison)

## Built-in Sorting

JavaScript provides built-in methods for basic sorting operations.

### Array.sort()

```javascript
// Numeric sorting
const arr = [-2, -7, 1000, 5];
console.log(arr.sort((a, b) => a - b)); // Ascending: [-7, -2, 5, 1000]
console.log(arr.sort((a, b) => b - a)); // Descending: [1000, 5, -2, -7]

// String sorting
const strArr = ["Mango", "Banana", "Apple"];
console.log(strArr.sort()); // ["Apple", "Banana", "Mango"]

// Sorting string characters
const str = "Nemish";
console.log(str.split("").sort().join("")); // "Nehims"
```

## Bubble Sort

A simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order.

```javascript
const bubbleSort = (arr) => {
  let swapped = false;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
};
```

### Characteristics

- Time Complexity: O(n²) worst/average case, O(n) best case
- Space Complexity: O(1)
- Stable: Yes
- In-place: Yes

## Selection Sort

Algorithm that divides the input into a sorted and unsorted region, and repeatedly selects the smallest element from the unsorted region to add to the sorted region.

```javascript
const selectionSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
    }
  }
  return arr;
};
```

### Characteristics

- Time Complexity: O(n²) in all cases
- Space Complexity: O(1)
- Stable: No
- In-place: Yes

## Insertion Sort

Builds the final sorted array one item at a time, by repeatedly inserting a new element into the sorted portion of the array.

```javascript
const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
  return arr;
};
```

### Characteristics

- Time Complexity: O(n²) worst/average case, O(n) best case
- Space Complexity: O(1)
- Stable: Yes
- In-place: Yes

## Merge Sort

A divide-and-conquer algorithm that recursively divides the input array into two halves, sorts them, and then merges them.

```javascript
const mergeSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
};

const merge = (left, right) => {
  const result = [];
  let leftIndex = 0,
    rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex++]);
    } else {
      result.push(right[rightIndex++]);
    }
  }

  return result.concat(left.slice(leftIndex), right.slice(rightIndex));
};
```

### Characteristics

- Time Complexity: O(n log n) in all cases
- Space Complexity: O(n)
- Stable: Yes
- In-place: No

## Quick Sort

A divide-and-conquer algorithm that picks a 'pivot' element and partitions the array around it.

```javascript
const quickSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }
  let pivotIndex = Math.floor(Math.random() * arr.length);
  let left = [],
    right = [];

  for (let i = 0; i < arr.length; i++) {
    if (i === pivotIndex) continue;
    if (arr[i] < arr[pivotIndex]) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), arr[pivotIndex], ...quickSort(right)];
};
```

### Characteristics

- Time Complexity: O(n log n) average case, O(n²) worst case
- Space Complexity: O(log n)
- Stable: No
- In-place: Yes (in most implementations)

## Comparison

| Algorithm      | Time (Best) | Time (Average) | Time (Worst) | Space    | Stable |
| -------------- | ----------- | -------------- | ------------ | -------- | ------ |
| Bubble Sort    | O(n)        | O(n²)          | O(n²)        | O(1)     | Yes    |
| Selection Sort | O(n²)       | O(n²)          | O(n²)        | O(1)     | No     |
| Insertion Sort | O(n)        | O(n²)          | O(n²)        | O(1)     | Yes    |
| Merge Sort     | O(n log n)  | O(n log n)     | O(n log n)   | O(n)     | Yes    |
| Quick Sort     | O(n log n)  | O(n log n)     | O(n²)        | O(log n) | No     |

## When to Use Each Algorithm

1. **Bubble Sort**:

   - Small datasets
   - Nearly sorted arrays
   - When simplicity is preferred

2. **Selection Sort**:

   - Small datasets
   - When memory space is limited
   - When number of swaps needs to be minimized

3. **Insertion Sort**:

   - Small datasets
   - Online sorting (data received in real-time)
   - Nearly sorted arrays

4. **Merge Sort**:

   - Large datasets
   - When stable sorting is required
   - When consistent performance is needed

5. **Quick Sort**:
   - Large datasets
   - When average case performance is important
   - When in-place sorting is needed

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is licensed under the MIT License - see the LICENSE file for details.
