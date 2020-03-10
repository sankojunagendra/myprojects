/**
 * Shifting
 */
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLikedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        var newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop() {
        if(!this.head) return undefined;
        var current = this.head;
        var newTail = current;
        while(current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        console.log(this);
        if(this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    
    shift() {
        if(!this.head) return undefined;
        var oldHead = this.head;
        this.head = oldHead.next;
        this.length--;
        console.log(this);
        if(this.length === 0) {
            this.tail = null;
        }
        return oldHead;
    }

    unshift(val) {
        var newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
}

var list = new SinglyLikedList();
// list.push("Hello");
// list.push("World!");
// list.push("Hai");
// console.log(list);
console.log(list.unshift("AddMeToTop"));

