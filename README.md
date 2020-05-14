# April Challenges
This is repository shall contain coding challenges I am going to work on this month. Most of these challenges will come from the leetcode 30 day challenges

### 1. Single Number
Given a non-empty array of integers, every element appears twice except for one. Find that single one.

Note:
Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

- Example 1
```Input: [2,2,1]```
```Output: 1```

- Example 2
```Input: [4,1,2,1,2]```
```Output: 4```

### 2. Happy Number
Write an algorithm to determine if a number is "happy".

A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

- Example: 

Input: 19
Output: true
Explanation: 
``` 12 + 92 = 82 ```
``` 82 + 22 = 68 ```
``` 62 + 82 = 100 ```
``` 12 + 02 + 02 = 1 ```

### 3 Array Quadruplet
Given an unsorted array of integers arr and a number s, write a function findArrayQuadruplet that finds four numbers (quadruplet) in arr that sum up to s. Your function should return an array of these numbers in an ascending order. If such a quadruplet doesn’t exist, return an empty array.

Note that there may be more than one quadruplet in arr whose sum is s. You’re asked to return the first one you encounter (considering the results are sorted).

Explain and code the most efficient solution possible, and analyze its time and space complexities.
```input:  arr = [2, 7, 4, 0, 9, 5, 1, 3], s = 20```

```output: [0, 4, 7, 9]```

### 4 Matrix Spiral Copy

Given a 2D array (matrix) inputMatrix of integers, create a function spiralCopy that copies inputMatrix’s values into a 1D array in a spiral order, clockwise. Your function then should return that array. Analyze the time and space complexities of your solution.

``` input:  inputMatrix  = [ [1,    2,   3,  4,    5],```
                         ``` [6,    7,   8,  9,   10],```
                         ``` [11,  12,  13,  14,  15],```
                         ``` [16,  17,  18,  19,  20] ]```

``` output: [1, 2, 3, 4, 5, 10, 15, 20, 19, 18, 17, 16, 11, 6, 7, 8, 9, 14, 13, 12]```