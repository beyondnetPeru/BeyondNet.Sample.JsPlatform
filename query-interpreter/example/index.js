const { parser } = require("../src/parser")

const result = parser("Afid EQUAL TO 502572 AND Source Code EQUAL TO ma-empirebc AND State EQUAL TO NJ")

console.log({result})
console.log({data: result.data})
console.log('-----------------------------')
const result2 = parser("EQUAL TO")

console.log({result2})
console.log({data: result2.data})
console.log('-----------------------------')
const result3 = parser("")

console.log({result3})
console.log({data: result3.data})
console.log('-----------------------------')
const result4 = parser("Afid")

console.log({result4})
console.log({data: result4.data})
console.log('-----------------------------')

const result5 = parser("Afid EQUAL TO")

console.log({result5})
console.log({data: result5.data})
console.log('-----------------------------')

const result6 = parser("Distributions Has Elements")

console.log({result6})
console.log({data: result6.data})
console.log('-----------------------------')

const result7 = parser("Afid EQUAL TO 502572 AND")
console.log({result7})
console.log({data: result7.data})
console.log('-----------------------------')

const result8 = parser("First Name CONTAINS PIERO Last Name EQUAL TO ARANDA")
console.log({result8})
console.log({data: result8.data})
console.log('-----------------------------')

const result9 = parser("CONTAINS piero AND NOT EQUAL TO aranda")
console.log({result9})
console.log({data: result9.data})
console.log('-----------------------------')

const result10 = parser("First Name EQUAL TO Last Name CONTAINS ARANDA")
console.log({result10})
console.log({data: result10.data})
console.log('-----------------------------')