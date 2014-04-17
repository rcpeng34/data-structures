var makeQueue = function() {
  var instance = Object.create(queueMethods);
  instance._size = 0;
  instance._storage = {};
  return instance;
};

var queueMethods = {};
queueMethods.enqueue = function(value) {
  this._storage[this._size] = value;
  this._size++;
};
queueMethods.dequeue = function() {
  var result = this._storage[0];
  for (var i = 1; i < this._size; i ++) {
    this._storage[i-1] = this._storage [i];
  }
  delete this._storage[this._size];
  this._size && this._size--;
  return result;
};
queueMethods.size = function() {
  return this._size;
};
