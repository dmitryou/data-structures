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
    else {
        return null;
    }
};

Stack.prototype.printStack = function() {
	console.log(this);
};

// Test it
stack = new Stack();
stack.printStack();
var nullPoped = stack.pop();
console.log("Poped value",nullPoped);
console.log("Pushed value",4);
stack.push(4);
stack.printStack();
console.log("Pushed value",5);
stack.push(5);
stack.printStack();
console.log("Pushed value",8);
stack.push(8);
stack.printStack();
var poped = stack.pop();
console.log("Poped value",poped);
stack.printStack();