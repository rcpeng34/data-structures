var makeStack = function() {
  var instance = Object.create(stackMethods);
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
  },
  currentsize: 0,
  storage: {}
};
