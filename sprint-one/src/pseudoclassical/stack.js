var Stack = function() {
  this._storage = {};
  this._size = 0;
};

Stack.prototype.push = function(value){
  this._storage[this._size] = value;
  this._size++;
};

Stack.prototype.pop = function(){
  var storage = this._storage;
  var size = this._size;
  var result = storage[size - 1];
  delete storage[size - 1];
  this._size && this._size--;
  return result;
};

Stack.prototype.size = function(){
  return this._size;
};
