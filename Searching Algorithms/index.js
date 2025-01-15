// Linear Search in javascript

const arr = [1, 2, 6, 9, 0, -5];

const linearSearch = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  retunr - 1;
};

console.log(linearSearch(arr, 9));
console.log(arr.includes(9));
console.log(arr.indexOf(9));
console.log(arr.find((num) => num > 0));
console.log(arr.findIndex((num) => num < 0));

// String Methods: match(), search(), indexOf(), includes()
// Binary Search

const BinarySearch = (arr, target, start, end) => {
  let start = 0,
    end = arr.length - 1;
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

console.log(BinarySearch([1, 4, 6, 9, 12, 15], 9)); /**
Given an array: [1, 4, 6, 9, 12, 15]

 floor and ceil value of 9;*/

// Binary Search using Recursion

const BinarySearchRecursion = (arr, target) => {
  return BinarySearchUtill(arr, target, 0, arr.length);
};

const BinarySearchUtill = (arr, target, start, end) => {
  if (start > end) {
    return -1;
  }
  let mid = Math.floor((start + end) / 2);

  if (arr[mid] === target) {
    return mid;
  } else if (arr[mid] > target) {
    return BinarySearchUtill(arr, target, start, mid - 1);
  } else {
    return BinarySearchUtill(arr, target, mid + 1, end);
  }
};

/**
 * Given an array: [1, 5, 8, 11, 12]
 *
 *  floor and ceil value of 9;
 *
 * floor value of 9 will be 8
 * ceil value of 9 will be 11
 *
 *
 */

const floorCeil = (arr, target) => {
  let start = 0,
    end = arr.length;
  let floor = -1,
    ceil = -1;
  while (start <= 1) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
      floor = mid;
      ceil = mid;
      return [ceil, mid];
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

console.log(floorCeil([1, 5, 8, 11, 12], 9));
