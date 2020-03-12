/**
 * Graphs
 */

/**
 * A graph data structure consists of a finite (and possibly mutable) set of vertices or nodes or points,
 * together with a set of unordered pairs of these vertices for an undirected graph or a set of
 * ordered pairs for a directed graph.
 * 
 * (Nodes + Connections)
 * 
 */

/**
 * Uses for Graphs:-
 * 
 * 1. Social Networks
 * 2. Location / Mapping
 * 3. Routing Algorithms
 * 4. Visual Hierarchy
 * 5. File System Optimizations
 * 6. Recommendation Engines
 */

/**
 * Essential Graph Terms :-
 * 
 * 1. Vertex - a node
 * 2. Edge - connection between nodes
 * 3. Weighted / Unweighted - values assigned to distances between vertices.
 * 4. Directed / Undirected - directions assigned to distance between vertices.
 */

 /**
  * Storing Graphs
  * 
  * 1. Adjacency Matrix
  * 2. Adjacency List
  */

/**
 *          Adjacency List                                 vs                  Adjacency Matrix
 * 
 * 1.   Can take up less space(in sparse graphs)                            . Takes up more space(in sparse graphs)
 * 2.   Faster to iterate over all edges                                    . Slower to iterate over all edges
 * 3.   Can be slower to lookup specific edge                               . Faster to lookup specific edge
 * 
 * 
 * *******************************************************************************************************************
 *          BIG O                                                                BIG O 
 * 1. Add Vertex - O(1)                                                      . O(|V^2|)
 * 2. Add Edge - O(1)                                                        . O(1)
 * 3. Remove Vertex - O(|V| + |E|)                                           . O(|V^2|)
 * 4. Remove Edge - O(|E|)                                                   . O(1)
 * 5. Query - O(|V| + |E|)                                                   . O(1)
 * 6. Storage - O(|V| + |E|)                                                 . O(|V^2|) 
 */