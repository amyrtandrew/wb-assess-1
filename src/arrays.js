// Given an array of numbers, return all the numbers that are greater than ten.
// Ex.:
//   greaterThanTen([1, 2, 3, 11, 12, 13]);
//   => [11, 12, 13]
function greaterThanTen(numbers) {
  let highNumbers = []
  for (const number of numbers)
  if (number > 10) {
    highNumbers.push(number)
  }
  return highNumbers
}

// Given an array of strings, return all words that start with 'b' or 'B'.
// Ex.:
//   bWords(['banana', 'orange', 'apple', 'Bonobo', 'kiwi', 'pear']);
//   => ['banana', 'Bonobo]
function bWords(words) {
  let wordsStartB = []
  for (const word of words) {
    if (word[0] === `b` || word[0] === `B`) {
      wordsStartB.push(word)
    }
  }
  return wordsStartB
}

// Add all the elements from additionalItems to the end of originalArray.
// Return the originalArray..
// Ex.:
//  extend([1, 2, 3], [4, 5, 6]);
//  => [1, 2, 3, 4, 5, 6]
function extend(originalArray, additionalItems) {
  Array.prototype.push.apply(originalArray, additionalItems)
return originalArray
}

// Return an array of all items with the given length.
// Ex.:
//   itemsWithLength(['a', 'bbb', 'cccc', 'dddddd', 'eee'], 3);
//   => ['bbb', 'eee']
function itemsWithLength(items, length) {
  let itemLength = []
  for (const value of items) {
    if (value.length === length) {
      itemLength.push(value)
    }
  }
  return itemLength
}

// Return an array with every other element from the input array (start with index 0).
// Ex.:
//   everyOtherItem(['a', 'b', 'c', 'd', 'e']);
//   => ['a', 'c', 'e']
function everyOtherItem(items) {
  let alternating = []
  for (let i = 0; i < items.length; i += 2) {
    alternating.push(items[i])
  }
  return alternating
  }


  // const fruits = ['apple', 'berry', 'cherry'];
  // console.log(fruits[fruits.indexOf('apple')]);
  // // expected output:
  // // apple

// Given a list of words and a letter, return the indexes of the words that
// start with that letter. You can assume that the words and letter will always
// be lowercased.
// Ex.:
//   findWordsStartingWith(['apple', 'banana', 'kiwi', 'pear', 'bacon'], 'b');
//   => [1, 4]
function findWordsStartingWith(words, letter) {
  let thatLetter = []
  for (let i = 0; i < words.length; i++) {
  // for (let element of words) {
    // if (element[0] === letter) {
    if (words[i].startsWith(letter)) {
    thatLetter.push(i)
    // (words[i].indexOf)
  }
  }
  return thatLetter
  // (words[i])
}

// Return the `n` smallest values in the array in descending order (largest
// numbers first). Assume that `n` will always be less than the length of the
// array.
// Ex.:
//   smallestNItems([1, 30, 4, 21, 100000], 3);
//   => [21, 4, 1]
function smallestNItems(items, n) {
  let smallest = []
}

// Search for a value in the array and return its index. If the value appears
// more than once, return the index of the *FIRST* occurrence of the value. If
// the value doesn't exist in the array, return undefined.
// Ex.:
//   findIndex(['a', 'b', 'c', 'a', 'b', 'c'], 'c');
//   => 2
function findIndex(items, value) {
  for (let i = 0; i < items.length; i++) {
    if (items[i] === value) {
   return i
    }
  }
  return undefined
}

// Given a start number and stop number, return a new array containing all the numbers
// between the start and stop number.
// Ex.:
//   range(1, 5);
//   => [1, 2, 3, 4, 5]
function range(start, stop) {
let allNumbers = []
for (let i = 0; i < items.length; i++) {
  if (start[i] === start)
}

}

export {
  bWords,
  everyOtherItem,
  extend,
  findIndex,
  findWordsStartingWith,
  greaterThanTen,
  itemsWithLength,
  range,
  smallestNItems,
};
