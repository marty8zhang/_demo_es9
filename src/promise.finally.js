'use strict'

function doSomething (parameterOne) {
  return new Promise((resolve, reject) => {
    // ...
  })
}

doSomething()
  .then(result => {
    // ...
  })
  // eslint-disable-next-line handle-callback-err
  .catch(error => {
    // ...
  })
  .finally(() => {
    // The code in this function will always be executed no matter if the preceding `Promise`s have been resolved or
    // rejected.
  })
