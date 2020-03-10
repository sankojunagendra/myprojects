/**
 * Reverse
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

    get(index) {
        if(index < 0 || index >= this.length) return null;
        var counter = 0;
        var current = this.head;
        while(counter !== index) {
            current = current.next;
            counter++;
        }
        return current;
    }

    set(index, val) {
        var foundNode = this.get(index);
        if(foundNode) {
            foundNode.val = val;
            return true;
        }
        return false;
    }

    insert(index, val) {
        if(index < 0 || index > this.length) return false;
        if(index === this.length) {
            this.push(val);
            return true;
        }
        if(index === 0) {
            this.unshift(val);
            return true;
        }
        var newNode = new Node(val);
        var prevNode = this.get(index - 1);
        var temp = prevNode.next;
        prevNode.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }

    remove(index) {
        if(index < 0 || index >= this.length) return undefined;
        if(index === this.length - 1) {
            this.pop();
            return true;
        }
        if(index === 0) {
            this.shift();
            return true;
        }
        var prevNode = this.get(index - 1);
        var removed = prevNode.next;
        prevNode.next = removed.next;
        this.length--;
        return removed;
    }

    reverse()  {
        var node = this.head;
        this.head = this.tail;
        this.tail = node;
        var next;
        var prev = null;
        for ( var i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }
}

var list = new SinglyLikedList();
list.push("Hello");
list.push("World!");
list.push("Hai");
console.log(list.get(2));
console.log(list.set(1, "UpdatedValue"));
list.insert(1, "Iam the one who supposed to be here");
console.log(list.remove(1));
console.log(list);
console.log(list.reverse());