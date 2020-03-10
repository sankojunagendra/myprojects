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

    pop() {
        if(!this.head) return undefined;
        var currentTail = this.tail;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
            return true;
        } else {
            this.tail = currentTail.prev;
            this.tail.next = null;
            currentTail.prev = null;
        }
        this.length--;
        return currentTail;
    }
}

var list = new DoublyLinkedList();
console.log(list.push("One"));
console.log(list.push("Two"));
console.log(list.push("Three"));
console.log(list.pop());
console.log(list);