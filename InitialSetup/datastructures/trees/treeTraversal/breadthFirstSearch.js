/**
 * Breadth First Search (BFS)
 */

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null       
    }
    
    insert(val) {
        var newNode = new Node(val);
        if(this.root === null) {
            this.root = newNode;
            return this;
        }
        var current = this.root;
        while(true) {
            if(val === current.val) return undefined;
            if(val < current.val) {
                if(current.left === null) {
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if(current.right === null) {
                    current.right = newNode;
                    return this;
                } 
                current = current.right;
            }
        }
    }

    BFS() {
        var node = this.root,
            data = [],
            queue = [];
        queue.push(node);

        while(queue.length) {
            node = queue.shift();
            data.push(node.val);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        return data;
    }

}

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
console.log(tree.BFS());
