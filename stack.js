function Stack() {
    this.stackSize = 0;
    this.stackStorage = {};
}

Stack.prototype.push = function(data) {
    var size = this.stackSize++;
    this.stackStorage[size] = data;
};


Stack.prototype.pop = function() {
    var size = this.stackSize;
    var deletedData;
 
    if (size >=1) {

        deletedData = this.stackStorage[size-1];
        delete this.stackStorage[size-1];
        this.stackSize--;
 
        return deletedData;
    }
};

Stack.prototype.printStack = function() {
	console.log(this);
};

// Test it
stack = new Stack();
console.log("Pushed",4);
stack.push(4);
stack.printStack();
console.log("Pushed",5);
stack.push(5);
stack.printStack();
console.log("Pushed",8);
stack.push(8);
stack.printStack();
var poped = stack.pop();
console.log("Poped",poped);
stack.printStack();