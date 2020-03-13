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
}

let g = new Graph();
g.addVertex("Tokyo");
g.addVertex("Hyderabad");
g.addVertex("Dallas");
g.addVertex("Hong Kong");
g.addEdge("Tokyo","Hong Kong");
g.addEdge("Hyderabad","Hong Kong");
g.addEdge("Hong Kong","Dallas");
g.addEdge("Tokyo","Hyderabad");
g.addEdge("Hyderabad","Dallas");
//g.removeEdge("Hyderabad","Dallas");
g.removeVertex("Hong Kong");
console.log(g.adjacencyList);
