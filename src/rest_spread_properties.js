'use strict'

// In ES6, the rest/spread operator only works on arrays. ES9 now allows it to be used on objects too.
// Note: It only works on the enumerable own properties of an object.
const myObject = {
  a: 1,
  b: true,
  c: {
    d: 'String',
  },
}

// Object destruction.
const { a, ...x } = myObject

console.log(a) // 1.
console.log(x) // { b: true, c: { d: 'String' } }.

// Use object destruction as function parameters.
function restParameters ({ a, ...newObject }) {
  console.log(a)
  console.log(newObject)
}

/*
 * Outputs:
 * 1
 * { b: true, c: { d: 'String' } }
 */
restParameters(myObject)

// Spreading an object.
const objectOne = { a: 1, b: 2 }
const objectTwo = { ...objectOne, c: 3 }

console.log(objectTwo) // { a: 1, b: 2, c: 3 }.
