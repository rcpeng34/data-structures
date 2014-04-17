var Queue = function() {
  this._size = 0;
  this._storage = {};
};

Queue.prototype.enqueue = function(value) {
  this._storage[this._size] = value;
  this._size++;
};
Queue.prototype.dequeue = function() {
  var result = this._storage[0];
  for (var i = 1; i < this._size; i ++) {
    this._storage[i-1] = this._storage [i];
  }
  delete this._storage[this._size];
  this._size && this._size--;
  return result;
};
Queue.prototype.size = function() {
  return this._size;
};
