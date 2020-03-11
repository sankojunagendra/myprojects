/**
 * Depth First Search (BFS)
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

    DFSPreOrder() {
        var data = [];
            
        function traverse (node) {
            data.push(node.val);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }

    DFSPostOrder() {
        var data = [];
        var current = this.root;

        function traverse(node) {
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            data.push(node.val);
        }
        traverse(current);
        return data;
    }

    DFSInOrder() {
        var data = [];
        var current = this.root;

        function traverse(node) {
            if(node.left) traverse(node.left);
            data.push(node.val);
            if(node.right) traverse(node.right);
        }
        traverse(current);
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
//console.log(tree);
// console.log(tree.BFS());
console.log(tree.DFSPreOrder());
console.log(tree.DFSPostOrder());
console.log(tree.DFSInOrder());



/**
 * DFS- InOrder
 * 
 * used commonly with BST's
 * Notice we get all nodes in the tree in their underlying order => for example : [3,6,8,10,15,20]
 * 
 * 
 * DFS - PreOrder
 * 
 * can be used to "export" a tree structure so that it is easily reconstructed or copied.
 */

 /**
  * Trees are non-linear data structures that contain a root and child nodes.
  * Binary Trees can have values of any type, but at most two children for each parent.
  * Binary Search Trees (BST) are a more specific version of binary trees where every node to the
  * left of the parent is less than it's value and every node to the right is greater.
  * 
  * We can search through Trees using BFS(Breadth First Search) and DFS(Depth First Search).
  */