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

### 3. Array Quadruplet
Given an unsorted array of integers arr and a number s, write a function findArrayQuadruplet that finds four numbers (quadruplet) in arr that sum up to s. Your function should return an array of these numbers in an ascending order. If such a quadruplet doesn’t exist, return an empty array.

Note that there may be more than one quadruplet in arr whose sum is s. You’re asked to return the first one you encounter (considering the results are sorted).

Explain and code the most efficient solution possible, and analyze its time and space complexities.

```input:  arr = [2, 7, 4, 0, 9, 5, 1, 3], s = 20```

```output: [0, 4, 7, 9]```

### 4. Matrix Spiral Copy

Given a 2D array (matrix) inputMatrix of integers, create a function spiralCopy that copies inputMatrix’s values into a 1D array in a spiral order, clockwise. Your function then should return that array. Analyze the time and space complexities of your solution.

``` input:  inputMatrix  = [ [1,    2,   3,  4,    5],```
                         ``` [6,    7,   8,  9,   10],```
                         ``` [11,  12,  13,  14,  15],```
                         ``` [16,  17,  18,  19,  20] ]```

``` output: [1, 2, 3, 4, 5, 10, 15, 20, 19, 18, 17, 16, 11, 6, 7, 8, 9, 14, 13, 12]```

### 5. Two sums

Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

```Given nums = [2, 7, 11, 15], target = 9,```

```Because nums[0] + nums[1] = 2 + 7 = 9,```

```return [0, 1].```

### 6. Reverse Linked List

Reverse a singly linked list.

Example:

```Input: 1->2->3->4->5->NULL```
```Output: 5->4->3->2->1->NULL```
Follow up:

A linked list can be reversed either iteratively or recursively. Could you implement both?

### 7.  Number of 1 Bits

Write a function that takes an unsigned integer and return the number of '1' bits it has (also known as the Hamming weight).

Example 1:

```Input: 00000000000000000000000000001011```

Output: 3

``` Explanation: The input binary string 00000000000000000000000000001011 has a total of three '1' bits.
```
Example 2:

```Input: 00000000000000000000000010000000```
Output: 1

```
Explanation: The input binary string 00000000000000000000000010000000 has a total of one '1' bit.
```
Example 3:

``` Input: 11111111111111111111111111111101 ```

Output: 31

```
Explanation: The input binary string 11111111111111111111111111111101 has a total of thirty one '1' bits.
```

### 8. Remove Nth Node From End of List

Given a linked list, remove the n-th node from the end of list and return its head.

Example:

```Given linked list: 1->2->3->4->5, and n = 2.```

After removing the second node from the end, the linked list becomes ```1->2->3->5```.
Note:

Given n will always be valid.

Follow up:

Could you do this in one pass?

### 9. Maximum Depth of Binary Tree

Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Note: A leaf is a node with no children.

Example:

```Given binary tree [3,9,20,null,null,15,7],```

    3
   / \
  9  20
    /  \
   15   7
```return its depth = 3.```

### 10. Same Tree

Given two binary trees, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical and the nodes have the same value

Example 1:

Input:     1         1
          / \       / \
         2   3     2   3

        [1,2,3],   [1,2,3]

``` Output: true```
Example 2:

Input:     1         1
          /           \
         2             2

        [1,2],     [1,null,2]

``` Output: false```
Example 3:

Input:     1         1
          / \       / \
         2   1     1   2

        [1,2,1],   [1,1,2]

``` Output: false```

### Inverted tree

Invert a binary tree.

Example:

Input:

     4
   /   \
  2     7
 / \   / \
1   3 6   9
Output:

     4
   /   \
  7     2
 / \   / \
9   6 3   1

### 12. Queue

Sample questions
Implement a Queue class from scratch with an existing bug, the bug is that it cannot take more than 5 elements.
Implement a Queue using two stacks. You may only use the standard push(), pop(), and peek(),Delete_at operations traditionally available to stacks. You do not need to implement the stack yourself (i.e. an array can be used to simulate a stack).

### 13. Top K Frequent Elements

Given a non-empty array of integers, return the k most frequent elements.

Example 1:

```Input: nums = [1,1,1,2,2,3], k = 2```
```Output: [1,2]```
```Example 2:```

```Input: nums = [1], k = 1```
```Output: [1]```

### 14. Merge k Sorted Lists

Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.

Example:

Input:
[
  1->4->5,
  1->3->4,
  2->6
]
Output: 1->1->2->3->4->4->5->6

### 15. Number of Islands

Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Example 1:

Input:
11110
11010
11000
00000

Output: 1
Example 2:

Input:
11000
11000
00100
00011

Output: 3

### 16. Clone Graph

Given a reference of a node in a connected undirected graph.

Return a deep copy (clone) of the graph.

Each node in the graph contains a val (int) and a list (List[Node]) of its neighbors.

class Node {
    public int val;
    public List<Node> neighbors;
}
 

Test case format:

For simplicity sake, each node's value is the same as the node's index (1-indexed). For example, the first node with val = 1, the second node with val = 2, and so on. The graph is represented in the test case using an adjacency list.

Adjacency list is a collection of unordered lists used to represent a finite graph. Each list describes the set of neighbors of a node in the graph.

The given node will always be the first node with val = 1. You must return the copy of the given node as a reference to the cloned graph.

 

Example 1:


Input: adjList = [[2,4],[1,3],[2,4],[1,3]]
Output: [[2,4],[1,3],[2,4],[1,3]]
Explanation: There are 4 nodes in the graph.
1st node (val = 1)'s neighbors are 2nd node (val = 2) and 4th node (val = 4).
2nd node (val = 2)'s neighbors are 1st node (val = 1) and 3rd node (val = 3).
3rd node (val = 3)'s neighbors are 2nd node (val = 2) and 4th node (val = 4).
4th node (val = 4)'s neighbors are 1st node (val = 1) and 3rd node (val = 3).
Example 2:


Input: adjList = [[]]
Output: [[]]
Explanation: Note that the input contains one empty list. The graph consists of only one node with val = 1 and it does not have any neighbors.
Example 3:

Input: adjList = []
Output: []
Explanation: This an empty graph, it does not have any nodes.
Example 4:


Input: adjList = [[2],[1]]
Output: [[2],[1]]
 

Constraints:

1 <= Node.val <= 100
Node.val is unique for each node.
Number of Nodes will not exceed 100.
There is no repeated edges and no self-loops in the graph.
The Graph is connected and all nodes can be visited starting from the given node.

### How to print numbers in words

How to print given Number in word(Example: 9995 should be printed like "Nine Thousand Nine Hundred ninety five")

