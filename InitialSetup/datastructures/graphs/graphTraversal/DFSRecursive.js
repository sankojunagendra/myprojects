/**
 * Depth First Traversal Recursively  
 */

/**
 * Undirected Graph - Adjacency List
 */

class Graph {
    constructor() {
        this.adjacencyList = {}
    }
    
    addVertex(vertex) {
        if(!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }

    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter( vertex => vertex !== vertex2);
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter( vertex => vertex !== vertex1);
    }

    removeVertex(vertex) {
        while(this.adjacencyList[vertex].length) {
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacencyList[vertex];
    }

    DFSRecursive(start) {
        const result = [];
        const visited = {};
        const adjacencyList = this.adjacencyList;
        
        function dfs(vertex) {
            if(!vertex) return null;
            visited[vertex] = true;
            result.push(vertex);
            adjacencyList[vertex].forEach(neighbour => {
                if(!visited[neighbour]) {
                    return dfs(neighbour);
                }
            })
            
        }
        dfs(start);
        return result;
    }

    DFSIterative(start) {
        const stack = [start];
        const result = [];
        const visited = {};
        let currentVertex;
        visited[start] = true;
        while(stack.length) {
            currentVertex = stack.pop();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(neighbour => {
                if(!visited[neighbour]) {
                    visited[neighbour] = true;
                    stack.push(neighbour);
                }
            })

        }

        return result;
    }

    BFS(start) {
        const queue = [start];
        const result = [];
        const visited = {};
        visited[start] = true;

        let currentVertex;

        while(queue.length) {
            currentVertex = queue.shift();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(neighbour => {
                if(!visited[neighbour]) {
                    visited[neighbour] = true;
                    queue.push(neighbour);
                }
            })
        }
        return result;
    }
}

let g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");
g.addEdge("A","B");
g.addEdge("A","C");
g.addEdge("B","D");
g.addEdge("C","E");
g.addEdge("D","E");
g.addEdge("D","F");
g.addEdge("E","F");
console.log(g.DFSRecursive("A"));
console.log(g.DFSIterative("A"));
console.log(g.BFS("A"));
