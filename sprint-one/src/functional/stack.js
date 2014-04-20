var makeStack = function(){
  var instance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  instance.push = function(value){
    storage[size] = value;
    size++;
  };

  instance.pop = function(){
    var result = storage[size - 1];
    delete storage[size - 1];
    size && size--;
    return result;
  };

  instance.size = function(){
    return size;
  };

  return instance;
};
