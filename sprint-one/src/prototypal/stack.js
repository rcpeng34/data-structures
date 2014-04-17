var makeStack = function() {
  var instance = Object.create(stackMethods);
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
  },
  _size: 0,
  _storage: {}
};
