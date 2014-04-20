var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var makeStack = function() {
  var instance = {};

  instance._storage = {};
  instance._size = 0;

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
    // get last item
    var result = storage[size - 1];
    // remove last item from the stack
    delete storage[size - 1];
    // decrement as necessary
    this._size && this._size--;
    return result;
  },
  size: function(){
    return this._size;
  }
};
