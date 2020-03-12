/**
 * Stack -> LIFO (Last IN First OUT)
 */
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;        
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;       
    }
    push(val) {          // unShifting
        var newNode = new Node(val);
        if(!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            var temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return this.size++;
    }

    pop() {   // shifting
        if(!this.first) return null;
        var temp = this.first; 
        if(this.first === this.last) {
            this.last = null;
        };
        this.first = this.first.next;
        this.size--;
        return temp.val;
    }
    
}

var stack = new Stack();
stack.push(5);
stack.push(4);
stack.push(3);
stack.push(2);
console.log(stack.push(1));
console.log(stack);
