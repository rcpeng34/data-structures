var makeQueue = function(){
  var instance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  instance.enqueue = function(value){
    storage[size] = value;
    size++;
  };

  instance.dequeue = function(){
    var result = storage[0];
    for (var i = 1; i < size; i ++) {
      storage[i-1] = storage [i];
    }
    delete storage[size];
    // check if size is > 0, if it is, decrement
    size && size--;
    return result;
  };

  instance.size = function(){
    return size;
  };

  return instance;
};
