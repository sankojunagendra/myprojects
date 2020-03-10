/**
 * Popping
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
        // var lastItem = this.head;
        // var i = 0;
        // var removed = null;
        // while(i < this.length) {
        //     lastItem = this.head.next;
        //     i++;
        // }
        // removed = this.tail;
        // lastItem.next = null;
        // this.tail = lastItem;
        // this.length--;
        // console.log(this);
        // return removed;
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
}

var list = new SinglyLikedList();
list.push("Hello");
list.push("World!");
list.push("Hai");
console.log(list);
console.log(list.pop());
