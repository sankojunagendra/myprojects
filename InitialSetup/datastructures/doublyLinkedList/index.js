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

    shift() {
        if(!this.head) return undefined;
        var currentHead = this.head;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = currentHead.next;
            currentHead.next = null;
            this.head.prev = null;
        }
        this.length--;
        return currentHead;
    }

    unShift(val) {
        var newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;

    }

    get(index) {
        if(index < 0 || index >= this.length) return null;
        var current, count;
        if(index <= this.length / 2) {
            count = 0;
            current = this.head;
            while(count !== index) {
                current = current.next;
                count++;
            }
        } else {
            count = this.length - 1;
            current = this.tail;
            while(count !== index) {
                current = current.prev;
                count--;
            }
        }
        return current;
    }
}

var list = new DoublyLinkedList();
list.push("One");
list.push("Two");
list.push("Three");
list.push("Four");
list.push("Five");
//console.log(list.pop());
//console.log(list);
//console.log(list.shift());
//console.log(list);
//console.log(list.unShift("Six"));
console.log(list);
console.log(list.get(0));

