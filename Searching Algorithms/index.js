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

// Binary Search

const BinarySearch = (arr, target) => {
  let start = 0,
    end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor(start + end) / 2;

    if (arr[mid] === target) {
        return mid;
    }

    else if (arr[mid]) {
        
    } else {
        
    }


  }
};
