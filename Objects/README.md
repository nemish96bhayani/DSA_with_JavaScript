# JavaScript Objects Guide

This repository demonstrates common operations and methods for working with objects in JavaScript, including object manipulation, copying, and advanced object methods.

## Table of Contents

1. [Object Creation and Basic Operations](#object-creation-and-basic-operations)
2. [Accessing Object Properties](#accessing-object-properties)
3. [Object Modification](#object-modification)
4. [Object Copying](#object-copying)
5. [Object Methods](#object-methods)
6. [Object Iteration](#object-iteration)
7. [Advanced Example](#advanced-example)

## Object Creation and Basic Operations

```javascript
const person = {
    name: "Nemish",
    lastName: "Bhayani",
    age: 21,
    isEducator: true
    // You can also include:
    // - Arrays as values
    // - Nested objects
    // - Methods (regular and arrow functions)
};
```

## Accessing Object Properties

Two ways to access object properties:

```javascript
// Dot Notation
console.log(person.age);
console.log(person.name);

// Bracket Notation
console.log(person["name"]);

// Check if property exists
console.log(person.hasOwnProperty("lastName")); // true
```

## Object Modification

```javascript
// Update existing property
person.name = "Siya";

// Add new property
person.location = "New Delhi";

// Delete property
delete person.project;
```

## Object Copying

### Shallow Copy
```javascript
// Creates a reference to the original object
const person2 = person;
// Changes to person2 will affect person
```

### Deep Copy
```javascript
// Creates a new object with copied values
const person3 = Object.assign({}, person);
// Changes to person3 won't affect person
```

## Object Methods

### Freeze vs Seal

#### Object.freeze()
```javascript
Object.freeze(person);
// After freezing:
// ❌ Can't add new properties
// ❌ Can't modify existing properties
// ❌ Can't delete properties

// Check if object is frozen
console.log(Object.isFrozen(person));
```

#### Object.seal()
```javascript
Object.seal(person);
// After sealing:
// ❌ Can't add new properties
// ✅ Can modify existing properties
// ❌ Can't delete properties

// Check if object is sealed
console.log(Object.isSealed(person));
```

### Object Information Methods
```javascript
// Get all keys
console.log(Object.keys(person));

// Get all values
console.log(Object.values(person));

// Get key-value pairs
console.log(Object.entries(person));

// Compare objects
console.log(Object.is(person, person3));
```

## Object Iteration

### Using for...in loop
```javascript
for (let key in person) {
    console.log(key + " : ", person[key]);
}
```

### Using Object.keys() with forEach
```javascript
Object.keys(person).forEach(key => {
    console.log(key);
});
```

## Advanced Example

### Nested Object Player Count
This example demonstrates how to process a deeply nested object structure:

```javascript
const data = {
    id: 1,
    name: ["P1", "P4"],
    next: {
        id: 2,
        name: ["P3"],
        next: {
            // ... nested structure continues
        }
    }
};

const playerCount = (data) => {
    if (data === null) {
        return {};
    }

    let countPlayer = {};
    // Count players in current level
    for (let player of data.name) {
        countPlayer[player] = (countPlayer[player] || 0) + 1;
    }

    // Recursively count players in next levels
    const nextPlayerCount = playerCount(data.next);

    // Combine counts
    for (let key in nextPlayerCount) {
        countPlayer[key] = (countPlayer[key] || 0) + nextPlayerCount[key];
    }

    return countPlayer;
};
```

This function:
- Recursively traverses a nested object structure
- Counts occurrences of players across all levels
- Returns an object with player counts

Example output:
```javascript
{
    P1: 2,
    P4: 3,
    P3: 3,
    P2: 2,
    P5: 2
}
```

## Best Practices

1. Use const when declaring objects to prevent reassignment
2. Use Object.freeze() when you need immutable objects
3. Use Object.seal() when you want to allow property updates but prevent structural changes
4. Prefer dot notation for known property names
5. Use bracket notation when property names are dynamic
6. Always check if properties exist before accessing nested objects

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is licensed under the MIT License - see the LICENSE file for details.