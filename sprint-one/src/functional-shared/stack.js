var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var makeStack = function() {
  // Hey! Copy your code from src/functional/stack.js and paste it here
  var instance = {};

  // Use an object with numeric keys to store values
  instance.storage = {};
  instance.currentsize = 0; // Hint: set an initial value here

  extend(instance, stackMethods);

  return instance;
};

var stackMethods = {
  push: function(value){
    this.storage[this.currentsize] = value;
    this.currentsize++;
  },
  pop: function(){
    var storage = this.storage;
    var size = this.currentsize;
    var result = storage[size - 1];
    delete storage[size - 1];
    this.currentsize && this.currentsize--;
    return result;
  },
  size: function(){
    return this.currentsize;
  }
};
