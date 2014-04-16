var Queue = function() {
  this.length = 0;
  this.storage = {};
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.length] = value;
  this.length++;
};
Queue.prototype.dequeue = function() {
  var result = this.storage[0];
  for (var i = 1; i < this.length; i ++) {
    this.storage[i-1] = this.storage [i];
  }
  delete this.storage[this.length];
  this.length && this.length--;
  return result;
};
Queue.prototype.size = function() {
  return this.length;
};
