'use strict'

// `await`ing an asynchronous function inside a synchronous loop won't work as expected.
function doSomething (parameterOne) {
  return new Promise((resolve, reject) => {
    // ...
  })
}

// Bad example 1:
async function processOne (anArray) {
  for (const arrayElement of anArray) {
    await doSomething(arrayElement)
  }
}

// Bad example 2:
async function processTwo (anArray) {
  anArray.forEach(async arrayElement => {
    await doSomething(arrayElement)
  })
}

// ES2018 introduces asynchronous iterators, which are just like regular iterators except the `next()` method returns
// a `Promise`. Therefore, the `await` keyword can be used with `for…of` loops to run asynchronous operations in series.
async function processThree (anArray) {
  for await (const arrayElement of anArray) {
    doSomething(arrayElement)
  }
}
