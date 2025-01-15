// Objects in Javascript

const person = {
  name: "Nemish",
  lastName: "Bhayani",
  age: 21,
  isEducator: true,
  //   skils: ["DSA", "Web Development", "React"],
  //   projects: {
  //     "Frontend Freaks": "Frontend Development Project",
  //   },
  //   code: function () {
  //     return "start coding";
  //   },
  //   walk: () => {
  //     return "start walking  ";
  //   },
};

// How to access
//Dot Operator
console.log(person.age);
console.log(person.name);

// [] operator
console.log(person["name"]);

// console.log(person.code());

// How to find the key in an object

console.log(person.hasOwnProperty("lastName"));

//how to add, delete, update the key in an object

person.name = "Siya";
person.location = "New Delhi";
delete person.project;
console.log(person);

// Shallow Copy vs Deep Copy

// Shallow Copy
const person2 = person;
person2.isEducator = false;
person2;
person;

console.log(person2);

// Deep Copy

const person3 = Object.assign({}, person);
person3.skils = null;

person3;
person;

//difference between freeze and seal method of object
//Freeze method: you can't add, delete and update the key value in an object
// Object.freeze(person);

console.log(person);
person.name = "Nemish";
// person.zyas = "sfasdf";
// delete person.age;
console.log(person);

console.log(Object.isFrozen(person));

//Seal method: you can't add or delete the key value but update the key value in an object
Object.seal(person);

person;
person.name = "Vaideh";
person.zyas = "sfasdf";
delete person.age;
person;

console.log(Object.isSealed(person));

// keys, values, entries in an object

console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));

// loop through an object
//for... in loop

for (let key in person) {
  console.log(key + " : ", person[key]);
}

Object.keys(person).forEach((key) => {
  console.log(key);
});

console.log(Object.is(person, person3));

//  Question 1: find the all player count all player

const data = {
  id: 1,
  name: ["P1", "P4"],
  next: {
    id: 2,
    name: ["P3"],
    next: {
      id: 3,
      name: ["P3", "P4", "P5"],
      next: {
        id: 4,
        name: ["P1", "P2", "P4"],
        next: {
          id: 5,
          name: ["P2", "P3", "P5"],
          next: null,
        },
      },
    },
  },
};

// {P1: 2, P4: 3, P3: 3, P2: 2, P5: 2}

const playerCount = (data) => {
  if (data === null) {
    return {};
  }

  let countPlayer = {};
  for (let player of data.name) {
    countPlayer[player] = (countPlayer[player] || 0) + 1;
  }

  console.log(countPlayer);

  const nextPlayerCount = playerCount(data.next);

  for (let key in nextPlayerCount) {
    countPlayer[key] = (countPlayer[key] || 0) + nextPlayerCount[key];
  }

  return countPlayer;
};

const countPlayer = playerCount(data);
console.log(countPlayer);
