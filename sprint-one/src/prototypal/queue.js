var makeQueue = function() {
  var instance = Object.create(queueMethods);
  instance.length = 0;
  instance.storage = {};
  return instance;
};

var queueMethods = {};
queueMethods.enqueue = function(value) {
  this.storage[this.length] = value;
  this.length++;
};
queueMethods.dequeue = function() {
  var result = this.storage[0];
  for (var i = 1; i < this.length; i ++) {
    this.storage[i-1] = this.storage [i];
  }
  delete this.storage[this.length];
  this.length && this.length--;
  return result;
};
queueMethods.size = function() {
  return this.length;
};
