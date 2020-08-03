'use strict'

// Named capture groups. Use the notation `?<name>` immediately after the opening capture bracket `(` to name.
const regexDate = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})(?<addition>.+)?/

const matches = regexDate.exec('2018-04-30')
/*
[
  '2018-04-30',
  '2018',
  '04',
  '30',
  index: 0,
  input: '2018-04-30',
  groups: [Object: null prototype] { year: '2018', month: '04', day: '30', addition: undefined }
]
 */
console.log(matches)

const year = matches.groups.year
const month = matches.groups.month
const day = matches.groups.day
console.log(year, month, day) // 2018 04 30

// Unmatched named groups will be set as `undefined`.
console.log(matches.groups.addition) // undefined.

// Named captures can also be used in `replace()`.
const testDate = '2020-08-03'
console.log(testDate.replace(regexDate, '$<day>/$<month>/$<year>')) // 03/08/2020.

// Lookbehind assertions. The matched part of the lookbehind assertion won't be included in the overall matched string.
const regexMoney = /(?<=\D)\d+\.\d+/
// `(?<=\D)` matches `$` in the below example. The overall matched string - `12.34` - won't include the dollar sign.
console.log(regexMoney.exec('$12.34')) // [ '12.34', index: 1, ... ].

// Negative lookbehind assertions.
const regexMoneyTwo = /(?<!\d)\d+\.\d+/
console.log(regexMoneyTwo.exec('$12.34')) // [ '12.34', index: 1, ... ].

// With the `s` (dotAll) flag, the `.` symbol can now match a carriage return, which wasn't possible previously.
const stringToBeChecked = 'hello\nworld'
const regexDoesNotMatchReturn = /.+/
const regexMatchesReturn = /.+/s
console.log(regexDoesNotMatchReturn.exec(stringToBeChecked)) // [ 'hello', index: 0, ... ]
console.log(regexMatchesReturn.exec(stringToBeChecked)) // [ 'hello\nworld', index: 0, ... ]

// Unicode property escapes.
// @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Unicode_Property_Escapes.
const regexGreekSymbol = /\p{Script=Greek}/u
console.log(regexGreekSymbol.test('π')) // true.
