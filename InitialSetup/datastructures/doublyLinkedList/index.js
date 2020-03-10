/**
 * Doubly Linked List
 */

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null        
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        var newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
}

var list = new DoublyLinkedList();
console.log(list.push("One"));
console.log(list.push("Two"));
console.log(list.push("Three"));