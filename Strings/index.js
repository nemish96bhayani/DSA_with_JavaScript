// String In Javascript
let firstName = "Nemishi";

//lengh of a string
console.log(firstName.length);

// Accesss string element
console.log(firstName.charAt(2));
console.log(firstName[2]);
console.log(firstName.charCodeAt(2));

// "i" is a present in the string or not
console.log(firstName.includes("r"));
console.log(firstName.indexOf("i"));
console.log(firstName.lastIndexOf("i"));

//compare two strings

let anotherName = "Nemishi";
console.log(firstName.localeCompare(anotherName));

//replace Nemish with siya

const str =
  "                     Nemish is a Best Frontend Developer,                  Nemish is a ....                      ";
console.log(str.replace("/Nemish", "siya"));

console.log(str.substring(6, 40));
console.log(str.slice(-10, -1));

console.log(str.split(""));

const subStiring = str.split(" ");
console.log(subStiring.join(" "));

console.log(str.startsWith("Nemish"));
console.log(str.endsWith("Developer"));

console.log(str.length);

console.log(str.trim());
const trimStr = str.trim();
console.log(trimStr, trimStr.length);

console.log(str.toLowerCase());
console.log(str.toUpperCase());

//Home Work: difference between toLoweCase() vs toLocaleLowerCase....

console.log(str.toLocaleLowerCase());

// convert number to string
const num = 123;
console.log(num, num.toString());

//convert object to string
const obj = {
  name: "Nemish",
  course: "DSA with Nemish",
};

console.log(obj, JSON.stringify(obj));

//concat two string

const lastName = " Bhayani";
console.log(firstName.concat(lastName, " is a", " Best"));
console.log(firstName + lastName);
console.log(`${firstName} ${lastName} is a Best Developer`);
