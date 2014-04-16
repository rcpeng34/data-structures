var Stack = function() {
  // Hey! Copy your code from src/prototypal/stack.js and paste it here
  this.storage = {};
  this.currentsize = 0;
};

Stack.prototype.push = function(value){
  this.storage[this.currentsize] = value;
  this.currentsize++;
};

Stack.prototype.pop = function(){
  var storage = this.storage;
  var size = this.currentsize;
  var result = storage[size - 1];
  delete storage[size - 1];
  this.currentsize && this.currentsize--;
  return result;
};

Stack.prototype.size = function(){
  return this.currentsize;
};
