//Sorting in JavaScript

// sort an array

const arr = [-2, -7, 1000, 5];
// -7 , -2, 5, 1000
console.log(arr.sort((a, b) => a - b));
console.log(arr.sort((a, b) => b - a));

const strArr = ["Mango", "Banana", "Apple"];
console.log(strArr.sort());

// sort a string
const str = "Nemish";
console.log(str.split("").sort().join());

// bubble sort in Javascript

const bubbleSort = (arr) => {
  let swapped = false;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        //   let temp = arr[i];
        //   arr[i] = arr[i + 1];
        //   arr[i + 1] = temp;
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
  } while (swapped);
  {
    return arr;
  }
};

console.log(bubbleSort(arr));
// time complexity of bubble sort is O(n^2) in worst case and O(n) in best case

//Selection sort in Javascript

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

console.log(selectionSort(arr));
//time complexity of selection sort is O(n^2) in worst case and O(n^2) in best case

// Insertion Sort in Javascript

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

console.log(insertionSort(arr));
//time complexity of insertion sort is O(n^2) in worst case and O(n) in best case

// Merge Sort in Javascript
//29, 10, 8, 7, 12, 16

const mergeSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  merge(left, right);
};

const merge = (left, right) => {
  const result = [];
  let leftIndex = 0,
    rightIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
};
