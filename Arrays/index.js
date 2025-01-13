// How do you create an empty array in JavaScript?

const arr = [1, 2, 3, 4, "Hello", { name: "Nemish" }, [1, 2, 3]];
// const arr2 = new Array();

console.log(arr); // [1, 2, 3, 4, 'Hello', { name: 'Nemish' }, [ 1, 2, 3 ]]

//How do you access first and last element of an array in JavaScript?

const firstElement = arr[0]; // O(1)
const arrLength = arr.length;
const lastElement = arr[arrLength - 1];
console.log(firstElement, arrLength, lastElement); // 1 7 [ 1, 2, 3 ]

// How do you remove last element from an array in JavaScript?

const lastElement1 = arr.pop(); // O(1)
console.log(arr, lastElement1);

// How do you add an element at the end of an array in JavaScript?

arr.push(5); // O(1)
console.log(arr);

// How do you add an element at the start of an array in JavaScript?

arr.unshift(0); // O(N)
console.log(arr);

arr.shift();
console.log(arr);

// How do you loop through an array in JavaScript?

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

arr.forEach((x, i) => {
  console.log(x);
});

for (let x of arr) {
  console.log(x);
}

// Question: 1 How do you check if an element exists in an array in JavaScript?

const findElement = (arr, target) => {
  for (let x of arr) {
    if (x === target) {
      return true;
    }
  }
  return false;
};

console.log(findElement(arr, 5));
console.log(findElement(arr, 7));

// Question: 2 How do you check if an element exists in an array?

const findElementIndex = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
};

console.log(findElementIndex(arr, "Hello"));
console.log(arr.indexOf("Hello"));

// How to delete, add & update element from specific index.

console.log(arr);
arr.splice(1, 3);
console.log(arr);
arr.splice(1, 0, 2, 3, 4, 5, 6);
console.log(arr);
arr.splice(1, 3, 6, 7, 8);
console.log(arr);

// splice vs slice

const subArr = arr.slice(1, 4); // [start, end)
console.log(subArr, arr);

//shallow copy of array

const arrB = arr;
arrB.splice(1, 4);
console.log(arrB, arr);

//Deep copy of Array

const arrC = [...arr];
const arrD = Array.from(arr);
const arrE = arr.concat();
arrC.splice(1, 4);
arrD.splice(1, 4);
console.log(arrC, arrD, arrE, arr);

//How to add two array in JavaScript?

const newArr = [...arr, ...arrE];
const newArr2 = arr.concat(arrE);
console.log(newArr, newArr2);

// Question 3: How can you check if two arrays are equal?

const isArrayEqual = (arr1, arr2) => {
  //   if (arr1.length !== arr2.length) {
  //     return false;
  //   }

  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr1[i] !== arr2[i]) {
  //       return false;
  //     }
  //   }
  //   return true;
  return (
    arr1.length === arr2.length && arr1.every((ele, i) => arr1[i] === arr2[i])
  );
};

console.log(isArrayEqual([1, 2, 3], [1, 2, 3]));

// Question 4: How to sort an array in ascending order and descending order?

const x = [1, 4, 6, 0, -9, -5];
x.sort(); // O(NlogN)
console.log(x);

x.sort((a, b) => b - a);
console.log(x);

//Question 5: How to reverse an array?

x.reverse();
console.log(x);

// Map, Filter & Reduce

const newMapArr = x.map((ele, i) => ele ** 2);
console.log(newMapArr);

const positiveNumber = x.filter((ele, i) => ele > 0);
console.log(positiveNumber);

const sumOFArr = positiveNumber.reduce((acc, ele) => acc + ele, 0);
console.log(sumOFArr);

// Flat: [1, 2, 4, 5, 5, 6, 7, 8, 9]

const y = [1, 2, [4, 5, [6, 7]], 8, 9];
const flattedArray = y.flat(4);
console.log(flattedArray);

// filter vs find

const postiveNumber = x.find((ele, i) => ele > 0);
console.log(postiveNumber);
