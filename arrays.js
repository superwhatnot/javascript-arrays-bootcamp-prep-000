/* TODO: In arrays.js, define a variable called chocolateBars.
Its value should be an array of the strings snickers, hundred grand, kitkat, and skittles.
*/

var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
]


/*
TODO: In arrays.js, define two functions, addElementToBeginningOfArray
and destructivelyAddElementToBeginningOfArray. Both functions take two
parameters, an array and an element to add to the beginning of the array,
and both functions should add the element to the beginning of the array
and then return the whole array. The destructive function,
destructivelyAddElementToBeginningOfArray, should alter the original array
that's passed in; addElementToBeginningOfArray, on the other hand, should
return a new array and not modify the original.
*/

function addElementToBeginningOfArray(array, element){
  return [element, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
  return array
}

/*TODO: Define two more functions, addElementToEndOfArray and
destructivelyAddElementToEndOfArray. These functions also take
two arguments, an array and an element to add to the end of the
array. addElementToEndOfArray should not alter the original array;
destructivelyAddElementToEndOfArray should alter the original array.
*/

function addElementToEndOfArray(array, element){
  return [...array, element]
}
