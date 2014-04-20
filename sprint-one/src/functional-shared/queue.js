var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var queueMethods = {};
queueMethods.enqueue = function(value) {
  this._storage[this._size] = value;
  this._size++;
};
queueMethods.dequeue = function() {
  var result = this._storage[0];
  // shift everything forward
  for (var i = 1; i < this._size; i ++) {
    this._storage[i-1] = this._storage [i];
  }
  // delete the last element
  delete this._storage[this._size];
  // if size is still > 0, decrement
  this._size && this._size--;
  return result;
};
queueMethods.size = function() {
  return this._size;
};

var makeQueue = function(){
  var instance = {};
  instance._storage = {};
  instance._size = 0;
  extend(instance, queueMethods);
  return instance;
};


