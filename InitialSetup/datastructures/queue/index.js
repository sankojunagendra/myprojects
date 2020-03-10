/**
 * Queue
 */
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;       
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enQueue(val) {
        var newNode = new Node(val);
        if(!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }

    deQueue() {
        if(!this.first) return null;
        var temp = this.first;
        if(this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.val;
    }
}

var queue = new Queue();
queue.enQueue("One");
queue.enQueue("Two");
console.log(queue.enQueue("Three"));
console.log(queue);
console.log(queue.deQueue());
