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
        console.log(val);
        console.log(newNode.next);
        if(this.head === null) {
            this.head = val;
            this.length++;
        } else {
            this.tail = val;
            this.length++;
        }
    }
}

var list = new SinglyLikedList();
list.push("Hello");