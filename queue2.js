function Queue() {
    this._oldestIndex = 1;
    this._newestIndex = 1;
    this._storage = {};
}
 
Queue.prototype.size = function() {
    return this._newestIndex - this._oldestIndex;
};
 
Queue.prototype.enqueue = function(data) {
    this._storage[this._newestIndex] = data;
    this._newestIndex++;
};
 
Queue.prototype.dequeue = function() {
    var oldestIndex = this._oldestIndex,
        newestIndex = this._newestIndex,
        deletedData;
 
    if (oldestIndex !== newestIndex) {
        deletedData = this._storage[oldestIndex];
        delete this._storage[oldestIndex];
        this._oldestIndex++;
 
        return deletedData;
    }
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