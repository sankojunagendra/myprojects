/**
 * MAX BINARY HEAP :-
 * 
 * 1. Each parent has at most two child nodes.
 * 2. The value of each parent node is always greater than its child nodes.
 * 3. In a Max Binary Heap the parent is greater than the children, but there are no guarantees between sibling nodes.
 * 4. A binary heap is as compact as possible. All the children of each node are as full as they can be and left children
 *  are filled out first.
 */

 /**
  * Uses of Binary Heap:-
  * 
  * Binary Heaps are used to implement Priority Queues, which are very commonly used data structures.
  * They are also used quite a bit, with graph traversal algorithms.
  */

/** Storing Heaps:-
 * If we have a parent node and if we want to know their children nodes.
 *                                         => The left child is stored at "2n + 1"
 *                                         => The right child is at "2n + 2"
 * 
 * If we have a child node and want to find its parent.
 *                                         => For any child node at index "n"
 *                                         => Its parent is at index (n - 1) / 2;
 */

 /**
  * Deleting Node:-
  * 
  * The procedure for deleting the root from the heap (effectively extracting the maximum element in a max-heap or the -
  * - minimum element in a min-heap) and restoring the properties is called "down-heap" (also known as 
  * "Bubble-down", "percolate-down","sift-down","trickle-down","heapify-down","cascade-down" and "extract-min/max")
  */

/**
 * BIG O :-
 * For both Min and Max tree
 * Insertion - O(log n)
 * removal - O(log n)
 * search - O(n)
 */

/** RECAP
 * 1. Binary Heaps are very useful data structures for sorting, and implementing other data structures like priority queues.
 * 2. Binary Heaps are either MaxBinaryHeaps or MinBinaryHeaps with parents either being smaller or larger than their children.
 * 3. With just a little bit of math, we can represent heaps using arrays!
 */