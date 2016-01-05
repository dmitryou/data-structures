function Queue() {
    this.queueStorage = [];
}

Queue.prototype.enqueue = function(data) {
    this.queueStorage.unshift(data);
};


Queue.prototype.dequeue = function() {
    var dequeued = this.queueStorage.pop();
    return dequeued;
};

Queue.prototype.printQueue = function() {
	console.log(this);
};


//Test it 
queue = new Queue();
console.log("dequeue from empty :",queue.dequeue());
queue.enqueue(5);
queue.printQueue();
queue.enqueue(6);
queue.printQueue();
queue.enqueue(7);
queue.enqueue(8);
queue.printQueue();
console.log("dequeue :",queue.dequeue());
queue.printQueue();
console.log("dequeue :",queue.dequeue());
queue.printQueue();
queue.enqueue(4);
queue.printQueue();