var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var makeStack = function() {
  // Hey! Copy your code from src/functional/stack.js and paste it here
  var instance = {};

  // Use an object with numeric keys to store values
  instance._storage = {};
  instance._size = 0; // Hint: set an initial value here

  extend(instance, stackMethods);

  return instance;
};

var stackMethods = {
  push: function(value){
    this._storage[this._size] = value;
    this._size++;
  },
  pop: function(){
    var storage = this._storage;
    var size = this._size;
    var result = storage[size - 1];
    delete storage[size - 1];
    this._size && this._size--;
    return result;
  },
  size: function(){
    return this._size;
  }
};
