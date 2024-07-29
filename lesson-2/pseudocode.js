/* 
# function that returns the sum of two numbers

START
- declare a function with two parameters (numbers)
**params number1, number
- SET sum = number1 + number2
- PRINT sum
- call the function
- END
*/

/*
# Given an array of strings, return a string with all the strings concatenated together

START
- declare a function with a single parameter (array)
**params strArr
SET joinedString = strArr.join(".");
PRINT joinedString
- call the function
END
*/

/*
# Given an array of integers called "numbers"

- declare a function with a single parameter (array)
**params numbers
- declare a variable called "everyOtherNums" and assign it to an empty array []
- iterate through the "numbers" array using a for loop
- start the iteration at 0 then step through the for loop by 2
- push the values within position "i" into the new array "everyOtherNums"
- return the value of "everyOtherNums"
*/

/*
# Given a string of characters

- declare a function with a single parameter (string)
**params str
- declare a variable called xCount and set to 0
- iterate through the "str" value
- check if count <= 3
- if yes,
  - at each iteration check if the value equals "x"
  - if yes, add 1 to xCount
  - if not, return the index value of the last "x" index
- if no, return null
*/ 

/*
# Given two arrays of integers called "numsArr1" and "numsArr2"

START
SET merge(numsArr1, numsArr2) {}
  SET mergedArr = []
  SET evenIndexes = 0;
  SET oddIndexes = 1;

  WHILE index < numsArr1.length
    - GET numsArr1 at each index position
    - add that value to mergedArr at an index position of evenIndexes
    - add 2 to evenIndexes at each iteration

  WHILE index < numsArr2.length
    - GET numsArr2 at each index position
    - add that value to mergedArr at an index position of oddIndexes
    - add 2 to oddIndexes at each iteration

  PRINT mergedArr
*/